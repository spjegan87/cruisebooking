import React from "react";
import { Row, Col, Card, Rate, Avatar } from "antd";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  cruiseType: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "David Miller",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "The Caribbean cruise package was absolutely perfect! The booking process was smooth, and the customer service was exceptional. Would recommend to everyone!",
    cruiseType: "Caribbean Cruise"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Our Mediterranean cruise exceeded all expectations! The itinerary was perfect, and the exclusive deals helped us save significantly on our dream vacation.",
    cruiseType: "Mediterranean Cruise"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">What Our Users Say</h2>
        </div>
        
        <Row gutter={[24, 24]} justify="center">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} xs={24} md={12} lg={10}>
              <Card className="rounded-lg shadow-sm h-full">
                <div className="mb-4">
                  <Rate disabled defaultValue={testimonial.rating} className="text-yellow-400" />
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar src={testimonial.avatar} size={50} />
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.cruiseType}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;