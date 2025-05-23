import { Link } from "wouter";
import { XIcon } from "lucide-react";

interface NavItem {
  label: string;
  path: string;
  hasDropdown: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
      <div className="drawer fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-dark font-poppins font-bold text-xl">
            Dreams<span className="text-primary">Tour</span>
          </Link>
          <button 
            className="text-neutral-600 hover:text-neutral-900"
            onClick={onClose}
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <a className="block py-2 px-4 text-neutral-700 hover:bg-neutral-100 rounded-md">
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-8 pt-6 border-t">
          <h4 className="text-sm font-medium text-neutral-500 mb-4">ACCOUNT</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard">
                <a className="block py-2 px-4 text-neutral-700 hover:bg-neutral-100 rounded-md">
                  <i className="fas fa-user mr-2"></i> My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard">
                <a className="block py-2 px-4 text-neutral-700 hover:bg-neutral-100 rounded-md">
                  <i className="fas fa-bookmark mr-2"></i> My Bookings
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block py-2 px-4 text-neutral-700 hover:bg-neutral-100 rounded-md">
                  <i className="fas fa-cog mr-2"></i> Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block py-2 px-4 text-neutral-700 hover:bg-neutral-100 rounded-md">
                  <i className="fas fa-sign-out-alt mr-2"></i> Logout
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
