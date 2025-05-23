import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { BackTop } from "antd";
import { FiArrowUp } from "react-icons/fi";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackTop>
        <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-md shadow-lg">
          <FiArrowUp />
        </div>
      </BackTop>
    </div>
  );
};

export default Layout;
