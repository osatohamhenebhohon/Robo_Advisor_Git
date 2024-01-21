import React, { useState, useEffect } from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import axios from "axios";

const RiskLevel = () => {
  const data = [
    {
      id: 1,
      title: "Tailored insights for your financial journey",
      body: "Your specific job, net income, and location help us provide personalized advice, ensuring your financial path is uniquely suited to your circumstances.",
    },
    {
      id: 2,
      title: "Understand your risk tolerance",
      body: "Your specific job, net income, and location help us provide personalized advice, ensuring your financial path is uniquely suited to your circumstances.",
    },
    {
      id: 3,
      title: "Smart and diverse investment strategies",
      body: "Our analysis of market trends and historical performance empowers you to make well-informed decisions, leveraging data to navigate the financial landscape.",
    },
  ];

  const [riskScore, setRiskScore] = useState(0);
  const [portfolioData, setPortfolioData] = useState(null);

  const handleRiskChange = (event) => {
    setRiskScore(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    const fetchRiskdata = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/Getriskdata");
        const res = await axios.get(
          "http://localhost:5000/Getriskdata/65a95e20f5dde4eb9a249719"
        );
        setPortfolioData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRiskdata();
  }, []);

  const colors = [
    "bg-[#6D8475]",
    "bg-[#8BD9A7]",

    "bg-[#9B76B9]",
    "bg-[#D9BB8B]",

    "bg-[#BCA278]",
    "bg-[#B88BD9]",
    "bg-[#78BC91]",
    "bg-[#9FBFAA]",
  ];

  // "bg-[#9C77A0]",
  //   "bg-[#D69F42]",
  //   "bg-[#7F5E81]",
  //   "bg-[#FDC621]",
  //   "bg-[#CEBBD0]",
  //   "bg-[#C87E03]",
  //   "bg-[#E4C89A]",

  return (
    <div className=" flex flex-col lg:flex-row justify-center w-[100%]  mb-[5rem] relative font-slab">
      {portfolioData && (
        <div className="flex flex-col  w-[100%] lg:w-[60%]  bg-[#ffff]  ">
          <div className=" flex items-center justify-center mt-[1rem]">
            <div className="w-[70%] md:w-[50%]  lg:w-[50%] h-[6rem]  flex flex-col items-center justify-center border-2 border-[#5E9270] rounded-lg  bg-[#FFFF] shadow-xl">
              <div className="w-full flex  items-center justify-between px-4 mb-3 ">
                <h2 className="font-semibold md:text-lg">
                  Risk Score: {riskScore}
                </h2>
                <p className="font-light md:text-lg">Example Portfolio</p>
              </div>

              <input
                type="range"
                min="0"
                max="10"
                value={riskScore}
                onChange={handleRiskChange}
                className="w-[90%] accent-[#5E9270] bg-white  h-2 rounded-full"
              />
            </div>
          </div>
          {/* Portfolio Risk level representation */}
          <div className="flex flex-col lg:flex-row ">
            <div className=" w-[100%]  px-[2rem]  md:pt-[3rem] md:pb-[3rem] md:px-[3rem] ">
              {portfolioData.categories.map((category, index) => (
                <div
                  className="flex gap-3 text-base md:text-lg "
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection:
                      portfolioData.values[index][riskScore] === 0
                        ? "column"
                        : "row",
                  }}
                >
                  <div className="w-[9.5rem]  md:w-[12rem]  flex items-center gap-3 ">
                    <span className="flex items-center py-[0.4rem]">
                      {category}
                    </span>
                    {portfolioData.values[index][riskScore] ? (
                      <span>
                        <RxQuestionMarkCircled />
                      </span>
                    ) : (
                      ""
                    )}
                  </div>

                  {portfolioData.values[index][riskScore] !== 0 && (
                    <div
                      className={`${
                        portfolioData.values[index][riskScore]
                          ? "border-[1px] border-white"
                          : ""
                      } ${
                        colors[
                          portfolioData.values[index][riskScore] % colors.length
                        ]
                      } key={item.id} flex items-center px-5`}
                      style={{
                        width: `${portfolioData.values[index][riskScore]}%`,
                      }}
                    >
                      {portfolioData.values[index][riskScore]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="w-[100%] lg:w-[40%] flex item-center justify-center">
        <div className="w-[100%] px-10 py-10 lg:pl-10 lg:pr-[7rem] text-black  flex flex-col items-center justify-center gap-5">
          <h2 className="text-3xl md:text-5xl font-medium mb-5 leading-[3.5rem]">
            Strategic advice aligned with your goals
          </h2>
          <p className="text-base md:text-lg leading-[2rem]">
            Understanding your risk tolerance, investment objectives, and time
            horizon forms the foundation of our strategic advice. By delving
            into these aspects, we tailor our recommendations to match your
            unique financial goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskLevel;
