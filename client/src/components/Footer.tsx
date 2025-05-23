import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, Divider, Row, Col, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  SendOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  AppleOutlined,
  AndroidOutlined,
} from "@ant-design/icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6}>
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <span className="text-dark font-poppins font-bold text-xl">
                  Dreams<span className="text-primary">Tour</span>
                </span>
              </Link>
            </div>
            <p className="text-neutral-500 mb-4">
              DreamsTour provides high-quality travel services with a focus on
              luxury cruises and personalized travel experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <EnvironmentOutlined className="text-primary mt-1 mr-2" />
                <p className="text-neutral-600">
                  123 Travel Street, Tourism City, TC 12345
                </p>
              </div>
              <div className="flex items-start">
                <PhoneOutlined className="text-primary mt-1 mr-2" />
                <p className="text-neutral-600">+1 86665 55594</p>
              </div>
              <div className="flex items-start">
                <MailOutlined className="text-primary mt-1 mr-2" />
                <p className="text-neutral-600">info@dreamstour.com</p>
              </div>
            </div>
          </Col>

          <Col xs={24} md={6}>
            <h4 className="text-dark font-semibold text-lg mb-6">Pages</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-600 hover:text-primary">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-600 hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-neutral-600 hover:text-primary">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-neutral-600 hover:text-primary">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-neutral-600 hover:text-primary">
                  Listings
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={24} md={6}>
            <h4 className="text-dark font-semibold text-lg mb-6">Destinations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/destinations/hawaii" className="text-neutral-600 hover:text-primary">
                  Hawaii
                </Link>
              </li>
              <li>
                <Link to="/destinations/istanbul" className="text-neutral-600 hover:text-primary">
                  Istanbul
                </Link>
              </li>
              <li>
                <Link to="/destinations/san-diego" className="text-neutral-600 hover:text-primary">
                  San Diego
                </Link>
              </li>
              <li>
                <Link to="/destinations/belgium" className="text-neutral-600 hover:text-primary">
                  Belgium
                </Link>
              </li>
              <li>
                <Link to="/destinations/los-angeles" className="text-neutral-600 hover:text-primary">
                  Los Angeles
                </Link>
              </li>
              <li>
                <Link to="/destinations/newyork" className="text-neutral-600 hover:text-primary">
                  Newyork
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={24} md={6}>
            <h4 className="text-dark font-semibold text-lg mb-6">Subscribe</h4>
            <p className="text-neutral-500 mb-4">
              Subscribe to our newsletter and get exclusive deals you won't find
              anywhere else.
            </p>
            <div className="mb-6">
              <Input.Group compact>
                <Input
                  style={{ width: "calc(100% - 40px)" }}
                  placeholder="Your Email"
                />
                <Button type="primary" icon={<SendOutlined />} />
              </Input.Group>
            </div>
            <div>
              <p className="text-neutral-600 mb-3">Available on:</p>
              <Space>
                <Button icon={<AppleOutlined />}>App Store</Button>
                <Button icon={<AndroidOutlined />}>Google Play</Button>
              </Space>
            </div>
          </Col>
        </Row>

        <Divider className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DreamsTour. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors"
            >
              <FacebookOutlined />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors"
            >
              <TwitterOutlined />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors"
            >
              <InstagramOutlined />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors"
            >
              <LinkedinOutlined />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
