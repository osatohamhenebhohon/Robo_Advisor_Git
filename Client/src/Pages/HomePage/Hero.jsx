import React from "react";
import herogreen from "../../Svg.images/Hero-green.png";

const Hero = () => {
  return (
    <article className="Hero-cont flex flex-col-reverse lg:flex-row w-[100%] pt-[1rem] justify-between items-stretch self-end mb-[5rem] leading-7 font-slab">
      <div className="Hero-info-wrapper w-[100%] lg:w-[45%] px-10 py-10 lg:py-[5rem] items-stretch justify-between  basis-[47%]  ">
        <div className="Hero-info-text mb-[1rem] ">
          <h1 className="text-4xl md:text-6xl text-black font-bold mb-[1rem] leading-[4rem]">
            Step into the future of financial growth with Robo Advisor.
          </h1>
          <p className="text-black text-base md:text-lg leading-[2rem]">
            Elevate your investment strategy, harnessing the power of
            cutting-edge technology. Our platform is more than an investment
            tool; it's your key to mastering wealth creation. From intelligent
            insights to personalized portfolio management, we empower you to
            navigate the complex world of investments effortlessly. Join us on a
            journey where every decision is a step towards financial mastery,
            where your wealth isn't just managed, but unleashed.
          </p>
        </div>
        <div className=" flex item-center lg:justify-start justify-center py-5 ">
          {" "}
          <button className="Start-swap bg-[#5E9270] cursor-pointer text-center md:text-xl px-[1rem] py-[0.6rem] md:px-[1.3rem] md:py-[0.6rem] rounded-3xl text-white font-medium text-lg transform transition-transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
      <div className="Hero-image w-[100%] h-[27rem] md:h-[40rem] lg:h-[40rem] lg:w-[50%] rounded-2xl px-10 py-5">
        <img
          src={herogreen}
          alt=""
          className="w-[100%] h-[100%] object-cover rounded-[20px]"
        />
      </div>
    </article>
  );
};

export default Hero;
