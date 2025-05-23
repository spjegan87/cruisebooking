import React, { useState, useEffect } from "react";
import { Button, Form, Select, DatePicker, InputNumber } from "antd";
import { FiSearch, FiMap, FiCalendar, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const backgroundImages = [
  "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1580541631731-4065e2e7b3e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1548566862-2c9bea3b037b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
];

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    navigate('/cruises');
  };

  return (
    <div className="relative">
      <div 
        className="h-[600px] bg-cover bg-center bg-no-repeat relative transition-all duration-1000"
        style={{ 
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
          backgroundSize: '100% 100%',
          imageRendering: 'crisp-edges'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Discover the World's Most Breathtaking Cruises
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore exotic destinations, luxurious accommodations, and unforgettable experiences
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mt-4 w-full max-w-4xl">
            <Form 
              form={form}
              onFinish={handleSearch}
              layout="vertical" 
              className="grid grid-cols-1 md:grid-cols-12 gap-4"
            >
              <Form.Item 
                name="destination" 
                label={
                  <span className="flex items-center text-gray-700">
                    <FiMap className="mr-2" />
                    Destination
                  </span>
                }
                className="md:col-span-4"
              >
                <Select placeholder="Where to?" size="large">
                  <Option value="caribbean">Caribbean</Option>
                  <Option value="mediterranean">Mediterranean</Option>
                  <Option value="alaska">Alaska</Option>
                  <Option value="europe">Europe</Option>
                  <Option value="bahamas">Bahamas</Option>
                  <Option value="mexico">Mexico</Option>
                </Select>
              </Form.Item>

              <Form.Item 
                name="checkIn" 
                label={
                  <span className="flex items-center text-gray-700">
                    <FiCalendar className="mr-2" />
                    Check In
                  </span>
                }
                className="md:col-span-3"
              >
                <DatePicker size="large" className="w-full" />
              </Form.Item>

              <Form.Item 
                name="checkOut" 
                label={
                  <span className="flex items-center text-gray-700">
                    <FiCalendar className="mr-2" />
                    Check Out
                  </span>
                }
                className="md:col-span-3"
              >
                <DatePicker size="large" className="w-full" />
              </Form.Item>

              <Form.Item 
                name="guests" 
                label={
                  <span className="flex items-center text-gray-700">
                    <FiUsers className="mr-2" />
                    Guests
                  </span>
                }
                initialValue={2}
                className="md:col-span-2"
              >
                <InputNumber 
                  size="large" 
                  min={1} 
                  max={10} 
                  className="w-full" 
                />
              </Form.Item>

              <div className="md:col-span-12 md:col-start-10 md:col-span-3 flex items-end">
                <Button 
                  type="primary" 
                  htmlType="submit"
                  size="large" 
                  className="w-full h-[40px] bg-primary hover:bg-primary/90 border-primary flex items-center justify-center"
                >
                  <FiSearch className="mr-2" /> Search
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;