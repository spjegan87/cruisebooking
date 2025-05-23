import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

interface CruiseType {
  id: string;
  name: string;
  image: string;
}

const cruiseTypes: CruiseType[] = [
  {
    id: "luxury",
    name: "Luxury",
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "family",
    name: "Family",
    image: "https://images.unsplash.com/photo-1576675784201-0e142b423952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "adventure",
    name: "Adventure",
    image: "https://images.unsplash.com/photo-1566650554919-44ec6bbe2518?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "romantic",
    name: "Romantic",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "exotic",
    name: "Exotic",
    image: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "themed",
    name: "Themed",
    image: "https://images.unsplash.com/photo-1579656450812-5b1f7b8a0d7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const CruiseTypes: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Explore Our Cruise Types</h2>
        </div>
        
        <Row gutter={[24, 24]} justify="center">
          {cruiseTypes.map((type) => (
            <Col key={type.id} xs={12} sm={8} md={4}>
              <Link to={`/cruises?type=${type.id}`} className="block text-center group">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-3 transition transform group-hover:scale-105">
                  <img 
                    src={type.image} 
                    alt={type.name} 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                </div>
                <h3 className="font-medium text-gray-800 group-hover:text-primary transition">
                  {type.name}
                </h3>
              </Link>
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

export default CruiseTypes;