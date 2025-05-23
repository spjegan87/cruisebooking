// A collection of mock cruise data for the application
export interface Cruise {
  id: string;
  title: string;
  image: string;
  location: string;
  cruiseLine: string;
  rating: number;
  reviews: number;
  duration: string;
  nights: number;
  days: number;
  price: number;
  discount?: number;
  description: string;
  longDescription: string;
  amenities: string[];
  highlights: string[];
  badges: string[];
  featured?: boolean;
  cabinInfo: {
    size: string;
    occupancy: string;
    features: string[];
  };
  itinerary: {
    day: number;
    port: string;
    arrival: string;
    departure: string;
  }[];
}

export const cruises: Cruise[] = [
  {
    id: "royal-caribbean-bliss",
    title: "Royal Caribbean Bliss",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    location: "Miami to Bahamas",
    cruiseLine: "Royal Caribbean",
    rating: 4.8,
    reviews: 320,
    duration: "7 Days",
    nights: 6,
    days: 7,
    price: 1299,
    discount: 20,
    description: "Experience luxury at sea with premium amenities and stunning views.",
    longDescription: "Experience the ultimate Caribbean adventure aboard the Royal Caribbean Bliss. This luxurious ship offers the perfect blend of relaxation and excitement with world-class amenities and exceptional service. Whether you're looking to unwind on pristine beaches, explore vibrant coral reefs, or enjoy the ship's many entertainment options, this cruise has something for everyone.",
    amenities: ["WiFi", "Pool", "Spa", "Dining", "Fitness Center"],
    highlights: [
      "All-inclusive dining at multiple specialty restaurants",
      "Broadway-style entertainment and live shows",
      "5 swimming pools including an adults-only retreat",
      "Full-service spa and fitness center",
      "Shore excursions at each port of call"
    ],
    badges: ["Luxury Cruise"],
    featured: true,
    cabinInfo: {
      size: "220 sq. ft. with 40 sq. ft. balcony",
      occupancy: "Up to 4 guests (2 adults, 2 children)",
      features: [
        "Private balcony with ocean views",
        "King-size bed (convertible to twins)",
        "Sitting area with sofa",
        "Private bathroom with shower",
        "Mini-refrigerator and safe"
      ]
    },
    itinerary: [
      { day: 1, port: "Miami, Florida", arrival: "", departure: "16:30" },
      { day: 2, port: "At Sea", arrival: "", departure: "" },
      { day: 3, port: "Nassau, Bahamas", arrival: "08:00", departure: "17:00" },
      { day: 4, port: "CocoCay, Bahamas", arrival: "07:00", departure: "18:00" },
      { day: 5, port: "At Sea", arrival: "", departure: "" },
      { day: 6, port: "Key West, Florida", arrival: "08:00", departure: "17:00" },
      { day: 7, port: "Miami, Florida", arrival: "06:00", departure: "" }
    ]
  },
  {
    id: "mediterranean-magic",
    title: "Mediterranean Magic",
    image: "https://images.unsplash.com/photo-1569263900347-06b1e8c825ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    location: "Barcelona to Rome",
    cruiseLine: "MSC Cruises",
    rating: 4.7,
    reviews: 254,
    duration: "10 Days",
    nights: 9,
    days: 10,
    price: 1599,
    description: "Explore the stunning Mediterranean coastline with historic ports and beautiful islands.",
    longDescription: "Embark on a journey through the stunning Mediterranean with stops at iconic destinations. This 10-day voyage takes you from the vibrant streets of Barcelona to the historic wonders of Rome, with stops at charming ports along the way. Immerse yourself in rich cultures, indulge in delicious local cuisines, and create memories that will last a lifetime.",
    amenities: ["WiFi", "Pool", "Spa", "Premium Drinks", "Excursions"],
    highlights: [
      "Visit 5 UNESCO World Heritage Sites",
      "Luxury dining options featuring Mediterranean cuisine",
      "Evening entertainment including live music and shows",
      "Guided tours at each port with local experts",
      "Onboard activities including cooking classes and wine tastings"
    ],
    badges: ["Adventure Cruise"],
    cabinInfo: {
      size: "270 sq. ft. with 60 sq. ft. balcony",
      occupancy: "Up to 3 guests",
      features: [
        "Private balcony with Mediterranean views",
        "Queen-size bed with premium linens",
        "Sitting area with panoramic windows",
        "Luxury bathroom with rain shower",
        "24-hour room service"
      ]
    },
    itinerary: [
      { day: 1, port: "Barcelona, Spain", arrival: "", departure: "18:00" },
      { day: 2, port: "Marseille, France", arrival: "08:00", departure: "18:00" },
      { day: 3, port: "Genoa, Italy", arrival: "08:00", departure: "17:00" },
      { day: 4, port: "Florence/Pisa (Livorno), Italy", arrival: "07:00", departure: "19:00" },
      { day: 5, port: "At Sea", arrival: "", departure: "" },
      { day: 6, port: "Palermo, Sicily", arrival: "08:00", departure: "18:00" },
      { day: 7, port: "Valletta, Malta", arrival: "08:00", departure: "18:00" },
      { day: 8, port: "At Sea", arrival: "", departure: "" },
      { day: 9, port: "Naples, Italy", arrival: "07:00", departure: "17:00" },
      { day: 10, port: "Rome (Civitavecchia), Italy", arrival: "06:00", departure: "" }
    ]
  },
  {
    id: "alaska-adventure",
    title: "Alaska Adventure",
    image: "https://pixabay.com/get/g650479161ba4db3e7518f98c197cdbeb932fcd2b7feb8405548c88ff564af26716617bc6517687e9d11d371b347152f6acd7cce1a4fe964adb9c551877d40dae_1280.jpg",
    location: "Seattle to Juneau",
    cruiseLine: "Norwegian Cruise Line",
    rating: 4.9,
    reviews: 176,
    duration: "8 Days",
    nights: 7,
    days: 8,
    price: 1499,
    discount: 15,
    description: "Witness breathtaking glaciers and wildlife on this unforgettable Alaska journey.",
    longDescription: "Embark on an unforgettable journey through the pristine wilderness of Alaska. Witness majestic glaciers, spot incredible wildlife including whales and eagles, and experience the rugged beauty of America's last frontier. From the comfort of your luxury cruise ship, you'll have perfect views of snow-capped mountains, crystal-clear waters, and some of the most spectacular scenery on earth.",
    amenities: ["WiFi", "Pool", "Observation Lounge", "Wildlife Viewing", "Premium Dining"],
    highlights: [
      "Glacier viewing with expert naturalist commentary",
      "Wildlife spotting opportunities including whales, bears, and eagles",
      "Native cultural experiences in authentic Alaskan towns",
      "Breathtaking scenery throughout the voyage",
      "Optional adventure excursions including helicopter tours and dog sledding"
    ],
    badges: ["Nature Cruise"],
    featured: true,
    cabinInfo: {
      size: "240 sq. ft. with 55 sq. ft. balcony",
      occupancy: "Up to 4 guests",
      features: [
        "Private balcony with glacier views",
        "King-size bed with premium bedding",
        "Heated bathroom floors",
        "Binoculars for wildlife viewing",
        "Mini-bar with local Alaskan treats"
      ]
    },
    itinerary: [
      { day: 1, port: "Seattle, Washington", arrival: "", departure: "16:00" },
      { day: 2, port: "At Sea", arrival: "", departure: "" },
      { day: 3, port: "Ketchikan, Alaska", arrival: "07:00", departure: "15:00" },
      { day: 4, port: "Juneau, Alaska", arrival: "10:00", departure: "20:00" },
      { day: 5, port: "Skagway, Alaska", arrival: "07:00", departure: "17:00" },
      { day: 6, port: "Glacier Bay (Scenic Cruising)", arrival: "07:00", departure: "16:00" },
      { day: 7, port: "At Sea", arrival: "", departure: "" },
      { day: 8, port: "Seattle, Washington", arrival: "07:00", departure: "" }
    ]
  },
  {
    id: "caribbean-escape",
    title: "Caribbean Escape",
    image: "https://pixabay.com/get/gaa53bbfc4d0db516decaeab7c1df9f746ea9971f5642fe36750f864e607e9c6747aa2ecb24f8f740ad7d62b090841296bdcc2e3ec041b3551fd9b781b44fa53e_1280.jpg",
    location: "Miami to Caribbean Islands",
    cruiseLine: "Carnival Cruise Line",
    rating: 4.6,
    reviews: 412,
    duration: "5 Days",
    nights: 4,
    days: 5,
    price: 899,
    description: "A perfect getaway to the crystal-clear waters and white sand beaches of the Caribbean.",
    longDescription: "Escape to paradise on this 5-day Caribbean cruise. Soak up the sun on pristine beaches, swim in crystal-clear turquoise waters, and immerse yourself in the vibrant culture of the islands. With multiple ports of call and plenty of onboard entertainment, this cruise offers the perfect balance of relaxation and adventure for a quick tropical getaway.",
    amenities: ["WiFi", "Pool", "Casino", "Kids Club", "Entertainment"],
    highlights: [
      "Visit multiple Caribbean islands in one trip",
      "Onboard water park with slides and splash zones",
      "Nightly entertainment including comedy shows and live music",
      "Multiple dining options from casual to fine dining",
      "Beautiful beaches at every port of call"
    ],
    badges: ["Family Cruise"],
    cabinInfo: {
      size: "185 sq. ft. with 35 sq. ft. balcony",
      occupancy: "Up to 4 guests",
      features: [
        "Private balcony with ocean views",
        "Two twin beds (convertible to queen)",
        "Extra bunk beds for children",
        "Compact bathroom with shower",
        "Flat-screen TV with movies"
      ]
    },
    itinerary: [
      { day: 1, port: "Miami, Florida", arrival: "", departure: "16:00" },
      { day: 2, port: "Key West, Florida", arrival: "07:30", departure: "13:30" },
      { day: 3, port: "Cozumel, Mexico", arrival: "10:00", departure: "19:00" },
      { day: 4, port: "At Sea", arrival: "", departure: "" },
      { day: 5, port: "Miami, Florida", arrival: "08:00", departure: "" }
    ]
  },
  {
    id: "oceanic-yacht",
    title: "Oceanic Yacht",
    image: "https://pixabay.com/get/g86a9a73bb0cf917249acde6b37f9422c34c9eee46795ca6cf9b4a470ab992d295266a0282582768e5828ade68ab2eb68f03b5de75d0a63245b71dadad8263a17_1280.jpg",
    location: "San Diego, California",
    cruiseLine: "Luxury Yachts",
    rating: 5.0,
    reviews: 86,
    duration: "5 Days",
    nights: 4,
    days: 5,
    price: 2599,
    description: "Indulge in an exclusive yacht experience along the California coast.",
    longDescription: "Indulge in an exclusive yacht experience along the California coast. This intimate journey offers personalized service, gourmet cuisine, and access to secluded coves and beaches most travelers never see. With a maximum of 12 guests, you'll enjoy privacy and luxury as you sail the beautiful Pacific waters.",
    amenities: ["Premium WiFi", "Private Pool", "Gourmet Dining", "Water Sports", "Personal Butler"],
    highlights: [
      "Exclusive access to secluded beaches and coves",
      "Personalized service with a high staff-to-guest ratio",
      "Gourmet meals prepared by a private chef",
      "Daily water activities including snorkeling and paddleboarding",
      "Sunset champagne receptions on deck"
    ],
    badges: ["Luxury", "Private"],
    cabinInfo: {
      size: "300 sq. ft. with private deck access",
      occupancy: "2 guests",
      features: [
        "King-size bed with premium linens",
        "Private en-suite bathroom with rainfall shower",
        "Floor-to-ceiling windows with ocean views",
        "Personal minibar stocked with preferences",
        "Evening turndown service"
      ]
    },
    itinerary: [
      { day: 1, port: "San Diego, California", arrival: "", departure: "14:00" },
      { day: 2, port: "Catalina Island", arrival: "09:00", departure: "18:00" },
      { day: 3, port: "Santa Barbara", arrival: "08:00", departure: "19:00" },
      { day: 4, port: "Channel Islands (Anchored)", arrival: "07:00", departure: "16:00" },
      { day: 5, port: "San Diego, California", arrival: "11:00", departure: "" }
    ]
  },
  {
    id: "coral-cruiser",
    title: "Coral Cruiser",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    location: "Miami to Bahamas",
    cruiseLine: "Coral Cruise Line",
    rating: 4.5,
    reviews: 520,
    duration: "4 Days",
    nights: 3,
    days: 4,
    price: 799,
    discount: 10,
    description: "A quick tropical getaway to the beautiful Bahamas with family-friendly activities.",
    longDescription: "Enjoy a quick tropical getaway to the beautiful Bahamas on the Coral Cruiser. Perfect for families and first-time cruisers, this ship offers numerous activities for all ages, delicious dining options, and stops at pristine beaches. Make the most of your vacation time with this efficient yet luxurious 4-day cruise experience.",
    amenities: ["WiFi", "Family Pool", "Kids Club", "Arcade", "Buffet"],
    highlights: [
      "Visit the pristine beaches of the Bahamas",
      "Family-friendly activities throughout the day",
      "Water park with slides for all ages",
      "Evening entertainment suitable for everyone",
      "Quick getaway that maximizes vacation time"
    ],
    badges: ["Family Cruise", "Best Seller"],
    featured: true,
    cabinInfo: {
      size: "180 sq. ft. with 30 sq. ft. balcony",
      occupancy: "Up to 4 guests",
      features: [
        "Private balcony",
        "Two twin beds (convertible to queen)",
        "Pullout sofa for additional guests",
        "Compact bathroom with shower",
        "Flat-screen TV"
      ]
    },
    itinerary: [
      { day: 1, port: "Miami, Florida", arrival: "", departure: "16:00" },
      { day: 2, port: "Nassau, Bahamas", arrival: "08:00", departure: "21:00" },
      { day: 3, port: "CocoCay, Bahamas", arrival: "07:00", departure: "17:00" },
      { day: 4, port: "Miami, Florida", arrival: "07:00", departure: "" }
    ]
  }
];
