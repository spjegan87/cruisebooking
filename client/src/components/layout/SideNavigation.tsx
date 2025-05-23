import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  LayoutDashboard, 
  Heart, 
  Briefcase, 
  LogOut, 
  Settings, 
  User, 
  BellRing 
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, href, active, onClick }: NavItemProps) => (
  <Link href={href}>
    <a
      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
        active ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  </Link>
);

interface SideNavigationProps {
  onCloseNav?: () => void;
}

const SideNavigation = ({ onCloseNav }: SideNavigationProps) => {
  const [location] = useLocation();
  const [user] = useState({
    name: "Jeffrey Wilson",
    joinDate: "01 May, 2023",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50"
  });

  const mainNavItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", href: "/dashboard" },
    { icon: <Briefcase className="w-5 h-5" />, label: "My Bookings", href: "/bookings" },
    { icon: <Heart className="w-5 h-5" />, label: "My Reviews", href: "/reviews" }
  ];

  const accountNavItems = [
    { icon: <CreditCard className="w-5 h-5" />, label: "Wallet", href: "/wallet" },
    { icon: <CreditCard className="w-5 h-5" />, label: "Payments", href: "/payments" },
    { icon: <User className="w-5 h-5" />, label: "My Profile", href: "/profile" },
    { icon: <BellRing className="w-5 h-5" />, label: "Notifications", href: "/notifications" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings", href: "/settings" },
    { icon: <LogOut className="w-5 h-5" />, label: "Logout", href: "/logout" }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-md p-6">
      <div className="flex items-center mb-6">
        <Avatar className="h-12 w-12 mr-3">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium text-gray-900">{user.name}</h3>
          <p className="text-xs text-gray-500">Since {user.joinDate}</p>
        </div>
      </div>

      <nav className="space-y-1">
        {mainNavItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={location === item.href}
            onClick={onCloseNav}
          />
        ))}
      </nav>

      <div className="border-t border-gray-200 mt-6 pt-6">
        <h4 className="text-sm font-medium text-gray-500 mb-3">ACCOUNT SETTINGS</h4>
        <nav className="space-y-1">
          {accountNavItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={location === item.href}
              onClick={onCloseNav}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideNavigation;
