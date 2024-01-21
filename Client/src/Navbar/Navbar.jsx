import React from "react";
import { NavLink,  } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import nav from "./navdata";
import { useGlobalContext } from "../GlobalContext";


const Navbar = () => {
  const { revealMenu, setRevealMenu } = useGlobalContext();
  return (
    <header className=" header w-[100%] h-[6rem] bg-white font-slab flex  items-center justify-center shadow-lg z-[10] sticky top-0">
      <nav className=" w-[97%] h-[4rem] mx-5 lg:mx-[1rem] flex   items-center text-xl lg:text-lg font-semibold bg-white justify-between">
        {/* MenuBar */}
        <div className=" flex w-[85%] items-center">
          <button
            className=" flex  lg:hidden mr-[1rem] cursor-pointer text-4xl"
            onClick={() => setRevealMenu(!revealMenu)}
          >
            {revealMenu ? <FiX /> : <FiMenu />}
          </button>
          {/* Logo */}
          <div className="Logo w-max h-max text-black cursor-pointer md:text-3xl">
            <span className="">Robo</span>
            <span className="">Advisor</span>
          </div>
          {/* Navigation directory */}
          <div className="Directory-cont text-black justify-center px-[1.5rem] py-[0.3rem] flex-1 hidden   lg:flex font-normal ">
            {nav.map((link) => {
              const { id, path, nav } = link;
              return (
                <button className="Directory mx-[1rem] text-xl " key={id}>
                  <NavLink to={path} key={path}>
                    {nav}
                  </NavLink>
                </button>
              );
            })}
          </div>
        </div>

        {/* Enter App Button */}
        <div className="md:flex lg:flex gap-[20px]  ">
          <div className="Sign up   md:flex lg:flex">
            <button className=" w-max  Btn cursor-pointer rounded-3xl bg-white text-lg md:text-xl px-[1rem] py-[0.3rem] md:px-[1.3rem] md:py-[0.6rem]  text-black bg-transparent border-2 font-normal border-[#5E9270] transform transition-transform hover:scale-105">
              Sign up
            </button>
          </div>
          <div className="Enter-app-cont   lg:flex hidden">
            <button className=" w-max  Btn cursor-pointer  text-lg md:text-xl px-[1rem] py-[0.3rem] md:px-[1.3rem] md:py-[0.6rem]  text-white bg-[#5E9270] font-normal rounded-3xl transform transition-transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>
      {/* <Navsidebar /> */}
    </header>
  );
};

export default Navbar;
