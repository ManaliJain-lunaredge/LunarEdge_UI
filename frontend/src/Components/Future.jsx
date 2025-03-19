import React from "react";
import future from "../assets/Future/future.png";
import arrow from "../assets/Home/arrow.png";
import { FaChevronRight } from "react-icons/fa";
import line from "../assets/bar/line.png";
import header_moon from "../assets/Home/header_moon.png";
import { Link } from "react-router-dom";
const Future = ({ theme }) => {
  const list = [
    {
      id: 1,
      name: "Collaborative Workplace:",
      description:
        "Be part of a team where collaboration and creativity drive success.",
    },
    {
      id: 2,
      name: "Learn and Excel:  ",
      description:
        "Grow your skills through structured training programs and exposure to challenging real-world projects.",
    },
    {
      id: 3,
      name: "Unlimited Growth Opportunities: ",
      description:
        "At LunarEdge, we provide mentorship, leadership opportunities,  and a clear roadmap for achieving your professional goals.",
    },
  ];
  return (
    <div>
      {/* desktop view */}
      <div className="md:grid grid-cols-5 3xl:gap-[10rem] 2xl:gap-[3rem]  py-[5rem] 2xl:px-[7rem] px-[3rem] hidden">
        <div
          className="col-span-3"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="800"
        >
          <h4
            className={`${
              theme === "dark" ? " text-white" : "text-[#0444AC]"
            }  xl:text-3xl lg:text-xl md:text-lg sm:text-xl font-semibold pb-[2rem]`}
          >
            Innovate and Succeed with Us
          </h4>
          <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-3xl 2xl:leading-snug xl:text-4xl lg:text-3xl sm:text-2xl lg:leading-tight xl:leading-tight md:text-2xl  leading-tight mt-0 pb-[2rem]">
            Where Careers Flourish,
            <br /> and Futures Are Built
          </h3>

          <div
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="800"
          >
            <ul className="pr-[5rem] pb-[4rem] pt-[1rem]"  >
              {list.map((item, i) => (
                <li className="flex gap-3 mb-[2rem] " key={item.id}>
                  <img
                    src={arrow}
                    className="xl:w-10 xl:h-10 lg:w-7 lg:h-7 sm:w-6 sm:h-6 mt-2 "
                  />
                  <div>
                    <p
                      className={` ${
                        theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                      } font-semibold text-3xl  2xl:text-2xl 3xl:text-3xl xl:text-xl md:text-base  sm:text-base leading-relaxed`}
                    >
                      {item.name}{" "}
                      <span
                        className={`${
                          theme === "dark" ? " text-white" : "text-black"
                        } text-2xl 2xl:text-xl 3xl:text-2xl   xl:text-xl md:text-base sm:text-sm  font-normal`}
                      >
                        {item.description}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-[#0444AC] text-white transition-all duration-300 rounded-md p-[1rem] flex 3xl:w-[32%] 2xl:w-[40%] xl:w-[40%] lg:w-[55%] md:w-[60%]  sm:w-[60%] hover:bg-[#FF297F] cursor-pointer">
              <Link to="/careers" className="lg:text-lg xl:text-base 3xl:text-lg text-sm">
                View Latest Job Openings{" "}
              </Link>
              <FaChevronRight className="2xl:text-sm text-xs mt-2 ml-2 " />
            </div>
          </div>
        </div>
        <div
          className="col-span-2"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <div className=" ">
            <img src={future} alt="future" className=" " />
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className=" py-[1rem] p-[2rem] block md:hidden">
        <div className="">
          <h4
            className={`${
              theme === "dark" ? " text-white" : "text-[#0444AC]"
            } text-xl font-semibold pb-[2rem]`}
          >
            Innovate and Succeed with Us
          </h4>
          <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold text-3xl leading-tight mt-0 pb-[2rem]">
            Where Careers Flourish,
            <br /> and Futures Are Built
          </h3>
          <div className="mb-[2rem]">
            <div className=" "  data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="800">
              <img src={future} alt="future" className=" " />
            </div>
          </div>
          <div  data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="800">
            <ul className=" pb-[1rem] pt-[1rem]">
              {list.map((item, i) => (
                <li className="flex gap-3 mb-[2rem] " key={item.id}>
                  <img src={arrow} className="w-6 h-6" />
                  <div>
                    <p
                      className={` ${
                        theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                      } font-semibold text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-base leading-relaxed`}
                    >
                      {item.name}{" "}
                      <span
                        className={`${
                          theme === "dark" ? " text-white" : "text-black"
                        } text-base font-normal`}
                      >
                        {item.description}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-[#0444AC] text-white rounded-md p-[1rem] flex w-[85%] mx-auto hover:bg-[#FF297F] cursor-pointer">
              <button className="text-base">View Latest Job Openings </button>
              <FaChevronRight className="2xl:text-sm text-xs mt-2 ml-2 " />
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <img
          src={line}
          className="mt-[5rem] lg:mt-[3rem] 2xl:mt-[5rem] md:mb-[3rem] lg:mb-0 relative z-0"
        />
        {/* <img
          src={header_moon}
          className="absolute lg:w-[14%] w-[25%] 2xl:left-[25rem] md:w-[15%] lg:top-[-6rem] lg:left-[5rem] md:top-[-3rem] md:left-[5rem] left-[2rem] top-[-3rem] 3xl:top-[-8rem] 2xl:top-[-6rem]  z-10"
        /> */}
      </div>
    </div>
  );
};

export default Future;
