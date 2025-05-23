import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MoonIcon, BellIcon, MenuIcon } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [location] = useLocation();
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/", hasDropdown: true },
    { label: "Flight", path: "/flights", hasDropdown: true },
    { label: "Hotel", path: "/hotels", hasDropdown: true },
    { label: "Car", path: "/cars", hasDropdown: true },
    { label: "Cruise", path: "/cruises", hasDropdown: true },
    { label: "Tour", path: "/tours", hasDropdown: true },
    { label: "Pages", path: "#", hasDropdown: true },
    { label: "Dashboard", path: "/dashboard", hasDropdown: true },
  ];

  const handleAddListing = () => {
    toast({
      title: "Add Listing",
      description: "This feature is coming soon!",
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-dark font-poppins font-bold text-xl">
                Dreams<span className="text-primary">Tour</span>
              </span>
            </Link>
            
            {/* Navigation for desktop */}
            <nav className="hidden md:flex items-center space-x-1 ml-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link href={item.path}>
                    <a className={`px-3 py-2 text-neutral-700 hover:text-primary flex items-center ${
                      location === item.path ? "text-primary font-medium" : ""
                    }`}>
                      {item.label} {item.hasDropdown && <i className="fas fa-chevron-down text-xs ml-1"></i>}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          
          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <MoonIcon className="h-5 w-5" />
            </Button>
            <div className="hidden md:block relative">
              <Button variant="ghost" size="icon">
                <BellIcon className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
              </Button>
            </div>
            <Button 
              className="hidden md:block bg-primary hover:bg-primary/90 text-white"
              onClick={handleAddListing}
            >
              Add Listing
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} navItems={navItems} />
    </header>
  );
};

export default Header;
