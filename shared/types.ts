// Cruise Types
export interface Cruise {
  id: string;
  name: string;
  cruiseLine: string;
  image: string;
  gallery?: string[];
  location: string;
  departurePort: string;
  destinationPort: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  durationDays: number;
  durationNights: number;
  cabinType: string;
  amenities: string[];
  description: string;
  longDescription?: string;
  featured?: boolean;
  isFavorite?: boolean;
  departureDate?: string;
  returnDate?: string;
  itinerary?: CruiseItineraryItem[];
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  reviews?: CruiseReview[];
  cabinOptions?: CabinOption[];
}

export interface CruiseItineraryItem {
  day: number;
  port: string;
  arrival: string;
  departure: string;
  description: string;
}

export interface CruiseReview {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  comment: string;
}

export interface CabinOption {
  type: string;
  price: number;
  image: string;
  description: string;
  amenities: string[];
}

export interface CruiseType {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  cruiseCount: number;
  slug: string;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterOptions {
  cabinTypes: FilterOption[];
  cruiseLines: FilterOption[];
  amenities: FilterOption[];
  destinations: FilterOption[];
  durations: FilterOption[];
}

// Booking Types
export interface BookingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  country: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  additionalInfo?: string;
}

export interface PaymentDetails {
  method: "credit_card" | "paypal" | "stripe";
  status: "pending" | "paid" | "failed";
  amount: number;
  date: string;
  cardDetails?: {
    cardHolder: string;
    lastFour: string;
    expiryDate: string;
  };
}

export interface Booking {
  id: string;
  cruiseId: string;
  bookingDetails: BookingDetails;
  paymentDetails: PaymentDetails;
  status: "upcoming" | "completed" | "cancelled";
  createdAt: string;
}

export interface BookingConfirmation {
  id: string;
  cruiseLine: {
    name: string;
    logo: string;
  };
  cruiseType: string;
  rating: number;
  reviewCount: number;
  location: string;
  cabinDetails: {
    type: string;
    roomCount: number;
    roomPrice: number;
    guestCount: string;
  };
  bookingInfo: {
    from: string;
    to: string;
    duration: string;
    departureDate: string;
    checkinDate: string;
    checkoutDate: string;
  };
  extraServices: string[];
  billingInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  orderInfo: {
    id: string;
    paymentMethod: string;
    paymentStatus: string;
    paymentDate: string;
    tax: string;
    discount: string;
    bookingFees: number;
    totalPaid: number;
  };
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface BookingSummary {
  id: string;
  cruiseName: string;
  cruiseImage: string;
  departureDate: string;
  returnDate: string;
  price: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface DashboardData {
  stats: {
    totalBookings: number;
    totalTransactions: number;
    averageValue: number;
  };
  recentBookings: BookingSummary[];
  monthlyBookings: {
    month: string;
    bookings: number;
  }[];
  serviceCategories: {
    id: string;
    name: string;
    image: string;
    count: number;
  }[];
}
