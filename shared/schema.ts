import { pgTable, text, serial, integer, boolean, timestamp, doublePrecision, foreignKey, decimal, varchar, json, pgEnum, primaryKey, uniqueIndex } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  phone: text("phone"),
  avatar: text("avatar"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Destinations table
export const destinations = pgTable("destinations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
  cruiseCount: integer("cruise_count").default(0),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Cruise types table
export const cruiseTypes = pgTable("cruise_types", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  slug: text("slug").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Cruise lines table
export const cruiseLines = pgTable("cruise_lines", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  logo: text("logo"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Cruises table
export const cruises = pgTable("cruises", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  cruiseLineId: integer("cruise_line_id").references(() => cruiseLines.id),
  image: text("image").notNull(),
  gallery: json("gallery").$type<string[]>(),
  destinationId: integer("destination_id").references(() => destinations.id),
  departurePort: text("departure_port").notNull(),
  destinationPort: text("destination_port").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  discountPercentage: decimal("discount_percentage", { precision: 5, scale: 2 }),
  rating: decimal("rating", { precision: 3, scale: 1 }).default("0"),
  reviewCount: integer("review_count").default(0),
  duration: text("duration").notNull(),
  durationDays: integer("duration_days").notNull(),
  durationNights: integer("duration_nights").notNull(),
  cabinType: text("cabin_type").notNull(),
  amenities: json("amenities").$type<string[]>(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  featured: boolean("featured").default(false),
  slug: text("slug").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Cruise itinerary table
export const cruiseItinerary = pgTable("cruise_itinerary", {
  id: serial("id").primaryKey(),
  cruiseId: integer("cruise_id").references(() => cruises.id).notNull(),
  day: integer("day").notNull(),
  port: text("port").notNull(),
  arrival: text("arrival"),
  departure: text("departure"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Cabin options table
export const cabinOptions = pgTable("cabin_options", {
  id: serial("id").primaryKey(),
  cruiseId: integer("cruise_id").references(() => cruises.id).notNull(),
  type: text("type").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  image: text("image"),
  description: text("description"),
  amenities: json("amenities").$type<string[]>(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// User favorites (many-to-many relationship)
export const userFavorites = pgTable("user_favorites", {
  userId: integer("user_id").references(() => users.id).notNull(),
  cruiseId: integer("cruise_id").references(() => cruises.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (t) => ({
  pk: primaryKey({ columns: [t.userId, t.cruiseId] }),
}));

// Booking status enum
export const bookingStatusEnum = pgEnum("booking_status", [
  "upcoming", 
  "completed", 
  "cancelled"
]);

// Bookings table
export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  cruiseId: integer("cruise_id").references(() => cruises.id).notNull(),
  cabinType: text("cabin_type").notNull(),
  cabinPrice: decimal("cabin_price", { precision: 10, scale: 2 }).notNull(),
  guestCount: integer("guest_count").notNull(),
  departureDate: timestamp("departure_date").notNull(),
  returnDate: timestamp("return_date").notNull(),
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  status: bookingStatusEnum("status").default("upcoming").notNull(),
  paymentStatus: text("payment_status").default("pending").notNull(),
  paymentMethod: text("payment_method"),
  bookingDetails: json("booking_details"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Reviews table
export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  cruiseId: integer("cruise_id").references(() => cruises.id).notNull(),
  userId: integer("user_id").references(() => users.id).notNull(),
  rating: decimal("rating", { precision: 3, scale: 1 }).notNull(),
  comment: text("comment"),
  date: timestamp("date").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  bookings: many(bookings),
  reviews: many(reviews),
  favorites: many(userFavorites),
}));

export const cruisesRelations = relations(cruises, ({ one, many }) => ({
  cruiseLine: one(cruiseLines, {
    fields: [cruises.cruiseLineId],
    references: [cruiseLines.id],
  }),
  destination: one(destinations, {
    fields: [cruises.destinationId],
    references: [destinations.id],
  }),
  itinerary: many(cruiseItinerary),
  cabinOptions: many(cabinOptions),
  bookings: many(bookings),
  reviews: many(reviews),
  favorites: many(userFavorites),
}));

export const bookingsRelations = relations(bookings, ({ one }) => ({
  user: one(users, {
    fields: [bookings.userId],
    references: [users.id],
  }),
  cruise: one(cruises, {
    fields: [bookings.cruiseId],
    references: [cruises.id],
  }),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  user: one(users, {
    fields: [reviews.userId],
    references: [users.id],
  }),
  cruise: one(cruises, {
    fields: [reviews.cruiseId],
    references: [cruises.id],
  }),
}));

export const userFavoritesRelations = relations(userFavorites, ({ one }) => ({
  user: one(users, {
    fields: [userFavorites.userId],
    references: [users.id],
  }),
  cruise: one(cruises, {
    fields: [userFavorites.cruiseId],
    references: [cruises.id],
  }),
}));

// Create insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  firstName: true,
  lastName: true,
  phone: true,
  avatar: true,
});

export const insertCruiseSchema = createInsertSchema(cruises).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertCruise = z.infer<typeof insertCruiseSchema>;
export type Cruise = typeof cruises.$inferSelect;

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;

export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Review = typeof reviews.$inferSelect;
