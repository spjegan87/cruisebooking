import { Cruise } from "@/data/mockData";

interface CabinDetailsProps {
  cruise: Cruise;
}

export default function CabinDetails({ cruise }: CabinDetailsProps) {
  const { cabinType, price } = cruise;
  
  const cabinDetails = {
    "Suite": {
      size: "320 sq. ft. with 80 sq. ft. balcony",
      amenities: [
        "Spacious living area with premium furniture",
        "Luxury king-size bed with premium bedding",
        "Private balcony with lounge chairs",
        "Marble bathroom with bathtub and shower",
        "Walk-in closet",
        "Mini-bar and coffee maker",
        "Priority boarding and dedicated concierge",
        "24-hour room service",
      ],
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
    },
    "Balcony": {
      size: "220 sq. ft. with 40 sq. ft. balcony",
      amenities: [
        "Comfortable seating area",
        "Queen-size bed with premium bedding",
        "Private balcony with seating",
        "Well-appointed bathroom with shower",
        "Closet space",
        "Mini-fridge and coffee maker",
        "24-hour room service",
      ],
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
    },
    "Ocean View": {
      size: "180 sq. ft.",
      amenities: [
        "Picture window with ocean view",
        "Two twin beds (convertible to queen-size)",
        "Sitting area with sofa",
        "Bathroom with shower",
        "Closet space",
        "Mini-fridge",
        "24-hour room service",
      ],
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
    },
    "Interior": {
      size: "160 sq. ft.",
      amenities: [
        "Two twin beds (convertible to queen-size)",
        "Small sitting area",
        "Bathroom with shower",
        "Closet space",
        "Mini-fridge",
        "24-hour room service",
      ],
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
    },
  };

  const cabin = cabinDetails[cabinType as keyof typeof cabinDetails];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 p-6">
      <h3 className="font-bold text-lg mb-4">Cabin Type: {cabinType}</h3>
      
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 pr-0 md:pr-6 mb-4 md:mb-0">
          <img 
            src={cabin.img}
            alt={`${cabinType} Cabin`} 
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Size</p>
              <p className="font-medium">{cabin.size}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Price</p>
              <p className="font-medium">${price} per person</p>
            </div>
          </div>
          
          <h4 className="font-medium text-lg mb-2">Cabin Amenities</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {cabin.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center text-sm">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
