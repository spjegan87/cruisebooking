import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const CTABanner: React.FC = () => {
  return (
    <div className="py-8 bg-gradient-to-r from-cyan-500 to-red-400 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-lg mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-3">
              Ready to Set Sail to Touch?
            </h2>
            <p className="text-white text-lg mb-0">
              Book your dream cruise vacation and get exclusive early booking discounts!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/cruises">
              <Button size="large" className="bg-white text-primary hover:bg-gray-100 border-white min-w-[150px]">
                Book Now
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button size="large" ghost className="text-white border-white hover:bg-white/10 min-w-[150px]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;