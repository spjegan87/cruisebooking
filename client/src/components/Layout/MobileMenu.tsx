import { useEffect } from 'react';
import { Link } from 'wouter';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).id === 'mobile-menu-overlay') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }
    
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        id="mobile-menu-overlay"
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
      ></div>
      
      {/* Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <Link href="/">
              <span className="text-dark font-bold text-xl">Dreams<span className="text-primary">Tour</span></span>
            </Link>
            <button onClick={onClose} className="text-gray-600">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Flight
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Hotel
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Car
              </Link>
            </li>
            <li>
              <Link href="/cruise-list" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Cruise
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Tour
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="block py-2 px-4 hover:bg-gray-100 rounded">
                Dashboard
              </Link>
            </li>
          </ul>
          
          <div className="mt-6 pt-6 border-t">
            <Link href="/dashboard" className="block w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md text-center transition duration-200">
              Add Listing
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
