import { db } from "./db";
import { users, cruises, destinations, cruiseTypes, cruiseLines, cruiseItinerary, cabinOptions, bookings, reviews, userFavorites } from "@shared/schema";
import { type User, type InsertUser, type Cruise, type InsertCruise, type Booking, type InsertBooking, type Review, type InsertReview } from "@shared/schema";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Cruise methods
  getCruises(): Promise<Cruise[]>;
  getCruiseById(id: number): Promise<Cruise | undefined>;
  getCruiseBySlug(slug: string): Promise<Cruise | undefined>;
  createCruise(cruise: InsertCruise): Promise<Cruise>;
  updateCruise(id: number, cruise: Partial<InsertCruise>): Promise<Cruise | undefined>;
  deleteCruise(id: number): Promise<boolean>;
  
  // Booking methods
  getBookings(): Promise<Booking[]>;
  getUserBookings(userId: number): Promise<Booking[]>;
  getBookingById(id: number): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingStatus(id: number, status: 'upcoming' | 'completed' | 'cancelled'): Promise<Booking | undefined>;
  
  // Review methods
  getReviews(cruiseId: number): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  
  // Favorites methods
  toggleFavorite(userId: number, cruiseId: number, isFavorite: boolean): Promise<boolean>;
  getUserFavorites(userId: number): Promise<Cruise[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Cruise methods
  async getCruises(): Promise<Cruise[]> {
    return await db.select().from(cruises);
  }

  async getCruiseById(id: number): Promise<Cruise | undefined> {
    const [cruise] = await db.select().from(cruises).where(eq(cruises.id, id));
    return cruise || undefined;
  }

  async getCruiseBySlug(slug: string): Promise<Cruise | undefined> {
    const [cruise] = await db.select().from(cruises).where(eq(cruises.slug, slug));
    return cruise || undefined;
  }

  async createCruise(insertCruise: InsertCruise): Promise<Cruise> {
    const [cruise] = await db.insert(cruises).values(insertCruise).returning();
    return cruise;
  }

  async updateCruise(id: number, cruiseData: Partial<InsertCruise>): Promise<Cruise | undefined> {
    const [cruise] = await db
      .update(cruises)
      .set({ ...cruiseData, updatedAt: new Date() })
      .where(eq(cruises.id, id))
      .returning();
    return cruise || undefined;
  }

  async deleteCruise(id: number): Promise<boolean> {
    const [deleted] = await db
      .delete(cruises)
      .where(eq(cruises.id, id))
      .returning();
    return !!deleted;
  }

  // Booking methods
  async getBookings(): Promise<Booking[]> {
    return await db.select().from(bookings);
  }

  async getUserBookings(userId: number): Promise<Booking[]> {
    return await db.select().from(bookings).where(eq(bookings.userId, userId));
  }

  async getBookingById(id: number): Promise<Booking | undefined> {
    const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));
    return booking || undefined;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [booking] = await db.insert(bookings).values(insertBooking).returning();
    return booking;
  }

  async updateBookingStatus(id: number, status: 'upcoming' | 'completed' | 'cancelled'): Promise<Booking | undefined> {
    const [booking] = await db
      .update(bookings)
      .set({ status: status, updatedAt: new Date() })
      .where(eq(bookings.id, id))
      .returning();
    return booking || undefined;
  }

  // Review methods
  async getReviews(cruiseId: number): Promise<Review[]> {
    return await db.select().from(reviews).where(eq(reviews.cruiseId, cruiseId));
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const [review] = await db.insert(reviews).values(insertReview).returning();
    
    // Update cruise rating and review count
    const cruiseReviews = await this.getReviews(insertReview.cruiseId);
    const averageRating = cruiseReviews.reduce((sum, review) => sum + Number(review.rating), 0) / cruiseReviews.length;
    
    await db
      .update(cruises)
      .set({ 
        rating: averageRating.toFixed(1),
        reviewCount: cruiseReviews.length,
        updatedAt: new Date()
      })
      .where(eq(cruises.id, insertReview.cruiseId));
    
    return review;
  }

  // Favorites methods
  async toggleFavorite(userId: number, cruiseId: number, isFavorite: boolean): Promise<boolean> {
    if (isFavorite) {
      try {
        await db.insert(userFavorites).values({
          userId,
          cruiseId
        });
        return true;
      } catch (error) {
        // Record might already exist
        return false;
      }
    } else {
      const [deleted] = await db
        .delete(userFavorites)
        .where(
          and(
            eq(userFavorites.userId, userId),
            eq(userFavorites.cruiseId, cruiseId)
          )
        )
        .returning();
      return !!deleted;
    }
  }

  async getUserFavorites(userId: number): Promise<Cruise[]> {
    return await db
      .select({ cruise: cruises })
      .from(userFavorites)
      .innerJoin(cruises, eq(userFavorites.cruiseId, cruises.id))
      .where(eq(userFavorites.userId, userId))
      .then(results => results.map(r => r.cruise));
  }
}

export const storage = new DatabaseStorage();
