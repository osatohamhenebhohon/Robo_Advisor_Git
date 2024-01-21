import React from "react";
import { FiAirplay } from "react-icons/fi";

import data from "./data";

const Footer = () => {
  return (
    <footer className=" w-[100%] h-max  bg-white mt-[1rem] flex flex-col items-center font-slab px-10">
      <hr className="border-1 border-[#E0E0E0] w-[100%] " />
      <div className="w-[100%]  flex flex-col items-center px-10 ">
        <div className="footer-logo-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:justify-evenly gap-[80px] w-[100%] py-10 ">
          {data.map((Info, infoIndex) => {
            const { title, List } = Info;
            return (
              <div
                className="footer-info   text-black w-max px-2"
                key={infoIndex}
              >
                <h5 className=" text-xl font-semibold mb-[0.5rem] ">{title}</h5>
                <div className="footer-info-list ">
                  {/* the && operator is used to check if info.List exists before rendering it. */}
                  {List &&
                    List.map((Infolist, listIndex) => {
                      const { list, icon } = Infolist;
                      return (
                        <ul key={listIndex} className="">
                          <li className=" mb-[0.3rem] text-[1rem]  text-black cursor-pointer   my-3 ">
                            <a className=" text-black decoration-slate-300 flex  items-center gap-[10px]">
                              {icon}
                              {list}
                            </a>
                          </li>
                        </ul>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
        <hr className="border-1 border-[#E0E0E0] w-[100%]" />
        <div className=" w-[100%] h-[5rem] flex items-center justify-center text-black font-light">
          <p>
            &copy; 2023 Robo Advisor Financial Incorporations. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
