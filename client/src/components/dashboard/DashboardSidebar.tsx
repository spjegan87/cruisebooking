import React from "react";
import { Menu, Avatar, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import { 
  FiGrid, 
  FiBriefcase, 
  FiHeart, 
  FiDollarSign, 
  FiCreditCard,
  FiUser,
  FiBell,
  FiSettings,
  FiLogOut
} from "react-icons/fi";

const { Text, Title } = Typography;

interface DashboardSidebarProps {
  userName: string;
  userSince: string;
  userAvatar?: string;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  userName,
  userSince,
  userAvatar
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="bg-white border border-neutral-200 rounded-md p-6 mb-6">
      <div className="flex items-center mb-6">
        <Avatar 
          size={48} 
          src={userAvatar} 
          icon={!userAvatar && <FiUser />}
          className="mr-3"
        />
        <div>
          <Title level={5} className="m-0">{userName}</Title>
          <Text type="secondary" className="text-xs">Since {userSince}</Text>
        </div>
      </div>
      
      <Menu
        mode="inline"
        selectedKeys={[pathname.split("/").pop() || "dashboard"]}
        style={{ border: "none" }}
      >
        <Menu.Item key="dashboard" icon={<FiGrid />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="bookings" icon={<FiBriefcase />}>
          <Link to="/dashboard/bookings">My Bookings</Link>
        </Menu.Item>
        <Menu.Item key="reviews" icon={<FiHeart />}>
          <Link to="/dashboard/reviews">My Reviews</Link>
        </Menu.Item>
      </Menu>
      
      <div className="border-t border-neutral-200 mt-6 pt-6">
        <Text type="secondary" className="text-xs uppercase font-medium block mb-3">ACCOUNT SETTINGS</Text>
        <Menu
          mode="inline"
          style={{ border: "none" }}
        >
          <Menu.Item key="wallet" icon={<FiDollarSign />}>
            <Link to="/dashboard/wallet">Wallet</Link>
          </Menu.Item>
          <Menu.Item key="payments" icon={<FiCreditCard />}>
            <Link to="/dashboard/payments">Payments</Link>
          </Menu.Item>
          <Menu.Item key="profile" icon={<FiUser />}>
            <Link to="/dashboard/profile">My Profile</Link>
          </Menu.Item>
          <Menu.Item key="notifications" icon={<FiBell />}>
            <Link to="/dashboard/notifications">Notifications</Link>
          </Menu.Item>
          <Menu.Item key="settings" icon={<FiSettings />}>
            <Link to="/dashboard/settings">Settings</Link>
          </Menu.Item>
          <Menu.Item key="logout" icon={<FiLogOut />}>
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default DashboardSidebar;
