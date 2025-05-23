// A collection of testimonial data for the application
export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  cruiseType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah J.",
    rating: 5,
    comment: "The Caribbean cruise package we booked through DreamsTour was absolutely perfect! The booking process was smooth, and the customer service was exceptional. We'll definitely be booking our next cruise through them.",
    cruiseType: "Caribbean Cruise"
  },
  {
    id: "2",
    name: "Michael T.",
    rating: 5,
    comment: "Our Mediterranean cruise exceeded all expectations! The itinerary was perfect, and the exclusive deals on DreamsTour helped us save significantly on our dream vacation. Already planning our next trip!",
    cruiseType: "Mediterranean Cruise"
  },
  {
    id: "3",
    name: "David R.",
    rating: 4.5,
    comment: "The Alaskan cruise we booked was the trip of a lifetime! The glaciers were breathtaking, and the onboard experience was luxurious. DreamsTour made everything seamless from booking to disembarkation.",
    cruiseType: "Alaskan Cruise"
  },
  {
    id: "4",
    name: "Jennifer W.",
    rating: 5,
    comment: "Our Caribbean cruise was incredible! DreamsTour made booking so easy, and we got an amazing deal. The room was perfect and the excursions were well organized. Can't wait to book with them again!",
    cruiseType: "Caribbean Cruise"
  },
  {
    id: "5",
    name: "Michael K.",
    rating: 4.5,
    comment: "I was nervous about booking a cruise for the first time, but the team at DreamsTour answered all my questions and found us a great itinerary that fit our budget. The experience exceeded our expectations!",
    cruiseType: "Bahamas Cruise"
  },
  {
    id: "6",
    name: "Sarah & David K.",
    rating: 5,
    comment: "We've booked three cruises through DreamsTour and each one has been better than the last. Their customer service is outstanding and they always find us the best deals. Truly a pleasure to work with!",
    cruiseType: "Family Cruise"
  }
];
