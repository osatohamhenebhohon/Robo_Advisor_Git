import React from "react";
import hero from "../../Svg.images/hero.svg";
const Jump = () => {
  return (
    <div className=" w-[100%]  flex flex-row ">
      <div className=" w-[40rem] p-[1rem]">
        <h1 className="text-4xl font-bold">how are you all doing</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fugiat
          tempore. Iste molestias dolorem voluptatem. Velit in dignissimos sequi
          numquam.
        </p>
      </div>
      <div className=" w-[60rem] p-[1rem]">
        <img src={hero} alt="" className=" object-cover " />
      </div>
    </div>
  );
};

export default Jump;
