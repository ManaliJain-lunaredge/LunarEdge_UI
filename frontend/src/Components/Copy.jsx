import React from "react";
import about from "../assets/Aboutus/about.png";
import arrow from "../assets/Home/arrow.png";
import { FaChevronRight } from "react-icons/fa";
import line from "../assets/bar/line.png";
import header_moon from "../assets/Home/header_moon.png";
const Aboutus = () => {
  const list = [
    {
      id: 1,
      name: "Innovative Partnerships:",
      description:
        "Dedicated to connecting innovative technology with the limitless potential of businesses and people.",
    },
    {
      id: 2,
      name: "Endless Possibilities: ",
      description:
        "Guided by our tagline, “Smart Innovation Meets Infinity,” we strive for excellence in every endeavor.",
    },
    {
      id: 3,
      name: "Cutting-Edge Solutions:",
      description:
        "From cutting-edge software development to strategic IT consulting, we provide tailored solutions that address unique business needs.",
    },
  ];

  return (
    <div>
      <div className="md:grid grid-cols-5 gap-[10rem] lg:gap-[10rem]  md:gap-[5rem] pl-[2rem] xl:pl-[1.5%] md:pl-0 py-[3rem] hidden">
        {/* <div className=" pl-[4rem] relative  col-span-2">
          <img src={about} alt="about" className=" z-0 " />
          <img
            src={header_moon}
            className="absolute right-[-2rem] 2xl:bottom-[0%] xl:bottom-[32%] lg:bottom-[25%]  w-[30%] z-100"
          />
        </div> */}
         <div className="relative col-span-2 flex justify-center">
          <img src={about} alt="about" className="w-full max-w-[500px] object-cover" />
          <img
            src={header_moon}
            className="absolute right-[-2rem] bottom-[-1%] xl:bottom-[-2%] lg:bottom-[22%] md:bottom-[40%] sm:bottom-[45%] md:right-[0rem] sm:right-[-1rem] w-[30%]"
          />
        </div>
        <div className="col-span-3 w-[90%]">
          <h4 className="text-white text-3xl font-semibold pb-[2rem]">
            About LunarEdge
          </h4>
          <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold xl:text-6xl lg:text-5xl lg:leading-tight xl:leading-tight md:text-4xl  leading-tight mt-0 pb-[2rem]">
            Empowering Businesses
            <br /> with Smart Solutions
          </h3>

          <div>
            <ul className=" pb-[1rem] pt-[1rem]">
              {list.map((item, i) => (
                <li className="flex gap-4 mb-[2rem] " key={item.id}>
                  <img src={arrow} className="w-10 h-10 mt-2 " />
                  <div>
                    <p className="text-[#5FC1FF] font-semibold text-3xl xl:text-3xl lg:text-2xl md:text-xl  leading-relaxed">
                      {item.name}{" "}
                      <span className="text-white text-2xl  lg:text-2xl md:text-base  font-normal">
                        {item.description}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-[#0444AC] text-white rounded-md p-[1rem] flex w-[25%] xl:w-[35%] 2xl:w-[28%] lg:w-[40%] md:w-[60%] hover:bg-[#FF297F] cursor-pointer">
              <button className="text-lg">Know more About us </button>
              <FaChevronRight className="2xl:text-sm text-xs mt-2 ml-2 " />
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className="p-[2rem] md:hidden ">
        <div className="">
          <h4 className="text-white text-xl  pb-[2rem]">
            About LunarEdge
          </h4>
          <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold text-3xl leading-tight mt-0 pb-[2rem]">
            Empowering Businesses
            <br /> with Smart Solutions
          </h3>
          <div className="  relative  ">
            <img src={about} alt="about" className=" z-0 " />
            <img
              src={header_moon}
              className="absolute    w-[30%] right-[-1rem] z-100 bottom-[0rem]"
            />
          </div>
          <div>
            <ul className=" pb-[1rem] pt-[3rem]">
              {list.map((item, i) => (
                <li className="flex gap-4 mb-[2rem] " key={item.id}>
                  <img src={arrow} className="w-6 h-6 mt-2 " />
                  <div>
                    <p className="text-[#5FC1FF] font-semibold text-lg leading-relaxed">
                      {item.name}{" "}
                      <span className="text-white text-base font-normal">
                        {item.description}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-[#0444AC] text-white rounded-md p-[0.9rem] flex w-[70%]  mx-auto hover:bg-[#FF297F] cursor-pointer">
              <button className="text-base">Know more About us </button>
              <FaChevronRight className="2xl:text-sm text-xs mt-2 ml-2 " />
            </div>
          </div>
        </div>
      </div>
      <img src={line} className="mt-[0rem]" />
    </div>
  );
};

export default Aboutus;










