import React from "react";
import cryptoOne from "../../Svg.images/cryptoOne.png";
import Crypto from "../../Svg.images/Crypto.png";
import gif from "../../Svg.images/gif.gif";


const InvestCrypto = () => {
  return (
    <article className=" flex flex-col items-center mb-[5rem] font-slab">
      <div className=" mt-10 w-[95%]  flex flex-col items-center justify-center border-2 rounded-2xl text-white bg-[#4A6754] py-5  ">
        <h2 className=" text-3xl md:text-5xl font-medium leading-[3.5rem] text-center ">
          Crypto investment journey made easy
        </h2>
      </div>

      <div className="w-[100%] flex flex-col md:flex-row gap-[50px]  px-10 mt-7 ">
        <div className="w-[100%] md:w-[50%]  lg:w-[60%] lg:mt-[10rem] bg-[#F8F8F9] rounded-2xl pt-10 group">
          <div className="  px-10 mb-[2rem]">
            <h3 className="text-2xl md:text-3xl font-semibold my-3">
              Hands-Free Crypto Portfolio Tracking
            </h3>
            <p className="text-base md:text-lg leading-[2rem]">
              Our intuitive interface allows you to track crypto portfolio
              performance, assess returns, and make data-driven decisions.
            </p>
          </div>
          <div className=" w-[100%]  flex p-10 ">
            <div className="w-[40%] px-10">
              <button className=" flex items-center justify-center Start-swap bg-[#5E9270] cursor-pointer text-center px-[1.5rem] py-[0.6rem] rounded-3xl text-white font-medium text-lg ">
                <p className="text-2xl transform transition-transform group-hover:scale-150">
                  &#8594;
                </p>
              </button>
            </div>
            <div className="w-[60%] transform transition-transform group-hover:scale-105">
              <img
                src={gif}
                alt={cryptoOne}
                className="w-[100%] h-[100%] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="md:w-[50%] lg:w-[50%] h-max flex flex-col  bg-[#DAEBDC] rounded-2xl rounded-br-2xl   pt-10 group">
          <div className="  px-10 mb-[2rem]">
            <h3 className="text-2xl md:text-3xl font-semibold my-3">
              Your Financial Security and Crypto Portfolio
            </h3>
            <p className="text-base md:text-lg leading-[2rem]">
              Our platform employs cutting-edge security measures to ensure a
              robust and protected environment for your Transaction.
            </p>
          </div>
          <div className=" w-[100%] flex p-10">
            <div className="w-[40%]  px-10">
              <button className=" flex items-center justify-center Start-swap bg-[#5E9270] cursor-pointer text-center px-[1.5rem] py-[0.6rem] rounded-3xl text-white font-medium text-lg ">
                <p className="text-2xl transform transition-transform group-hover:scale-150">
                  &#8594;
                </p>
              </button>
            </div>
            <div className="w-[60%]  transform transition-transform group-hover:scale-105">
              <img
                src={Crypto}
                alt={Crypto}
                className="w-[100%] h-[100%] object-cover rounded-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default InvestCrypto;
