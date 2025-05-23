import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-dark font-bold text-xl">Dreams<span className="text-primary">Tour</span></span>
            </Link>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="relative group">
              <Link href="/" className={`px-3 py-2 rounded ${isActive('/') ? 'bg-gray-100' : 'hover:bg-gray-100'} flex items-center`}>
                Home <i className="fas fa-chevron-down text-xs ml-1"></i>
              </Link>
            </div>
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                Flight <i className="fas fa-chevron-down text-xs ml-1"></i>
              </button>
            </div>
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                Hotel <i className="fas fa-chevron-down text-xs ml-1"></i>
              </button>
            </div>
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                Car <i className="fas fa-chevron-down text-xs ml-1"></i>
              </button>
            </div>
            <div className="relative group">
              <Link href="/cruise-list" className={`px-3 py-2 rounded ${isActive('/cruise-list') ? 'bg-gray-100' : 'hover:bg-gray-100'} flex items-center`}>
                Cruise <i className="fas fa-chevron-down text-xs ml-1"></i>
              </Link>
            </div>
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                Tour <i className="fas fa-chevron-down text-xs ml-1"></i>
              </button>
            </div>
            <div className="relative group">
              <button className="px-3 py-2 rounded hover:bg-gray-100 flex items-center">
                Pages <i className="fas fa-chevron-down text-xs ml-1"></i>
              </button>
            </div>
            <div className="relative group">
              <Link href="/dashboard" className={`px-3 py-2 rounded ${isActive('/dashboard') ? 'bg-gray-100' : 'hover:bg-gray-100'} flex items-center`}>
                Dashboard <i className="fas fa-chevron-down text-xs ml-1"></i>
              </Link>
            </div>
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center space-x-2">
            <button className="hidden md:block p-2 text-gray-600 hover:text-gray-900">
              <i className="fas fa-moon"></i>
            </button>
            <button className="hidden md:block p-2 text-gray-600 hover:text-gray-900 relative">
              <i className="fas fa-bell"></i>
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <Link href="/dashboard" className="hidden md:block bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition duration-200">
              Add Listing
            </Link>
            <button 
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
