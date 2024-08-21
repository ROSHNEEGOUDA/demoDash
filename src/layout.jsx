import React from "react";
import Navbar from "./navbar";
import Sidebar from "./SIdeBar";
import SidebarMobile from "./SidebarMobile";
import { useMediaQuery } from 'react-responsive';

const MainLayout = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({maxWidth: 769});
  const isMobile = useMediaQuery({maxWidth : 480})

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        {!isTabletOrMobile && <Sidebar />}
        <main className={`flex-grow bg-gray-100 ${isMobile ? "p-4" : "p-6"}`}>
          {children}
        </main>
      </div>
      {isTabletOrMobile && <SidebarMobile />}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
