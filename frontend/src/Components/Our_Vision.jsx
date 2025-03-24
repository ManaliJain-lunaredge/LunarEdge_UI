import React, { useEffect, useState } from "react";
import img1 from "../assets/Our_Vision/img1.png";
import img2 from "../assets/Our_Vision/img2.png";
import img3 from "../assets/Our_Vision/img3.png";
import line from "../assets/bar/line.png";
import header_moon from "../assets/Home/header_moon.png";

const Our_Vision = ({ theme }) => {
  const [isEdge, setIsEdge] = useState(false);
  const list = [
    {
      id: 1,
      name: "Innovation Leadership",
      image: img1,
      description:
        "We aim to be recognized as a worldwide leader in IT services, setting benchmarks for innovation and excellence.",
    },
    {
      id: 2,
      name: "Customer-Centric",
      image: img2,
      description:
        "Our focus is always on delivering tailored solutions and providing exceptional support to meet client needs.",
    },
    {
      id: 3,
      name: "Commitment to Quality",
      image: img3,
      description:
        "By blending groundbreaking ideas with an unwavering commitment to quality, we build solutions that endure.",
    },
  ];
  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Edg")) {
      setIsEdge(true);
    }
  });
  return (
    <div className={` pt-[2rem] pb-[4rem] w-full h-full`}>
      {/* desktop view */}
      <div
        className={` px-[7rem] mt-[3rem] 2xl:block hidden`}
      >
        <h4 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 2xl:text-6xl  xl:text-4xl lg:text-4xl sm:text-2xl lg:leading-tight xl:leading-tight md:text-3xl  leading-tight mt-0 pb-[2rem]">
          A Vision for the Future
        </h4>

        <h3
          className={`${
            theme === "dark" ? " text-white" : "text-black"
          } 2xl:text-2xl 3xl:text-3xl  lg:text-2xl sm:text-xl  pb-[2rem] `}
        >
          To lead globally in IT services through innovation, customer focus,
          and Inflexible quality.
        </h3>
        <ul
          className="md:flex 2xl:gap-[3rem] xl:gap-[1rem] mt-[3rem] "
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          {list.map((item) => (
            <li
              key={item.id}
              className={`${
                theme === "dark"
                  ? " bg-[#E8E8E8] hover:bg-white cursor-pointer"
                  : "bg-white hover:bg-[#e8e8e8] cursor-pointer"
              }   rounded-lg p-[2rem]  flex flex-col justify-around`}
            >
              <h3 className="font-bold text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-base leading-relaxed text-center">
                {item.name}
              </h3>
              <img src={item.image} className="w-[70%] h-[50%] mx-auto" />
              <p className="text-black text-2xl  lg:text-2xl 2xl:text-xl 3xl:text-2xl md:text-base sm:text-sm  font-normal ">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile View */}
      <div className={`${
          isEdge ? "px-[3rem]" : ""
        } p-[2rem] mt-[0rem] 2xl:hidden `}>
        <h4 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-5xl  xl:text-5xl lg:text-3xl sm:text-2xl lg:leading-tight xl:leading-tight md:text-2xl text-3xl  leading-tight mt-0 pb-[2rem]">
          A Vision for the Future
        </h4>

        <h3
          className={`${
            theme === "dark" ? " text-white" : "text-black"
          }   text-xl leading-tight mt-0 pb-[2rem] xl:text-2xl lg:text-xl md:text-lg font-poppins `}
        >
          To lead globally in IT services through innovation, customer focus,
          and Inflexible quality.
        </h3>
        <ul
          className="lg:flex 2xl:gap-[3rem] gap-[1rem]   lg:mt-[2rem] "
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          {list.map((item) => (
            <li
              key={item.id}
              className={`${
                theme === "dark"
                  ? " bg-[#E8E8E8] hover:bg-white cursor-pointer"
                  : "bg-white hover:bg-[#e8e8e8] cursor-pointer"
              }  rounded-lg px-[0.5rem] py-[1rem] mb-[1rem] `}
            >
              <h3 className="text-black text-lg xl:text-2xl lg:text-xl md:text-xl font-semibold text-center pb-[1rem]">
                {item.name}
              </h3>
              <div className="flex gap-[1rem]">
                <img src={item.image} className="w-24 h-24" />
                <p className="text-black text-base xl:text-xl lg:text-base md:text-base md:mt-5 lg:mt-0 ">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* moon view */}
      <div className="relative">
        <img src={line} className="md:mt-[8rem] mt-[3rem] relative z-0" />
        <img
          src={header_moon}
          className="absolute 3xl:w-[8%] w-[15%] md:w-[12%] 2xl:w-[10%] right-[5rem]  md:top-[-5rem] top-[-2rem] z-10"
        />
      </div>
    </div>
  );
};

export default Our_Vision;

// w-[20%] left-[3rem] top-[-2rem] 2xl:w-[8%] md:left-[5rem]  md:top-[-6rem]  2xl:right-[15rem] 3xl:right-[-3rem]  2xl:top-[-4rem] 3xl:top-[-5rem]
