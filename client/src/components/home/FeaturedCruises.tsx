import React from "react";
import { Row, Col, Card, Tag, Rate, Button } from "antd";
import { FiMapPin, FiCalendar, FiUsers, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Cruise {
  id: string;
  name: string;
  image: string;
  location: string;
  cruiseLine: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  dates: string;
}

const featuredCruises: Cruise[] = [
  {
    id: "cruise1",
    name: "Caribbean Paradise Cruise",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Caribbean",
    cruiseLine: "Royal Caribbean",
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviewCount: 245,
    duration: "7 nights",
    dates: "June 1 - June 8, 2024"
  },
  {
    id: "cruise2",
    name: "Mediterranean Explorer",
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Mediterranean",
    cruiseLine: "Norwegian Cruise Line",
    price: 899,
    originalPrice: 1099,
    rating: 4.7,
    reviewCount: 180,
    duration: "10 nights",
    dates: "July 15 - July 25, 2024"
  },
  {
    id: "cruise3",
    name: "Alaska Wilderness Adventure",
    image: "https://images.unsplash.com/photo-1531176175280-541fa342e0a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Alaska",
    cruiseLine: "Princess Cruises",
    price: 799,
    rating: 4.9,
    reviewCount: 210,
    duration: "7 nights",
    dates: "Aug 5 - Aug 12, 2024"
  }
];

const FeaturedCruises: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Featured Cruises</h2>
        </div>
        
        <Row gutter={[24, 24]}>
          {featuredCruises.map((cruise) => (
            <Col key={cruise.id} xs={24} md={8}>
              <Card className="h-full rounded-lg overflow-hidden hover:shadow-lg transition-shadow" bordered={false}>
                <div className="relative">
                  <img 
                    src={cruise.image} 
                    alt={cruise.name} 
                    className="w-full h-48 object-cover"
                  />
                  {cruise.originalPrice && (
                    <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                      {Math.round(((cruise.originalPrice - cruise.price) / cruise.originalPrice) * 100)}% OFF
                    </div>
                  )}
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FiHeart className="text-gray-500" />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Tag color="blue">{cruise.cruiseLine}</Tag>
                    <div className="ml-auto flex items-center">
                      <Rate disabled defaultValue={cruise.rating} className="text-yellow-400 text-sm" />
                      <span className="text-gray-500 text-xs ml-1">({cruise.reviewCount})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{cruise.name}</h3>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FiMapPin className="mr-1" /> {cruise.location}
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                      <FiCalendar className="mr-1" /> {cruise.duration}
                    </div>
                    <div className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                      <FiUsers className="mr-1" /> All-inclusive
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-3 border-t">
                    <div>
                      {cruise.originalPrice && (
                        <span className="text-gray-400 text-sm line-through mr-2">${cruise.originalPrice}</span>
                      )}
                      <span className="font-bold text-xl text-primary">${cruise.price}</span>
                      <span className="text-gray-500 text-xs">/person</span>
                    </div>
                    <Link to={`/cruises/${cruise.id}`}>
                      <Button type="primary" size="small">View Details</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-10">
          <Link 
            to="/cruises" 
            className="inline-block bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition"
          >
            View All Cruises
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCruises;