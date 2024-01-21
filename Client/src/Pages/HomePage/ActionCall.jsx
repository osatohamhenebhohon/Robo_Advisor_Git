import React from "react";

const ActionCall = () => {
  return (
    <article className="w-[100%]  h-[30rem] lg:h-[40rem] flex mb-10 items-center justify-center text-white bg-black font-slab">
      <div className="w-[100%] lg:w-[50%] flex flex-col justify-center items-center  h-[100%]  px-10 ">
        <h2 className=" text-3xl md:text-5xl font-medium w-[90%] mb-5 text-center ">
          Let’s make your money make money
        </h2>
        <p className="text-base md:text-lg leading-[2rem] mb-10 text-center">
          Your journey to financial prosperity begins with informed decisions
          powered by Robo Advisor.
        </p>
        <button className="Start-swap bg-[#5E9270] border 2 border-white cursor-pointer text-center md:text-xl px-[1rem] py-[0.6rem] md:px-[1.3rem] md:py-[0.6rem] rounded-3xl text-white font-medium text-lg transform transition-transform hover:scale-105">
          Get Started
        </button>
      </div>
    </article>
  );
};

export default ActionCall;
