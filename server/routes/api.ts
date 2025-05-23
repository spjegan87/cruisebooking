import express from "express";
import cruiseController from "../controllers/cruiseController";
import bookingController from "../controllers/bookingController";

const router = express.Router();

// Cruise routes
router.get("/cruises", cruiseController.getCruises);
router.get("/cruises/:id", cruiseController.getCruiseById);
router.get("/cruise-types", cruiseController.getCruiseTypes);
router.get("/destinations", cruiseController.getDestinations);
router.get("/filter-options", cruiseController.getFilterOptions);
router.post("/cruises/:id/favorite", cruiseController.toggleFavorite);

// Booking routes
router.post("/bookings", bookingController.createBooking);
router.get("/bookings/:id", bookingController.getBookingById);
router.get("/user/bookings", bookingController.getUserBookings);
router.post("/coupons/apply", bookingController.applyCoupon);
router.get("/dashboard", bookingController.getDashboardData);

export default router;
