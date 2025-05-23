import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

interface Destination {
  id: string;
  name: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: "caribbean",
    name: "Caribbean",
    image: "https://images.unsplash.com/photo-1580541631731-4065e2e7b3e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    image: "https://images.unsplash.com/photo-1516091877740-fde016699f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "alaska",
    name: "Alaska",
    image: "https://images.unsplash.com/photo-1531176175280-541fa342e0a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bahamas",
    name: "Bahamas",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mexico",
    name: "Mexico",
    image: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hawaii",
    name: "Hawaii",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "europe",
    name: "Europe",
    image: "https://images.unsplash.com/photo-1608817576524-258062e1a68d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "asia",
    name: "Asia",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const FeaturedDestinations: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
        </div>
        
        <Row gutter={[16, 16]}>
          {destinations.map((destination) => (
            <Col key={destination.id} xs={12} md={6} className="mb-4">
              <Link 
                to={`/cruises?destination=${destination.id}`}
                className="block relative rounded-lg overflow-hidden group h-56"
              >
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-10">
          <Link 
            to="/destinations" 
            className="inline-block bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestinations;