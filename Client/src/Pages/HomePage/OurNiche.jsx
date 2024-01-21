import React from "react";

const OurNiche = () => {
  const data = [
    {
      id: 1,
      title: "Tailored insights for your financial journey",
      body: "Your specific job, net income, and location help us provide personalized advice, ensuring your financial path is uniquely suited to your circumstances.",
    },
    {
      id: 2,
      title: "Informed decisions through market insights",
      body: "Our analysis of market trends and historical performance empowers you to make well-informed decisions, leveraging data to navigate the financial landscape.",
    },
    {
      id: 3,
      title: "Smart and diverse investment strategies",
      body: "Our algorithms curate a diversified portfolio across various asset classes, providing you with time-tested strategies to optimize returns and manage risks effectively.",
    },
  ];
  // bg-[#FDC621]
  return (
    <article className="flex flex-col px-[1rem] py-[3.5rem] md:p-[3.5rem]  mx-10 rounded-2xl mb-[5rem] leading-7 bg-[#4A6754] text-white font-slab">
      <div className="flex items-center justify-center w-[100%]">
        <h2 className=" text-3xl md:text-5xl font-medium lg:w-[70%]  mb-5  text-center leading-[3.5rem]">
          Customized Investment Strategies for Financial Triumph
        </h2>
      </div>

      <div className=" flex  flex-col lg:flex-row gap-[20px] px-1 md:px-10">
        {data.map((info) => {
          const { id, title, body } = info;
          return (
            <div className=" " key={id}>
              <h3 className="text-2xl md:text-3xl font-semibold my-3">
                {title}
              </h3>
              <p className=" text-base md:text-lg leading-[2rem]">{body}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default OurNiche;
