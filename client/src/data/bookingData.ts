export interface IBookingConfirmation {
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

export interface IBookingSummary {
  id: string;
  cruiseName: string;
  cruiseImage: string;
  departureDate: string;
  returnDate: string;
  price: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface IDashboardData {
  stats: {
    totalBookings: number;
    totalTransactions: number;
    averageValue: number;
  };
  recentBookings: IBookingSummary[];
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

// Sample booking confirmation data - note this is just to provide the structure, in a real app this would come from an API
export const bookingConfirmationData: IBookingConfirmation = {
  id: '45669',
  cruiseLine: {
    name: 'Carnival Cruise Line',
    logo: 'https://pixabay.com/get/g91c25a868f63a3f971f26523716e0c8838d46b64bca3d2e772436cc06c5130b50766a0282582768e5828ade68ab2eb68f03b5de75d0a63245b71dadad8263a17_1280.jpg',
  },
  cruiseType: 'Luxury Cruise',
  rating: 4.8,
  reviewCount: 400,
  location: '15/C Prince Dareen Road, New York',
  cabinDetails: {
    type: 'Suite',
    roomCount: 1,
    roomPrice: 400,
    guestCount: '4 Adults, 2 Child',
  },
  bookingInfo: {
    from: 'Las Vegas',
    to: 'Newyork',
    duration: '4 Days, 5 Nights',
    departureDate: '20 May 2024, 10:50 AM',
    checkinDate: '15 May 2024',
    checkoutDate: '25 May 2024, 10:50 AM',
  },
  extraServices: ['Custom Service', 'Pickup & Drop', 'Breakfast'],
  billingInfo: {
    name: 'Chris Foxy',
    email: 'chris2356@example.com',
    phone: '+1 12656 26654',
    address: '15/C Prince Road, New York',
  },
  orderInfo: {
    id: '45669',
    paymentMethod: 'Credit Card (Visa)',
    paymentStatus: 'Paid',
    paymentDate: '20 May 2024, 10:50 AM',
    tax: '15% ($60)',
    discount: '20% ($15)',
    bookingFees: 25,
    totalPaid: 5569,
  },
  status: 'upcoming',
};

// Sample dashboard data - note this is just to provide the structure, in a real app this would come from an API
export const dashboardData: IDashboardData = {
  stats: {
    totalBookings: 80,
    totalTransactions: 5.3,
    averageValue: 5965,
  },
  recentBookings: [
    {
      id: 'BK001',
      cruiseName: 'Royal Residency',
      cruiseImage: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50',
      departureDate: '24 May 2023',
      returnDate: '29 May 2023',
      price: 1299,
      status: 'confirmed',
    } as IBookingSummary,
    {
      id: 'BK002',
      cruiseName: 'AeroFlight 235',
      cruiseImage: 'https://pixabay.com/get/g719d9ed43d71a3957e02e17aa38ef0962c6ef0a44dd58089eca29de619f03eafbaa6600ce49feb6f5627b68c905f1cef738edba8260fee74a7b25758bb613f09_1280.jpg',
      departureDate: '22 May 2023',
      returnDate: '27 May 2023',
      price: 1599,
      status: 'upcoming',
    } as IBookingSummary,
    {
      id: 'BK003',
      cruiseName: 'Rainbow Valley',
      cruiseImage: 'https://images.unsplash.com/photo-1468746587034-766ade47c1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50',
      departureDate: '21 May 2023',
      returnDate: '26 May 2023',
      price: 1849,
      status: 'completed',
    } as IBookingSummary,
  ],
  monthlyBookings: [
    { month: 'Jan', bookings: 20 },
    { month: 'Feb', bookings: 30 },
    { month: 'Mar', bookings: 25 },
    { month: 'Apr', bookings: 45 },
    { month: 'May', bookings: 60 },
    { month: 'Jun', bookings: 40 },
    { month: 'Jul', bookings: 80 },
    { month: 'Aug', bookings: 65 },
  ],
  serviceCategories: [
    {
      id: 'SC001',
      name: 'Hotels',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150',
      count: 868,
    },
    {
      id: 'SC002',
      name: 'Flights',
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150',
      count: 409,
    },
    {
      id: 'SC003',
      name: 'Tours',
      image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150',
      count: 367,
    },
    {
      id: 'SC004',
      name: 'Cars',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150',
      count: 695,
    },
    {
      id: 'SC005',
      name: 'Cruises',
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150',
      count: 485,
    },
  ],
};
