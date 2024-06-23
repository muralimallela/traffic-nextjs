// components/layout.tsx

import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="relative  ml-[66px] h-[2000px] mt-12 bg-orange-800">{children}</div>
    </div>
  );
};

export default Layout;
