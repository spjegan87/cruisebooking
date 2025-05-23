import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, Dropdown, Menu, Button, Badge } from "antd";
import { 
  FiMenu, 
  FiBell, 
  FiUser, 
  FiChevronDown,
  FiGlobe,
  FiDollarSign,
  FiMoon
} from "react-icons/fi";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", hasDropdown: true },
    { name: "Flight", path: "/flights", hasDropdown: true },
    { name: "Hotel", path: "/hotels", hasDropdown: true },
    { name: "Car", path: "/cars", hasDropdown: true },
    { name: "Cruise", path: "/cruises", hasDropdown: true, active: location.pathname.includes('/cruise') },
    { name: "Tour", path: "/tours", hasDropdown: true },
    { name: "Pages", path: "/pages", hasDropdown: true },
    { name: "Dashboard", path: "/dashboard", hasDropdown: true },
  ];

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">My Profile</Menu.Item>
      <Menu.Item key="bookings">My Bookings</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  const languageMenu = (
    <Menu>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="fr">French</Menu.Item>
      <Menu.Item key="es">Spanish</Menu.Item>
      <Menu.Item key="de">German</Menu.Item>
    </Menu>
  );

  const currencyMenu = (
    <Menu>
      <Menu.Item key="usd">USD</Menu.Item>
      <Menu.Item key="eur">EUR</Menu.Item>
      <Menu.Item key="gbp">GBP</Menu.Item>
      <Menu.Item key="jpy">JPY</Menu.Item>
    </Menu>
  );

  const notificationMenu = (
    <Menu>
      <Menu.Item key="1">
        <div className="flex items-start">
          <div className="bg-blue-100 text-blue-500 p-2 rounded-full mr-2">
            <i className="fas fa-info-circle"></i>
          </div>
          <div>
            <p className="font-medium">Booking Confirmed</p>
            <p className="text-xs text-gray-500">Your booking #12345 has been confirmed</p>
            <p className="text-xs text-gray-400">2 hours ago</p>
          </div>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <div className="flex items-start">
          <div className="bg-green-100 text-green-500 p-2 rounded-full mr-2">
            <i className="fas fa-check-circle"></i>
          </div>
          <div>
            <p className="font-medium">Payment Successful</p>
            <p className="text-xs text-gray-500">Your payment of $1,299 was successful</p>
            <p className="text-xs text-gray-400">1 day ago</p>
          </div>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" className="text-center text-primary font-medium">
        View All Notifications
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-dark font-poppins font-bold text-xl">
                Dreams<span className="text-primary">Tour</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-neutral-700 hover:text-primary flex items-center",
                    item.active && "font-medium text-primary"
                  )}
                >
                  {item.name} {item.hasDropdown && <FiChevronDown className="text-xs ml-1" />}
                </Link>
              </div>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <Dropdown overlay={languageMenu} trigger={["click"]}>
              <Button type="text" icon={<FiGlobe />} className="hidden md:flex items-center">
                ENG <FiChevronDown className="text-xs ml-1" />
              </Button>
            </Dropdown>

            <Dropdown overlay={currencyMenu} trigger={["click"]}>
              <Button type="text" icon={<FiDollarSign />} className="hidden md:flex items-center">
                USD <FiChevronDown className="text-xs ml-1" />
              </Button>
            </Dropdown>

            <Button type="text" icon={<FiMoon />} className="hidden md:flex" />

            <Dropdown overlay={notificationMenu} trigger={["click"]}>
              <Badge count={2} size="small" className="cursor-pointer">
                <Button type="text" icon={<FiBell />} />
              </Badge>
            </Dropdown>

            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div className="flex items-center cursor-pointer">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <FiUser />
                </div>
              </div>
            </Dropdown>

            <Link to="/add-listing">
              <Button type="primary" className="hidden md:block">
                Add Listing
              </Button>
            </Link>

            <Button
              type="text"
              icon={<FiMenu />}
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Drawer
        title={
          <span className="text-dark font-poppins font-bold text-xl">
            Dreams<span className="text-primary">Tour</span>
          </span>
        }
        placement="left"
        onClose={() => setMobileMenuOpen(false)}
        visible={mobileMenuOpen}
        width={280}
      >
        <Menu mode="vertical">
          {navItems.map((item, index) => (
            <Menu.Item key={index}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          ))}
          <Menu.Divider />
          <Menu.Item key="add-listing">
            <Link to="/add-listing" className="text-primary font-medium">
              Add Listing
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;
