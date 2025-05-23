export interface Cruise {
  id: string;
  name: string;
  cruiseLine: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  destination: string;
  departure: string;
  arrival: string;
  duration: { days: number; nights: number };
  description: string;
  cabinType: string;
  amenities: string[];
  featured?: boolean;
  discount?: number;
  category: string;
}

export interface CruiseType {
  id: string;
  name: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  cruiseCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
  cruiseType: string;
}

export const cruiseTypes: CruiseType[] = [
  {
    id: "luxury",
    name: "Luxury Cruise",
    icon: "ship",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "beach",
    name: "Beach Cruises",
    icon: "umbrella-beach",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "adventure",
    name: "Adventure Cruise",
    icon: "mountain",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "family",
    name: "Family Cruise",
    icon: "users",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: "romantic",
    name: "Romantic Cruise",
    icon: "heart",
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    id: "river",
    name: "River Cruise",
    icon: "water",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

export const popularDestinations: Destination[] = [
  {
    id: "caribbean",
    name: "Caribbean",
    image: "https://pixabay.com/get/g379282cd15bb65a5748b005e37fd2c9c5d51662efe50928cdee5ff7567c77d3a89bd07d75fb071e2acb47e2dee3ed00fe1dc1f03a93634e081badb364a6d6e1a_1280.jpg",
    cruiseCount: 42,
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    image: "https://pixabay.com/get/g14cde8bb46c637402d6873801b256993aadb4c334645c83b9c0f103535b3a0606478b66c5dc0ff05c6ec347ed63fc9a678ebc3458e39b0898ca3d8a2bb05c821_1280.jpg",
    cruiseCount: 38,
  },
  {
    id: "alaska",
    name: "Alaska",
    image: "https://pixabay.com/get/g1e9c2c761567d121f9177d14ff26b23a0f1d83e55f77ba2b1d7919a4a9d4335c3b127fd2b6c16ff8e08ae775e8b64addb5ac2529530077becb7c2b87e215fdc8_1280.jpg",
    cruiseCount: 24,
  },
  {
    id: "greek",
    name: "Greek Islands",
    image: "https://pixabay.com/get/g02b04b753fce7668d57d8f1fc3567b8e5cfcb151321fa6cb6fa941a6c7d3f1a3fd172ca96a46d3c65a71b333dd339e0d688c99d225c21367089aa1d8dde968a3_1280.jpg",
    cruiseCount: 29,
  },
];

export const featuredCruises: Cruise[] = [
  {
    id: "royal-splendor",
    name: "Royal Splendor",
    cruiseLine: "Royal Caribbean",
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    price: 1299,
    rating: 4.8,
    reviewCount: 320,
    destination: "Caribbean",
    departure: "Miami, FL",
    arrival: "Nassau, Bahamas",
    duration: { days: 7, nights: 6 },
    description: "Experience luxury at sea with our premium cruise package featuring gourmet dining, spa treatments, and breathtaking ocean views.",
    cabinType: "Suite",
    amenities: ["Free WiFi", "Pool", "Spa", "Gourmet Dining"],
    featured: true,
    category: "luxury",
  },
  {
    id: "mediterranean-odyssey",
    name: "Mediterranean Odyssey",
    cruiseLine: "MSC Cruises",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    price: 1599,
    rating: 4.6,
    reviewCount: 254,
    destination: "Mediterranean",
    departure: "Barcelona, Spain",
    arrival: "Rome, Italy",
    duration: { days: 10, nights: 9 },
    description: "Explore the stunning Mediterranean coastline with stops at historic ports and beautiful islands.",
    cabinType: "Balcony",
    amenities: ["Free WiFi", "Pool", "Excursions", "Entertainment"],
    category: "adventure",
  },
  {
    id: "alaskan-explorer",
    name: "Alaskan Explorer",
    cruiseLine: "Norwegian Cruise Line",
    image: "https://pixabay.com/get/g11f2146acbe1cbd4d7b8fe678c6d020b29dc144d4c3efe39b4a8e0de074036f9cc48faeb2adb8b8e33d951f148297ca557613f05c07a52b960ad41bef8ffaabb_1280.jpg",
    price: 1499,
    originalPrice: 1764,
    rating: 4.9,
    reviewCount: 176,
    destination: "Alaska",
    departure: "Seattle, WA",
    arrival: "Juneau, AK",
    duration: { days: 7, nights: 6 },
    description: "Experience breathtaking glaciers and abundant wildlife on this stunning Alaskan adventure.",
    cabinType: "Oceanview",
    amenities: ["Free WiFi", "Glacier Viewing", "Wildlife Tours", "Gourmet Dining"],
    discount: 15,
    category: "nature",
  },
];

export const cruiseList: Cruise[] = [
  ...featuredCruises,
  {
    id: "azura-splendor",
    name: "Azura Splendor",
    cruiseLine: "Carnival Cruise Line",
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: 1350,
    rating: 4.7,
    reviewCount: 420,
    destination: "Caribbean",
    departure: "Miami, FL",
    arrival: "Bahamas",
    duration: { days: 3, nights: 4 },
    description: "Experience luxury at sea with our premium cruise package featuring gourmet dining, spa treatments, and breathtaking ocean views.",
    cabinType: "Balcony",
    amenities: ["Free WiFi", "Pool", "Spa", "Gourmet Dining"],
    featured: true,
    category: "luxury",
  },
  {
    id: "oceanic-yacht",
    name: "Oceanic Yacht",
    cruiseLine: "Celebrity Cruises",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: 1999,
    rating: 4.4,
    reviewCount: 320,
    destination: "Mediterranean",
    departure: "Barcelona, Spain",
    arrival: "Rome, Italy",
    duration: { days: 7, nights: 8 },
    description: "Explore the stunning Mediterranean coastline with stops at historic ports and beautiful islands.",
    cabinType: "Oceanview",
    amenities: ["Free WiFi", "Pool", "Excursions", "Entertainment"],
    category: "adventure",
  },
  {
    id: "coral-cruiser",
    name: "Coral Cruiser",
    cruiseLine: "Disney Cruise Line",
    image: "https://pixabay.com/get/ge6286df63c56233f3d278c40918546886bf56c5fe6ab5086816ed0fb37e2c57898918f2b059d1c4158bf96bda171e022da043fd763615a7e17d86964f61acbba_1280.jpg",
    price: 1680,
    originalPrice: 2100,
    rating: 5.0,
    reviewCount: 520,
    destination: "Caribbean",
    departure: "Singapore",
    arrival: "Thailand",
    duration: { days: 5, nights: 6 },
    description: "The perfect family getaway with activities for all ages, including kids' clubs, pools, and exciting shore excursions.",
    cabinType: "Suite",
    amenities: ["Free WiFi", "Kids Club", "Family Pool", "Game Room"],
    discount: 20,
    category: "family",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah J.",
    image: "",
    rating: 5,
    text: "The Caribbean cruise package we booked through DreamsTour was absolutely perfect! The booking process was smooth, and the customer service was exceptional.",
    cruiseType: "Caribbean Cruise",
  },
  {
    id: "2",
    name: "Michael T.",
    image: "",
    rating: 5,
    text: "Our Mediterranean cruise exceeded all expectations! The itinerary was perfect, and the exclusive deals on DreamsTour helped us save significantly on our dream vacation.",
    cruiseType: "Mediterranean Cruise",
  },
  {
    id: "3",
    name: "David R.",
    image: "",
    rating: 4.5,
    text: "The Alaskan cruise we booked was the trip of a lifetime! The glaciers were breathtaking, and the onboard experience was luxurious. DreamsTour made everything seamless.",
    cruiseType: "Alaskan Cruise",
  },
];
