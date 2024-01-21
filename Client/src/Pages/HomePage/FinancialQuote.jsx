import React from "react";

const FinancialQuote = () => {
  return (
    <article className="w-[100%]  lg:h-[40rem] font-slab bg-[#F8F8F9] mb-[5rem]">
      <div className="w-[100%] flex flex-col justify-center items-center  h-[100%] px-10">
        <hr className="border-1 border-[#000] w-[100%] mb-10" />
        <span className="mb-[3rem] flex items-center justify-center">
          <p className="Quote text-2xl md:text-4xl font-medium leading-[3.5rem] ">
            Empowering financial success through personalized and strategic
            investment advice, guiding you towards your unique financial goals
            with confidence.
          </p>
        </span>

        <span>
          <p className="Quote text-2xl md:text-4xl font-medium leading-[3.5rem] mb-[1rem]">
            &#34;Investing success is measured by a solid financial plan and
            disciplined behavior, not just beating the market. &#34;
          </p>
          <p className="text-xl">&#8212; Benjamin Graham </p>
        </span>
      </div>
    </article>
  );
};

export default FinancialQuote;

//
