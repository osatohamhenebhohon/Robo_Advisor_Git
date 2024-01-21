import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Navsidebar from "../Navbar/Navsidebar";
import Footer from "../Footer/Footer";
import { useGlobalContext } from "../GlobalContext";
const NavLayout = () => {
  const { revealMenu } = useGlobalContext();
  return (
    <>
      
        <Navbar />
        <Navsidebar />
        <Outlet />

        <Footer />
    
    </>
  );
};

export default NavLayout;
