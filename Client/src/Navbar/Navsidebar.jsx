import React from "react";
import navdata from "./navdata";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext";
const Navsidebar = () => {
  const { revealMenu } = useGlobalContext();
  return (
    <aside
      className={`fixed top-[5rem] right-0 w-full h-full z-[100] grid place-items-center transition-all duration-500 ease-in-out transform scale-100 bg-black bg-opacity-30 lg:hidden ${
        revealMenu ? "visible" : "invisible"
      } `}
    >
      <div
        className={`h-[100%] w-[100%] top-[0rem] left-0 fixed bg-white transition-all duration-500 ease-in-out lg:hidden ${
          revealMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mobileNav flex flex-col justify-center items-center leading-1 text-lg font-medium">
          {navdata.map((mobile) => {
            const { id, path, nav } = mobile;
            return (
              <span
                className=" border-b-[2px] border-gray-200 w-[90%] flex justify-center items-center py-[0.5rem]"
                key={id}
              >
                <NavLink to={path} key={path}>
                  {nav}
                </NavLink>
              </span>
            );
          })}
          <div className="Enter-app-cont   lg:flex mt-5">
            <button className=" w-max  Btn cursor-pointer  text-lg md:text-xl px-[1rem] py-[0.3rem] md:px-[1.3rem] md:py-[0.6rem]  text-white bg-[#5E9270] font-normal rounded-3xl transform transition-transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navsidebar;
