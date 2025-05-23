import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cruise } from "@/data/mockData";

interface CruiseInfoProps {
  cruise: Cruise;
}

export default function CruiseInfo({ cruise }: CruiseInfoProps) {
  const [activeTab, setActiveTab] = useState("overview");
  
  const {
    name,
    cruiseLine,
    description,
    cabinType,
    amenities,
    duration,
  } = cruise;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <Tabs defaultValue="overview" onValueChange={setActiveTab}>
        <div className="border-b">
          <TabsList className="flex overflow-x-auto w-full bg-transparent border-b-0">
            <TabsTrigger 
              value="overview" 
              className="px-6 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="cabin" 
              className="px-6 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Cabin Details
            </TabsTrigger>
            <TabsTrigger 
              value="itinerary" 
              className="px-6 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Itinerary
            </TabsTrigger>
            <TabsTrigger 
              value="amenities" 
              className="px-6 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Amenities
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="px-6 py-3 font-medium border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="overview" className="p-6">
          <h2 className="text-xl font-bold mb-4">About This Cruise</h2>
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          <p className="text-gray-600 mb-6">
            Our {cabinType.toLowerCase()} cabins provide a private outdoor space where you can enjoy breathtaking ocean views and fresh sea breezes. Each cabin is thoughtfully designed with comfort in mind, featuring plush bedding, modern bathrooms, and ample storage space.
          </p>
          
          <h3 className="font-bold text-lg mb-3">Highlights</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span className="text-gray-600">All-inclusive dining at multiple specialty restaurants</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span className="text-gray-600">Broadway-style entertainment and live shows</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span className="text-gray-600">5 swimming pools including an adults-only retreat</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span className="text-gray-600">Full-service spa and fitness center</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span className="text-gray-600">Shore excursions at each port of call</span>
            </li>
          </ul>
          
          <h3 className="font-bold text-lg mb-3">Special Offers</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-2 rounded-md">
                <i className="fas fa-gift text-blue-600"></i>
              </div>
              <div className="ml-3">
                <h4 className="font-medium text-blue-800">Limited Time Offer</h4>
                <p className="text-blue-700 text-sm">Book now and receive a free beverage package worth $499 per person!</p>
              </div>
            </div>
          </div>
          
          <h3 className="font-bold text-lg mb-3">Important Information</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-md">
                <i className="fas fa-exclamation-circle text-yellow-600"></i>
              </div>
              <div className="ml-3">
                <h4 className="font-medium text-yellow-800">Before You Sail</h4>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>All guests must have valid passport with at least 6 months validity.</li>
                  <li>Final payment due 90 days before departure.</li>
                  <li>Optional travel insurance is recommended.</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="cabin" className="p-6">
          <h3 className="font-bold text-lg mb-3">Cabin Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">{cabinType} Cabin Features:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Private balcony with ocean views</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>King-size bed (convertible to twins)</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Sitting area with sofa</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Private bathroom with shower</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Mini-refrigerator and safe</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Cabin Size:</h4>
              <p className="text-sm text-gray-600 mb-4">220 sq. ft. with 40 sq. ft. balcony</p>
              
              <h4 className="font-medium text-gray-800 mb-2">Occupancy:</h4>
              <p className="text-sm text-gray-600">Up to 4 guests (2 adults, 2 children)</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="itinerary" className="p-6">
          <h3 className="font-bold text-lg mb-4">Cruise Itinerary</h3>
          <div className="space-y-6">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="rounded-full w-8 h-8 bg-primary text-white flex items-center justify-center">1</div>
                <div className="h-full w-0.5 bg-gray-200 my-1"></div>
              </div>
              <div>
                <h4 className="font-medium">Day 1: Departure</h4>
                <p className="text-sm text-gray-600 mt-1">Board the ship at the port and set sail in the evening. Enjoy welcome dinner and entertainment.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="rounded-full w-8 h-8 bg-primary text-white flex items-center justify-center">2</div>
                <div className="h-full w-0.5 bg-gray-200 my-1"></div>
              </div>
              <div>
                <h4 className="font-medium">Day 2: At Sea</h4>
                <p className="text-sm text-gray-600 mt-1">Full day at sea. Enjoy on-board activities, pools, spa services, and entertainment.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="rounded-full w-8 h-8 bg-primary text-white flex items-center justify-center">3</div>
                <div className="h-full w-0.5 bg-gray-200 my-1"></div>
              </div>
              <div>
                <h4 className="font-medium">Day 3: First Port</h4>
                <p className="text-sm text-gray-600 mt-1">Arrive at first destination port. Shore excursions available for booking.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="rounded-full w-8 h-8 bg-primary text-white flex items-center justify-center">{duration.days}</div>
              </div>
              <div>
                <h4 className="font-medium">Day {duration.days}: Return</h4>
                <p className="text-sm text-gray-600 mt-1">Return to home port. Disembarkation in the morning.</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="amenities" className="p-6">
          <h3 className="font-bold text-lg mb-4">Onboard Amenities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Dining</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-utensils text-primary mr-2"></i>
                  <span>Main Dining Room - 3 meals daily</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-utensils text-primary mr-2"></i>
                  <span>Specialty Restaurants - Reservation required</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-utensils text-primary mr-2"></i>
                  <span>Buffet - Casual dining</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-utensils text-primary mr-2"></i>
                  <span>Room Service - 24 hours</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Entertainment</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-theater-masks text-primary mr-2"></i>
                  <span>Broadway-style Shows</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-music text-primary mr-2"></i>
                  <span>Live Music</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cocktail text-primary mr-2"></i>
                  <span>Bars and Lounges</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-dice text-primary mr-2"></i>
                  <span>Casino</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Activities</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <i className={`fas fa-${amenity.toLowerCase().includes('wifi') ? 'wifi' : amenity.toLowerCase().includes('spa') ? 'spa' : amenity.toLowerCase().includes('pool') ? 'swimming-pool' : amenity.toLowerCase().includes('dining') ? 'utensils' : 'check'} text-primary mr-2`}></i>
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Services</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-concierge-bell text-primary mr-2"></i>
                  <span>24-hour Room Service</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-briefcase text-primary mr-2"></i>
                  <span>Business Center</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-wifi text-primary mr-2"></i>
                  <span>Wifi Throughout Ship</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-medkit text-primary mr-2"></i>
                  <span>Medical Center</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="p-6">
          <h3 className="font-bold text-lg mb-4">Guest Reviews</h3>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-user text-gray-500"></i>
                </div>
                <div>
                  <h4 className="font-medium">Jennifer W.</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <span className="ml-auto text-sm text-gray-500">2 months ago</span>
              </div>
              <p className="text-gray-600">
                "The amenities and service aboard this cruise were exceptional. The staff went above and beyond to make our vacation special. We especially enjoyed the shore excursions and the evening entertainment."
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-user text-gray-500"></i>
                </div>
                <div>
                  <h4 className="font-medium">Robert T.</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <span className="ml-auto text-sm text-gray-500">1 month ago</span>
              </div>
              <p className="text-gray-600">
                "Great cruise overall! The food was delicious and plentiful. Our {cabinType.toLowerCase()} was spacious and comfortable. My only complaint would be that some of the shore excursions were too rushed."
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
