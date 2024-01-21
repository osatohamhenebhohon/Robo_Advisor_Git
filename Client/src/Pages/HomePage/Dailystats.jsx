import React from "react";
import { BiPlus } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { HiStar } from "react-icons/hi";

const Dailystats = () => {
  const data = [
    { id: 1, title: "Trusted Clients", value: "700k", icon: <FaPlus /> },
    { id: 2, title: "Assets Managed", value: "10B", icon: <FaPlus /> },
    { id: 3, title: "Apple App Store", value: "4.8", icon: <HiStar /> },
    { id: 4, title: "Google Play Store", value: "4.9", icon: <HiStar /> },
    { id: 5, title: "Daily Active Users", value: "$100.k+" },
  ];
  return (
    <article className="Daily-stats  w-[100%]  py-2 mb-[5rem]  justify-evenly flex-col justify-self-center items-center leading-[43px] font-bold font-slab">
      <div className="justify-evenly border rounded-2xl border-[#4A6754] md:flex md:flex-row grid grid-cols-2 gap-4 mx-10 py-3">
  
        {data.map((info) => {
          const { id, title, value, icon } = info;
          return (
            <div
              className="Metric-Cont text-center items-stretch flex justify-between flex-col "
              key={id}
            >
              <span className=" flex item-center justify-center Metric-title font-medium text-[#4A6754] text-2xl md:text-2xl lg:text-3xl ">
                {value}
                <p className=" flex items-center justify-center text-lg font-bold">
                  {icon}
                </p>
              </span>
              <span className="Metric-value font-normal  text-[#4A6754]">
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Dailystats;
