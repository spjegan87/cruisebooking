export interface ICruise {
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
  itinerary?: {
    day: number;
    port: string;
    arrival: string;
    departure: string;
    description: string;
  }[];
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  reviews?: {
    id: string;
    user: {
      name: string;
      avatar: string;
    };
    rating: number;
    date: string;
    comment: string;
  }[];
  cabinOptions?: {
    type: string;
    price: number;
    image: string;
    description: string;
    amenities: string[];
  }[];
}

// Cruise data
export const cruiseData: ICruise[] = [
  {
    id: "cruise-1",
    name: "Caribbean Bliss",
    cruiseLine: "Royal Caribbean",
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    gallery: [
      "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1566375638485-edcf63618d4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1544494022-0c7061883ee9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    ],
    location: "Miami to Bahamas",
    departurePort: "Miami, FL",
    destinationPort: "Nassau, Bahamas",
    price: 1299,
    discountPercentage: 15,
    rating: 4.8,
    reviewCount: 320,
    duration: "7 Days, 6 Nights",
    durationDays: 7,
    durationNights: 6,
    cabinType: "Balcony",
    amenities: ["Free WiFi", "Pool", "Spa", "Gourmet Dining", "Entertainment", "Fitness Center"],
    description: "Experience the ultimate Caribbean adventure with our 7-day cruise to the Bahamas. Enjoy world-class dining, luxurious accommodations, and exciting shore excursions.",
    longDescription: "Embark on the vacation of a lifetime aboard Royal Caribbean's newest ship, offering unparalleled luxury and excitement as you sail through the crystal-clear waters of the Caribbean. Your journey begins in vibrant Miami before setting course for the pristine beaches of the Bahamas. Wake up each morning to breathtaking ocean views from your private balcony cabin, designed with your comfort in mind. Indulge in world-class cuisine at multiple specialty restaurants, enjoy Broadway-caliber entertainment, and relax by our resort-style pools. Shore excursions include snorkeling among vibrant coral reefs, exploring historic ports, and experiencing authentic Bahamian culture. Whether you're seeking adventure or relaxation, this carefully crafted itinerary offers the perfect balance of exciting activities and leisure time.",
    featured: true,
    isFavorite: false,
    departureDate: "2024-08-15",
    returnDate: "2024-08-21",
    itinerary: [
      {
        day: 1,
        port: "Miami, FL",
        arrival: "",
        departure: "16:30",
        description: "Embarkation and departure from Miami"
      },
      {
        day: 2,
        port: "At Sea",
        arrival: "",
        departure: "",
        description: "Enjoy ship amenities and activities"
      },
      {
        day: 3,
        port: "Nassau, Bahamas",
        arrival: "08:00",
        departure: "17:00",
        description: "Explore the colorful capital city"
      },
      {
        day: 4,
        port: "CocoCay, Bahamas",
        arrival: "08:00",
        departure: "17:00",
        description: "Private island adventure"
      },
      {
        day: 5,
        port: "Key West, FL",
        arrival: "09:00",
        departure: "18:00",
        description: "Historic island exploration"
      },
      {
        day: 6,
        port: "At Sea",
        arrival: "",
        departure: "",
        description: "Enjoy ship amenities and activities"
      },
      {
        day: 7,
        port: "Miami, FL",
        arrival: "07:00",
        departure: "",
        description: "Disembarkation"
      }
    ],
    highlights: [
      "Private beach day on CocoCay Island",
      "Snorkeling expedition to vibrant coral reefs",
      "Gourmet dining at specialty restaurants",
      "Broadway-style entertainment",
      "Rejuvenating spa treatments"
    ],
    inclusions: [
      "7-day cruise accommodations",
      "All meals in main dining venues",
      "Select beverages (water, coffee, tea)",
      "Entertainment and activities",
      "Access to fitness center and pools",
      "Port fees and taxes"
    ],
    exclusions: [
      "Specialty dining",
      "Alcoholic beverages",
      "Shore excursions",
      "Spa treatments",
      "Travel insurance",
      "Gratuities"
    ]
  },
  {
    id: "cruise-2",
    name: "Mediterranean Odyssey",
    cruiseLine: "MSC Cruises",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    gallery: [
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1551801691-f0bce83d4f25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1569263900347-06b1e8c825ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    ],
    location: "Barcelona to Rome",
    departurePort: "Barcelona, Spain",
    destinationPort: "Rome (Civitavecchia), Italy",
    price: 1599,
    rating: 4.6,
    reviewCount: 254,
    duration: "10 Days, 9 Nights",
    durationDays: 10,
    durationNights: 9,
    cabinType: "Oceanview",
    amenities: ["Free WiFi", "Pool", "Spa", "Fine Dining", "Theater", "Casino"],
    description: "Explore the stunning Mediterranean coastline with stops at historic ports and beautiful islands. This 10-day journey takes you through Spain, France, and Italy.",
    longDescription: "Embark on an unforgettable journey through the heart of the Mediterranean aboard MSC Cruises' elegant vessel. Your adventure begins in Barcelona, Spain's vibrant coastal city, before sailing to some of the most iconic destinations along the Mediterranean coast. Explore charming seaside villages, ancient historical sites, and breathtaking coastal landscapes as you visit ports in Spain, France, and Italy. Your Oceanview cabin provides stunning vistas of the azure Mediterranean waters throughout your journey. Onboard, indulge in authentic Mediterranean cuisine prepared by skilled chefs, enjoy world-class entertainment, and relax by the pool as you sail between destinations. Each port offers unique experiences, from exploring Roman ruins to sampling local wines and cuisines. This carefully crafted itinerary provides the perfect blend of cultural immersion, historical discovery, and leisure time.",
    featured: false,
    isFavorite: true,
    departureDate: "2024-06-10",
    returnDate: "2024-06-19",
    itinerary: [
      {
        day: 1,
        port: "Barcelona, Spain",
        arrival: "",
        departure: "18:00",
        description: "Embarkation and departure from Barcelona"
      },
      {
        day: 2,
        port: "Marseille, France",
        arrival: "09:00",
        departure: "18:00",
        description: "Explore the vibrant port city"
      },
      {
        day: 3,
        port: "Genoa, Italy",
        arrival: "08:00",
        departure: "17:00",
        description: "Discover the birthplace of Christopher Columbus"
      },
      {
        day: 4,
        port: "La Spezia, Italy",
        arrival: "07:00",
        departure: "19:00",
        description: "Gateway to Cinque Terre"
      },
      {
        day: 5,
        port: "At Sea",
        arrival: "",
        departure: "",
        description: "Enjoy ship amenities and activities"
      },
      {
        day: 6,
        port: "Naples, Italy",
        arrival: "07:00",
        departure: "19:00",
        description: "Explore Pompeii and taste authentic pizza"
      },
      {
        day: 7,
        port: "Messina, Sicily",
        arrival: "08:00",
        departure: "18:00",
        description: "Experience Sicilian culture"
      },
      {
        day: 8,
        port: "Valletta, Malta",
        arrival: "08:00",
        departure: "18:00",
        description: "Discover this UNESCO World Heritage site"
      },
      {
        day: 9,
        port: "At Sea",
        arrival: "",
        departure: "",
        description: "Enjoy ship amenities and activities"
      },
      {
        day: 10,
        port: "Rome (Civitavecchia), Italy",
        arrival: "07:00",
        departure: "",
        description: "Disembarkation"
      }
    ]
  },
  {
    id: "cruise-3",
    name: "Alaskan Explorer",
    cruiseLine: "Norwegian Cruise Line",
    image: "https://pixabay.com/get/g11f2146acbe1cbd4d7b8fe678c6d020b29dc144d4c3efe39b4a8e0de074036f9cc48faeb2adb8b8e33d951f148297ca557613f05c07a52b960ad41bef8ffaabb_1280.jpg",
    gallery: [
      "https://pixabay.com/get/g11f2146acbe1cbd4d7b8fe678c6d020b29dc144d4c3efe39b4a8e0de074036f9cc48faeb2adb8b8e33d951f148297ca557613f05c07a52b960ad41bef8ffaabb_1280.jpg",
      "https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1531122677011-5e96d669853f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      "https://images.unsplash.com/photo-1500245801208-9a7d29b2d186?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    ],
    location: "Seattle to Juneau",
    departurePort: "Seattle, WA",
    destinationPort: "Juneau, AK",
    price: 1499,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 176,
    duration: "7 Days, 6 Nights",
    durationDays: 7,
    durationNights: 6,
    cabinType: "Suite",
    amenities: ["Free WiFi", "Pool", "Spa", "Premium Dining", "Wildlife Viewing", "Glacier Tours"],
    description: "Experience the breathtaking natural beauty of Alaska on this 7-day cruise. Witness magnificent glaciers, abundant wildlife, and charming coastal towns.",
    featured: false,
    isFavorite: false
  },
  {
    id: "cruise-4",
    name: "Caribbean Dreams",
    cruiseLine: "Carnival Cruise Line",
    image: "https://pixabay.com/get/gaa53bbfc4d0db516decaeab7c1df9f746ea9971f5642fe36750f864e607e9c6747aa2ecb24f8f740ad7d62b090841296bdcc2e3ec041b3551fd9b781b44fa53e_1280.jpg",
    location: "Miami to Jamaica",
    departurePort: "Miami, FL",
    destinationPort: "Montego Bay, Jamaica",
    price: 899,
    discountPercentage: 20,
    rating: 4.5,
    reviewCount: 210,
    duration: "5 Days, 4 Nights",
    durationDays: 5,
    durationNights: 4,
    cabinType: "Interior",
    amenities: ["Free WiFi", "Pool", "Casino", "Dining", "Entertainment"],
    description: "Enjoy a quick tropical getaway on this 5-day cruise to Jamaica. Perfect for a rejuvenating break with beaches, entertainment, and relaxation.",
    featured: true,
    isFavorite: false
  },
  {
    id: "cruise-5",
    name: "Hawaiian Island Hopper",
    cruiseLine: "Princess Cruises",
    image: "https://pixabay.com/get/gcfc2d1ee65b2276fc02ab0c2ad2a2c9e12aea72aa78d11d4f2e77e6e2ad69d7214a8c8b38583eb12af9d2a2cd2d0da2e5d00e1a9cc56a81c9e14bc95f15e2c2c_1280.jpg",
    location: "Honolulu to Maui",
    departurePort: "Honolulu, HI",
    destinationPort: "Lahaina, Maui",
    price: 2199,
    rating: 4.7,
    reviewCount: 156,
    duration: "12 Days, 11 Nights",
    durationDays: 12,
    durationNights: 11,
    cabinType: "Balcony",
    amenities: ["Free WiFi", "Pool", "Spa", "Polynesian Shows", "Island Excursions", "Premium Dining"],
    description: "Experience the paradise of Hawaii on this island-hopping cruise. Visit four Hawaiian islands with their unique landscapes, cultures, and activities.",
    featured: false,
    isFavorite: true
  },
  {
    id: "cruise-6",
    name: "Fjords of Norway",
    cruiseLine: "Viking Cruises",
    image: "https://pixabay.com/get/g2580f64ca8ead7af28f4e6c61b3e31e94db96a2c7a9a2a84f73ebf53da4ea7254bb91b17d9baf93d5d43e3e2b242d8de76a9b1ebdb1c27da2b6c3e2ffae34f2e_1280.jpg",
    location: "Bergen to Oslo",
    departurePort: "Bergen, Norway",
    destinationPort: "Oslo, Norway",
    price: 2599,
    rating: 4.9,
    reviewCount: 189,
    duration: "8 Days, 7 Nights",
    durationDays: 8,
    durationNights: 7,
    cabinType: "Veranda Suite",
    amenities: ["Free WiFi", "Nordic Spa", "Gourmet Dining", "Cultural Shows", "Fjord Excursions"],
    description: "Cruise through the stunning Norwegian fjords on this 8-day journey. Experience dramatic landscapes, charming villages, and Scandinavian culture.",
    featured: false,
    isFavorite: false
  }
];

// Destinations data
export const destinations = [
  {
    id: "dest-1",
    name: "Caribbean",
    image: "https://pixabay.com/get/g379282cd15bb65a5748b005e37fd2c9c5d51662efe50928cdee5ff7567c77d3a89bd07d75fb071e2acb47e2dee3ed00fe1dc1f03a93634e081badb364a6d6e1a_1280.jpg",
    cruiseCount: 42,
    slug: "caribbean"
  },
  {
    id: "dest-2",
    name: "Mediterranean",
    image: "https://pixabay.com/get/g14cde8bb46c637402d6873801b256993aadb4c334645c83b9c0f103535b3a0606478b66c5dc0ff05c6ec347ed63fc9a678ebc3458e39b0898ca3d8a2bb05c821_1280.jpg",
    cruiseCount: 38,
    slug: "mediterranean"
  },
  {
    id: "dest-3",
    name: "Alaska",
    image: "https://pixabay.com/get/g1e9c2c761567d121f9177d14ff26b23a0f1d83e55f77ba2b1d7919a4a9d4335c3b127fd2b6c16ff8e08ae775e8b64addb5ac2529530077becb7c2b87e215fdc8_1280.jpg",
    cruiseCount: 24,
    slug: "alaska"
  },
  {
    id: "dest-4",
    name: "Greek Islands",
    image: "https://pixabay.com/get/g02b04b753fce7668d57d8f1fc3567b8e5cfcb151321fa6cb6fa941a6c7d3f1a3fd172ca96a46d3c65a71b333dd339e0d688c99d225c21367089aa1d8dde968a3_1280.jpg",
    cruiseCount: 29,
    slug: "greek-islands"
  },
  {
    id: "dest-5",
    name: "Bahamas",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    cruiseCount: 23,
    slug: "bahamas"
  },
  {
    id: "dest-6",
    name: "Hawaii",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    cruiseCount: 17,
    slug: "hawaii"
  }
];

// Cruise types data
export const cruiseTypes = [
  {
    id: "type-1",
    name: "Luxury Cruise",
    icon: "luxury",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: "type-2",
    name: "Adventure Cruise",
    icon: "adventure",
    color: "bg-green-100 text-green-600"
  },
  {
    id: "type-3",
    name: "Family Cruise",
    icon: "family",
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: "type-4",
    name: "River Cruise",
    icon: "river",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    id: "type-5",
    name: "Yacht Charter",
    icon: "yacht",
    color: "bg-red-100 text-red-600"
  },
  {
    id: "type-6",
    name: "Themed Cruise",
    icon: "themed",
    color: "bg-indigo-100 text-indigo-600"
  }
];

// Filter options
export const filterOptions = {
  cabinTypes: [
    { label: "Suite", value: "suite" },
    { label: "Balcony", value: "balcony" },
    { label: "Oceanview", value: "oceanview" },
    { label: "Interior", value: "interior" }
  ],
  cruiseLines: [
    { label: "Royal Caribbean", value: "royal_caribbean" },
    { label: "Carnival Cruise Line", value: "carnival" },
    { label: "Norwegian Cruise Line", value: "norwegian" },
    { label: "MSC Cruises", value: "msc" },
    { label: "Princess Cruises", value: "princess" },
    { label: "Viking Cruises", value: "viking" }
  ],
  amenities: [
    { label: "Free WiFi", value: "wifi" },
    { label: "Pool", value: "pool" },
    { label: "Spa", value: "spa" },
    { label: "Gourmet Dining", value: "dining" },
    { label: "Casino", value: "casino" },
    { label: "Fitness Center", value: "fitness" }
  ],
  destinations: [
    { label: "Caribbean", value: "caribbean" },
    { label: "Mediterranean", value: "mediterranean" },
    { label: "Alaska", value: "alaska" },
    { label: "Hawaii", value: "hawaii" },
    { label: "Europe", value: "europe" },
    { label: "Bahamas", value: "bahamas" }
  ],
  durations: [
    { label: "3-5 Days", value: "short" },
    { label: "6-9 Days", value: "medium" },
    { label: "10+ Days", value: "long" }
  ]
};
