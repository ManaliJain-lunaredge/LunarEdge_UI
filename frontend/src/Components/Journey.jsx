import React from "react";
import arrow from "../assets/Home/arrow.png";
import { FaChevronRight } from "react-icons/fa";
import journey from "../assets/Journey/journey.png";
import line from "../assets/bar/line.png";
import header_moon from "../assets/Home/header_moon.png";

const Journey = ({ theme }) => {
  const list = [
    {
      id: 1,
      name: "Established in 2024:",
      description:
        "Established with a mission to create value through innovative technology solutions.",
    },
    {
      id: 2,
      name: "Dynamic Growth:",
      description:
        "Evolving into a versatile IT services company with expertise across multiple industries.",
    },
    {
      id: 3,
      name: "Experienced Team:",
      description:
        "Powered by skilled professionals offering innovative, tailored solutions to effectively meet diverse business needs and drive sustainable growth.",
    },
  ];
  return (
    <div>
      {/* desktop view */}
      <div className=" hidden md:block pt-[3rem] relative">
        <div className="sm:grid grid-cols-5  gap-[10rem] 3xl:gap-[10rem] 2xl:gap-[6rem]  md:pl-[3%] md:gap-[5rem] pl-[2rem] xl:pl-[3%] sm:gap-[3rem]  pt-[3rem] pb-[1rem] hidden ">
          <div className="col-span-2">
            <div
              className=" 2xl:pl-[4rem]  relative"
              data-aos="fade-up-right"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <img src={journey} alt="about"   className=" z-0 w-full max-w-[650px] object-cover" />
              <img
                src={header_moon}
                className="absolute right-[-2rem] bottom-[-1%] 2xl:bottom-[63%] xl:bottom-[-2%] 3xl:bottom-[-7%]  md:w-[40%] lg:bottom-[65%] 2xl:right-[-8%] xl:right-[-13%] 3xl:right-[-20%] lg:right-[-8%]  md:bottom-[72%] sm:bottom-[45%] md:right-[-1rem] sm:right-[-1rem] w-[30%]"
              />
            </div>
          </div>
          <div
            className="col-span-3 w-[90%]"
            data-aos="fade-up-left"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <h4
              className={`${
                theme === "dark" ? " text-white" : "text-[#0444AC]"
              }  xl:text-3xl lg:text-xl md:text-lg sm:text-xl font-semibold pb-[2rem]`}
            >
              Our Journey
            </h4>
            <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-3xl  xl:text-4xl lg:text-3xl  sm:text-2xl lg:leading-tight xl:leading-tight  2xl:leading-snug md:text-2xl  leading-tight mt-0 pb-[2rem]">
              Growing into a Dynamic <br />
              IT Services Leader
            </h3>

            <div>
              <ul
                className=" xl:pr-0 2xl:pb-[4rem] p-[1rem]  "
                data-aos="fade-down-right"
                data-aos-duration="500"
                data-aos-delay="400"
              >
                {list.map((item) => (
                  <li className="flex gap-[2rem] mb-[2rem] " key={item.id}>
                    <img
                      src={arrow}
                      className="xl:w-10 xl:h-10 lg:w-7 lg:h-7 sm:w-6 sm:h-6 mt-2"
                    />
                    <div>
                      <p
                        className={` ${
                          theme === "dark"
                            ? " text-[#5FC1FF]"
                            : "text-[#0444AC]"
                        } font-semibold text-3xl  2xl:text-2xl  content-line-spacing 3xl:text-3xl xl:text-xl md:text-base  sm:text-base leading-relaxed`}
                      >
                        {item.name}{" "}
                        <span
                          className={`${
                            theme === "dark" ? " text-white" : "text-black"
                          } text-2xl  2xl:text-xl 3xl:text-2xl  xl:text-xl md:text-base sm:text-sm  font-normal`}
                        >
                          {item.description}
                        </span>
                      </p>{" "}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="p-[2rem] md:hidden">
        <div className="">
          <h4
            className={`${
              theme === "dark" ? " text-white" : "text-[#0444AC]"
            } text-xl font-semibold pb-[2rem]`}
          >
            Our Journey
          </h4>
          <h3 class="bg-clip-text text-transparent font-poppins bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-semibold text-3xl leading-tight mt-0 pb-[2rem]">
            Growing into a Dynamic IT Services Leader
          </h3>
          <div
            className=" "
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <img src={journey} alt="about" className=" " />
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <ul className="mt-[3rem] ">
              {list.map((item, i) => (
                <li className="flex gap-3 mb-[2rem] ">
                  <img src={arrow} className="w-6 h-6 md:mt-2" />
                  <div>
                    <span className="text-[#5FC1FF] font-semibold text-lg ">
                      {item.name}
                    </span>{" "}
                    <span
                      className={`${
                        theme === "dark" ? " text-white" : "text-black"
                      } text-base`}
                    >
                      {item.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* for desktop */}
      <img src={line} className="mt-[0rem] hidden" />

      <div className="relative xl:hidden my-[1rem]">
        <img src={line} className="mt-[0rem] relative z-0" />
        <img
          src={header_moon}
          className="absolute md:w-[10%] w-[25%] right-[2rem] top-[-3rem] z-10"
        />
      </div>
    </div>
  );
};

export default Journey;
