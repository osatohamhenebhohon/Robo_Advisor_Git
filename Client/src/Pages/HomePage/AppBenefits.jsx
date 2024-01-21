import React,{useEffect, useRef, useState} from "react";
import video from "../../Svg.images/videos/video (1080p).mp4";
import { BiPlayCircle, BiPauseCircle, BiChevronRight } from "react-icons/bi";

const AppBenefits = () => {
  const data = [
    {
      id: 1,
      title: "Financial Guidance at Your Fingertips",
      body: "Robo Advisor makes investment expertise accessible to everyone, offering straightforward guidance tailored to your specific needs.",
    },
    {
      id: 2,
      title: "Diversified Portfolios",
      body: " Our AI intelligently helps you distribute your investments across a spectrum of asset classes, employing a time-tested method to optimize returns while minimizing risk.",
    },
    {
      id: 3,
      title: "Automated Intelligence",
      body: "Robo Advisor harnesses the latest algorithms and technology, automating data-driven investment decisions to ensure your money works smarter, not harder.",
    },
  ];

  const [isplay, setIsplay] = useState(true);

  const videoRef = useRef();

  const handlePlay = () => {
    if (isplay) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsplay((currentplaying) => !currentplaying);
  };

  useEffect(() => {
    videoRef.current.play();
  }, []);



  return (
    <article className="flex flex-col  lg:flex-row px-10 py-10 mb-[5rem] gap-[50px] leading-9 bg-[#E0E0E0] font-slab">
      <div className=" w-[100%] h-[27rem] md:h-[40rem] lg:h-[40rem] lg:w-[50%] relative rounded-2xl">
        <video
          className="object-cover w-[100%] h-[100%] rounded-2xl"
          ref={videoRef}
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute bottom-[0%] right-[1%]">
          <button className="btn-play   " onClick={handlePlay}>
            {isplay ? (
              <BiPauseCircle className="text-white text-4xl" />
            ) : (
              <BiPlayCircle className="text-white text-4xl" />
            )}
          </button>
        </div>
      </div>
      <div className="w-[100%] lg:w-[50%] flex  flex-col  gap-[20px]">
        <div className=" w-[100%] md:px-10">
          <h2 className=" text-3xl md:text-5xl font-medium w-[90%] mb-5  ">
            Elevate Your Financial Future
          </h2>
        </div>
        {data.map((info) => {
          const { id, title, body } = info;
          return (
            <div className="px-2 lg:px-10" key={id}>
              <h3 className="text-2xl md:text-3xl font-semibold my-3">
                {title}
              </h3>
              <p className="text-base md:text-lg leading-[2rem]">{body}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default AppBenefits;
