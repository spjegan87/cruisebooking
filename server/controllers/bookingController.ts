import { Request, Response } from "express";
import { storage } from "../storage";
import { z } from "zod";

// Validation schemas
const bookingDetailsSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(1, "Phone number is required"),
  age: z.string().min(1, "Age is required"),
  country: z.string().min(1, "Country is required"),
  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  additionalInfo: z.string().optional(),
});

const paymentDetailsSchema = z.object({
  paymentMethod: z.enum(["credit_card", "paypal", "stripe"]),
  cardHolder: z.string().optional(),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
});

// Create a booking
const createBooking = async (req: Request, res: Response) => {
  try {
    const { cruiseId, bookingDetails, paymentDetails, totalAmount } = req.body;
    
    // Validate request body
    const schema = z.object({
      cruiseId: z.string().min(1, "Cruise ID is required"),
      bookingDetails: bookingDetailsSchema,
      paymentDetails: paymentDetailsSchema,
      totalAmount: z.number().min(0, "Total amount must be a positive number"),
    });
    
    try {
      schema.parse(req.body);
    } catch (error) {
      return res.status(400).json({ message: "Invalid request body", error });
    }
    
    // Check if cruise exists
    const cruise = await storage.getCruiseById(cruiseId);
    
    if (!cruise) {
      return res.status(404).json({ message: "Cruise not found" });
    }
    
    // Create booking reference number
    const bookingReference = `BK${Math.floor(Math.random() * 1000000)}`;
    
    // In a real application, you would process payment here
    
    // Create booking in database
    const booking = await storage.createBooking({
      id: bookingReference,
      cruiseId,
      bookingDetails,
      paymentDetails: {
        // Don't store full card details in a real app, just for demo
        method: paymentDetails.paymentMethod,
        status: "paid",
        amount: totalAmount,
        date: new Date().toISOString(),
      },
      status: "upcoming",
      createdAt: new Date().toISOString(),
    });
    
    res.status(201).json({
      message: "Booking created successfully",
      bookingReference,
      booking,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

// Get booking by ID
const getBookingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const booking = await storage.getBookingById(id);
    
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking", error });
  }
};

// Get user bookings
const getUserBookings = async (req: Request, res: Response) => {
  try {
    // In a real app, you would get userId from authenticated session
    const userId = req.query.userId || "demo_user";
    
    const bookings = await storage.getUserBookings(String(userId));
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user bookings", error });
  }
};

// Apply coupon code
const applyCoupon = async (req: Request, res: Response) => {
  try {
    const { code } = req.body;
    
    // Validate request body
    const schema = z.object({
      code: z.string().min(1, "Coupon code is required"),
    });
    
    try {
      schema.parse(req.body);
    } catch (error) {
      return res.status(400).json({ message: "Invalid request body", error });
    }
    
    // Check if coupon exists
    if (code.toLowerCase() === 'dreams20') {
      return res.json({
        success: true,
        message: `Coupon Code ${code} ($20) has been applied successfully.`,
        discount: 20,
      });
    }
    
    return res.status(404).json({
      success: false,
      message: "Invalid coupon code. Please try again.",
      discount: 0,
    });
  } catch (error) {
    res.status(500).json({ message: "Error applying coupon", error });
  }
};

// Get dashboard data
const getDashboardData = async (req: Request, res: Response) => {
  try {
    // In a real app, you would get userId from authenticated session
    const userId = req.query.userId || "demo_user";
    
    const dashboardData = await storage.getDashboardData(String(userId));
    res.json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard data", error });
  }
};

export default {
  createBooking,
  getBookingById,
  getUserBookings,
  applyCoupon,
  getDashboardData,
};
