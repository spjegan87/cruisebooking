// Ship images
export const shipImages = [
  'https://pixabay.com/get/gaa53bbfc4d0db516decaeab7c1df9f746ea9971f5642fe36750f864e607e9c6747aa2ecb24f8f740ad7d62b090841296bdcc2e3ec041b3551fd9b781b44fa53e_1280.jpg',
  'https://pixabay.com/get/g86a9a73bb0cf917249acde6b37f9422c34c9eee46795ca6cf9b4a470ab992d295266a61d696318d71d17528f8386ec12c9d18acf2f0ec0b5c5a9b688c86a9c3c_1280.jpg',
  'https://pixabay.com/get/ge6286df63c56233f3d278c40918546886bf56c5fe6ab5086816ed0fb37e2c57898918f2b059d1c4158bf96bda171e022da043fd763615a7e17d86964f61acbba_1280.jpg',
  'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
  'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
  'https://pixabay.com/get/g11f2146acbe1cbd4d7b8fe678c6d020b29dc144d4c3efe39b4a8e0de074036f9cc48faeb2adb8b8e33d951f148297ca557613f05c07a52b960ad41bef8ffaabb_1280.jpg'
];

// Destination images (tropical locations)
export const destinationImages = [
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Caribbean
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Mediterranean
  'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Alaska
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Greek Islands
  'https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Hawaii
  'https://images.unsplash.com/photo-1580745777747-d2ea5bb36132?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Baltic Sea
];

// Cabin images
export const cabinImages = [
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500',
  'https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500',
  'https://pixabay.com/get/g7f5d087b928da5347124e4d2fc403aa17b892cee673468195d13fb3da163532887e50d0017eaef43552a26f86e2a803ee6daf653a84eeef707370320cfc2a7a5_1280.jpg',
  'https://pixabay.com/get/g91c25a868f63a3f971f26523716e0c8838d46b64bca3d2e772436cc06c5130b50766a0282582768e5828ade68ab2eb68f03b5de75d0a63245b71dadad8263a17_1280.jpg'
];

export const cruiseTypes = [
  { id: 1, name: 'Luxury Cruise', icon: 'ship', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
  { id: 2, name: 'Adventure Cruise', icon: 'hiking', bgColor: 'bg-green-100', textColor: 'text-green-600' },
  { id: 3, name: 'Family Cruise', icon: 'users', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
  { id: 4, name: 'River Cruise', icon: 'water', bgColor: 'bg-yellow-100', textColor: 'text-yellow-600' },
  { id: 5, name: 'Yacht Charter', icon: 'anchor', bgColor: 'bg-red-100', textColor: 'text-red-600' },
  { id: 6, name: 'Themed Cruise', icon: 'glass-cheers', bgColor: 'bg-indigo-100', textColor: 'text-indigo-600' }
];

export const popularDestinations = [
  { id: 1, name: 'Caribbean', cruises: 28, image: destinationImages[0] },
  { id: 2, name: 'Mediterranean', cruises: 42, image: destinationImages[1] },
  { id: 3, name: 'Alaska', cruises: 19, image: destinationImages[2] },
  { id: 4, name: 'Greek Islands', cruises: 29, image: destinationImages[3] },
  { id: 5, name: 'Hawaii', cruises: 23, image: destinationImages[4] },
  { id: 6, name: 'Baltic Sea', cruises: 15, image: destinationImages[5] },
  { id: 7, name: 'Bahamas', cruises: 23, image: shipImages[3] },
  { id: 8, name: 'Asia', cruises: 31, image: shipImages[2] }
];

export const cruiseLines = [
  'Royal Caribbean',
  'Carnival Cruise Line',
  'Norwegian Cruise Line',
  'Celebrity Cruises',
  'Disney Cruise Line',
  'Princess Cruises',
  'MSC Cruises',
  'Holland America Line',
  'Costa Cruises'
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah J.',
    cruise: 'Caribbean Cruise',
    rating: 5,
    comment: "The Caribbean cruise package we booked through DreamsTour was absolutely perfect! The booking process was smooth, and the customer service was exceptional."
  },
  {
    id: 2,
    name: 'Michael T.',
    cruise: 'Mediterranean Cruise',
    rating: 5,
    comment: "Our Mediterranean cruise exceeded all expectations! The itinerary was perfect, and the exclusive deals on DreamsTour helped us save significantly on our dream vacation."
  },
  {
    id: 3,
    name: 'David R.',
    cruise: 'Alaskan Cruise',
    rating: 4.5,
    comment: "The Alaskan cruise we booked was the trip of a lifetime! The glaciers were breathtaking, and the onboard experience was luxurious. DreamsTour made everything seamless."
  }
];

export const cabinTypes = ['Suite', 'Balcony', 'Ocean View', 'Interior'];

export const amenities = [
  'Wifi',
  'Pool',
  'Spa',
  'Restaurant',
  'Bar',
  'Gym',
  'Casino',
  'Entertainment',
  'Kids Club',
  'Excursions'
];

export const cruiseList = [
  {
    id: 1,
    name: 'Royal Appreciation',
    cruiseLine: 'Royal Caribbean',
    location: 'Miami to Bahamas',
    image: shipImages[0],
    duration: '7 Days',
    rating: 4.5,
    reviews: 400,
    cabinType: 'Suite',
    price: 1899,
    discount: 0,
    featured: true,
    description: 'Experience the ultimate luxury at sea with Royal Appreciation. Enjoy world-class dining, spectacular entertainment, and enriching activities, all while visiting the most breathtaking destinations in the Caribbean.',
    amenities: ['Wifi', 'Pool', 'Spa', 'Restaurant', 'All Inclusive'],
    departDate: '2024-10-15',
    returnDate: '2024-10-22'
  },
  {
    id: 2,
    name: 'Oceanic Yacht',
    cruiseLine: 'Luxury Yachts',
    location: 'San Diego, California',
    image: shipImages[1],
    duration: '5 Days',
    rating: 5.0,
    reviews: 328,
    cabinType: 'Balcony',
    price: 2599,
    discount: 0,
    featured: false,
    description: 'Indulge in an exclusive yacht experience along the California coast. This intimate journey offers personalized service, gourmet cuisine, and access to secluded coves and beaches most travelers never see.',
    amenities: ['Wifi', 'Private Beach', 'Premium Dining', 'Entertainment'],
    departDate: '2024-11-10',
    returnDate: '2024-11-15'
  },
  {
    id: 3,
    name: 'Coral Cruiser',
    cruiseLine: 'Coral Cruise Line',
    location: 'Bahamas',
    image: shipImages[2],
    duration: '4 Days',
    rating: 4.8,
    reviews: 520,
    cabinType: 'Suite',
    price: 1099,
    discount: 20,
    featured: true,
    description: 'Explore the crystal-clear waters of the Bahamas on this family-friendly cruise. With activities for all ages, beautiful beaches, and snorkeling in pristine coral reefs, this is the perfect tropical getaway.',
    amenities: ['Wifi', 'Family Pool', 'Kids Club', 'Game Room'],
    departDate: '2024-09-05',
    returnDate: '2024-09-09'
  },
  {
    id: 4,
    name: 'Mediterranean Magic',
    cruiseLine: 'MSC Cruises',
    location: 'Barcelona to Rome',
    image: shipImages[3],
    duration: '10 Days',
    rating: 4.7,
    reviews: 254,
    cabinType: 'Balcony',
    price: 1599,
    discount: 0,
    featured: false,
    description: '10 Days exploring Mediterranean gems with stops at historic ports and beautiful islands. Enjoy premium dining and world-class entertainment.',
    amenities: ['Wifi', 'Pool', 'Excursions', 'Entertainment'],
    departDate: '2024-06-15',
    returnDate: '2024-06-25'
  },
  {
    id: 5,
    name: 'Alaskan Explorer',
    cruiseLine: 'Norwegian Cruise Line',
    location: 'Seattle to Juneau',
    image: shipImages[4],
    duration: '7 Days',
    rating: 4.9,
    reviews: 176,
    cabinType: 'Ocean View',
    price: 1499,
    discount: 15,
    featured: false,
    description: '7 Days glaciers and wildlife adventure. Witness breathtaking landscapes and diverse wildlife in their natural habitat.',
    amenities: ['Wifi', 'Panoramic Lounge', 'Wildlife Tours', 'Gourmet Dining'],
    departDate: '2024-07-20',
    returnDate: '2024-07-27'
  },
  {
    id: 6,
    name: 'Caribbean Bliss',
    cruiseLine: 'Carnival Cruise Line',
    location: 'Miami to Caribbean Islands',
    image: shipImages[5],
    duration: '7 Days',
    rating: 4.8,
    reviews: 320,
    cabinType: 'Suite',
    price: 1299,
    discount: 0,
    featured: false,
    description: '7 Days in Caribbean with Carnival Cruise Line. Experience luxury at sea with our premium cruise package featuring gourmet dining, spa treatments, and breathtaking ocean views.',
    amenities: ['Wifi', 'Pool', 'Spa', 'Gourmet Dining'],
    departDate: '2024-08-10',
    returnDate: '2024-08-17'
  }
];

export const bookingDetails = {
  id: 45669,
  cruiseLine: 'Carnival Cruise Line',
  cruiseType: 'Luxury Cruise',
  location: '15/C Prince Dareen Road, New York',
  rating: 4.8,
  reviews: 400,
  cabinType: 'Suite',
  rooms: 1,
  roomPrice: 400,
  guests: {
    adults: 4,
    children: 2
  },
  from: 'Las Vegas',
  to: 'Newyork',
  duration: {
    days: 4,
    nights: 5
  },
  departureDate: '2024-05-20T10:30:00',
  bookedOn: '2024-05-15',
  checkoutDate: '2024-05-25T10:50:00',
  extraServices: ['Custom Service', 'Pickup & Drop', 'Breakfast'],
  billingInfo: {
    name: 'Chris Foxy',
    email: 'chris2356@example.com',
    phone: '+1 12656 26654',
    address: '15/C Prince Road, New York'
  },
  paymentInfo: {
    method: 'Credit Card (Visa)',
    status: 'Paid',
    dateOfPayment: '2024-05-20T10:50:00',
    tax: {
      percentage: 15,
      amount: 60
    },
    discount: {
      percentage: 20,
      amount: 15
    },
    bookingFees: 25,
    totalPaid: 5569
  }
};

export const dashboardStats = {
  totalBookings: 80,
  totalTransactions: 5300,
  averageValue: 5965,
  recentBookings: [
    {
      id: 1,
      name: 'Royal Residency',
      image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50',
      date: '24 May 2023',
      time: '09:30 AM',
      status: 'Confirmed'
    },
    {
      id: 2,
      name: 'AeroFlight 235',
      image: 'https://pixabay.com/get/g719d9ed43d71a3957e02e17aa38ef0962c6ef0a44dd58089eca29de619f03eafbaa6600ce49feb6f5627b68c905f1cef738edba8260fee74a7b25758bb613f09_1280.jpg',
      date: '22 May 2023',
      time: '10:45 AM',
      status: 'Upcoming'
    },
    {
      id: 3,
      name: 'Rainbow Valley',
      image: 'https://images.unsplash.com/photo-1468746587034-766ade47c1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50',
      date: '21 May 2023',
      time: '02:30 PM',
      status: 'Completed'
    }
  ],
  serviceCategories: [
    { name: 'Hotels', count: 868, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150' },
    { name: 'Flights', count: 409, image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150' },
    { name: 'Tours', count: 105, image: destinationImages[1] },
    { name: 'Cars', count: 688, image: 'https://images.unsplash.com/photo-1533558527255-407147f3ae72?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150' },
    { name: 'Cruises', count: 168, image: shipImages[0] }
  ],
  monthlySales: 2659,
  yearlyComparison: '+25%',
  notifications: [
    {
      id: 1,
      type: 'info',
      title: 'Pre-Tour Information',
      time: '1h ago',
      message: 'Complete details of your Pre-Tour Information is now available'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Rescheduling',
      time: '2h ago',
      message: 'Your flight on 15 Apr 2023 has been rescheduled'
    },
    {
      id: 3,
      type: 'success',
      title: 'Booking Confirmation',
      time: '3h ago',
      message: 'Your booking #1234567 has been confirmed for 21 Jan 2023'
    },
    {
      id: 4,
      type: 'promo',
      title: 'Special Offer',
      time: '1d ago',
      message: 'Book next tour with us by Sep 2023 and get 15% off'
    }
  ],
  recentInvoices: [
    {
      id: 1,
      name: 'Cloudrider 789',
      reference: '#58479',
      date: '15 May 2024',
      amount: 569,
      status: 'Paid'
    },
    {
      id: 2,
      name: 'The Luxe Haven',
      reference: '#39512',
      date: '12 May 2024',
      amount: 420,
      status: 'Paid'
    },
    {
      id: 3,
      name: 'Ford Mustang 4.6 AT',
      reference: '#87425',
      date: '09 May 2024',
      amount: 380,
      status: 'Pending'
    },
    {
      id: 4,
      name: 'Super Aquamarine',
      reference: '#47512',
      date: '05 May 2024',
      amount: 479,
      status: 'Paid'
    },
    {
      id: 5,
      name: 'Mystic Falls',
      reference: '#25417',
      date: '29 Apr 2024',
      amount: 629,
      status: 'Refunded'
    }
  ]
};
