import React from "react";
import { MdOutlineArrowForward } from "react-icons/md";

const SubscriptionPlan = () => {
  const Data = [
    {
      id: 1,
      Asset: "1 IN ASSETS",
      Subscription: "Core",
      Description: "Get started with simple, low-fee financial tools",
      Fee: "0.5%",
      color: "bg-[#6D8475]",
      margin: "mb-[17%]",
      Specifitication: [
        {
          id: 1,
          first: "Automatic Portlio rebalancing",
          Second: "Help from a real, friendly, human",
        },
      ],
    },
    {
      id: 2,
      Asset: "1000,000 IN ASSETS",
      Subscription: "Premium",
      Description:
        "Make the most of your investment with lower fee and tailored advice",
      Fee: "0.4%",
      color: "bg-[#B88BD9]",
      margin: "mb-[7%]",
      Specifitication: [
        {
          id: 2,
          first: "20% low management fee on your managed invemement",
          Second: "Financial goal setting with and expert advisor",
        },
      ],
    },
    {
      id: 3,
      Asset: "500,000 IN ASSETS",
      Subscription: "Gold",
      Description:
        "Build your legacy with expert guidance from our team of advisor",
      Fee: "0.2%*-0.4%",
      color: "bg-[#D9BB8B]",
      margin: "mb-[13%]",
      Specifitication: [
        {
          id: 3,
          first: "All Core and Premium features",
          Second: "Dedicated team and AI Advisor",
        },
      ],
    },
  ];
  return (
    <article className="mb-[5rem] font-slab  pb-10 ">
      <div className=" px-10 md:w-[60%] lg:w-[50%]">
        <h2 className=" text-3xl md:text-5xl font-medium my-[5rem] leading-[3.5rem]">
          Subscription plan that best fit you
        </h2>
      </div>
      <div className="w-[100%] px-10 flex flex-col lg:flex-row gap-[50px] w">
        {Data.map((data, index) => {
          const {
            Asset,
            Subscription,
            Description,
            Specifitication,
            color,
            margin,
            Fee,
            id,
          } = data;
          return (
            <div
              className={`flex-1  border-2 flex flex-col  p-5 rounded-2xl border-[#5E9270] ${color} group transform transition-transform hover:scale-105`}
              key={id}
            >
              <div className="mb-4">
                <p className="text-base md:text-lg font-light">${Asset}</p>
              </div>

              <div className=" flex items-center mb-4 gap-3">
                <span className="flex items-center justify-center text-3xl">
                  {Subscription}
                </span>
                <span className="text-2xl flex items-center justify-center transform transition-transform group-hover:scale-150">
                  &#8594;
                </span>
              </div>
              <div className=" mb-4">
                <p className="">{Description}</p>
              </div>
              <div className={`sub ${margin}`}>
                {Specifitication &&
                  Specifitication.map((spec, index) => {
                    const { first, Second, id } = spec;
                    return (
                      <div className="flex flex-col text-base" key={id}>
                        <span className="flex gap-[10px]">
                          <p>&#10004;</p>
                          <p>{first}</p>
                        </span>
                        <span className="flex gap-[10px]">
                          <p>&#10004;</p>
                          <p>{Second}</p>
                        </span>
                      </div>
                    );
                  })}
              </div>
              <div className=" rounded-2xl p-4 bg-[white]">
                <p className="flex items-center text-3xl">{Fee}</p>
                <p className="text-base">management fee</p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default SubscriptionPlan;
