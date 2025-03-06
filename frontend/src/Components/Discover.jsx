import React from "react";
import moon_image from "../assets/Other/moon_image.png";
import line from "../assets/bar/line.png";
import arrow from "../assets/Home/arrow.png";
import header_moon from "../assets/Home/header_moon.png";
const Discover = ({ theme }) => {
  return (
    <div className="">
      {/* desktop view */}
      <div className="md:grid grid-cols-4 xl:gap-[3rem] py-[5rem] hidden">
        <div className="col-span-2  "  data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="600">
          <div className="xl:ml-[6rem] ml-[4rem] ">
            <h4
              className={`${
                theme === "dark" ? " text-white" : "text-[#0444AC]"
              }  xl:text-3xl lg:text-xl md:text-lg sm:text-xl font-semibold pb-[2rem]`}
            >
              Discover LunarEdge
            </h4>
            <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-3xl  xl:text-4xl lg:text-3xl sm:text-2xl lg:leading-tight xl:leading-tight md:text-2xl  leading-tight mt-0 pb-[2rem]">
              Innovative IT Solutions for
              <br /> Future-Ready Businesses
            </h3>
          </div>
          <ul className="text-lg  xl:ml-[6rem] ml-[4rem] 3xl:pt-[4rem] 2xl:pt-[1rem]  lg:pt-[1rem]" data-aos="fade-down-left"
          data-aos-duration="500"
          data-aos-delay="400">
            <li className="mb-[2rem] flex gap-[2rem] ">
              <img
                src={arrow}
                className="xl:w-10 xl:h-10 lg:w-7 lg:h-7 sm:w-6 sm:h-6 mt-2 "
              />
              <p
                className={`${
                  theme === "dark" ? " text-white" : "text-black"
                } text-2xl  2xl:text-xl 3xl:text-2xl xl:text-xl md:text-base sm:text-sm  font-normal`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r mr-2 from-[#FF297F] to-[#4B8FFF]  font-semibold text-3xl 2xl:text-xl 3xl:text-3xl  xl:text-2xl md:text-base sm:text-base leading-relaxed">
                  Precision in Digital Solutions: 
                </span>
                LunarEdge excels at creating seamless digital experiences that
                balance hidden complexities with simple, intuitive designs,
                ensuring maximum usability.
              </p>
            </li>
            <li className="mb-[2rem] flex gap-[2rem]">
              <img
                src={arrow}
                className="xl:w-10 xl:h-10 lg:w-7 lg:h-7 sm:w-6 sm:h-6 mt-2 "
              />
              <p
                className={`${
                  theme === "dark" ? " text-white" : "text-black"
                } text-2xl  2xl:text-xl 3xl:text-2xl xl:text-xl md:text-base sm:text-sm  font-normal`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r mr-2 from-[#FF297F] to-[#4B8FFF]  font-semibold text-3xl 2xl:text-xl 3xl:text-3xl  xl:text-2xl md:text-base sm:text-base leading-relaxed">
                  Transformative IT Services:
                </span>
                Our services blend creativity and technology to deliver modern
                business solutions that drive efficiency, scalability, and
                growth.
              </p>
            </li>
            <li className="mb-[2rem] flex gap-[2rem]">
              <img
                src={arrow}
                className="xl:w-10 xl:h-10 lg:w-7 lg:h-7 sm:w-6 sm:h-6 mt-2 "
              />
              <p
                className={`${
                  theme === "dark" ? " text-white" : "text-black"
                } text-2xl  2xl:text-xl 3xl:text-2xl xl:text-xl md:text-base sm:text-sm  font-normal`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r mr-2 from-[#FF297F] to-[#4B8FFF]  font-semibold text-3xl 2xl:text-xl 3xl:text-3xl  xl:text-2xl md:text-base sm:text-base leading-relaxed">
                  Smooth Data Flow:  
                </span>
                We focus on enabling efficient communication across systems by
                building robust digital architectures tailored for scalability
                and seamless integration.
              </p>
            </li>
            <li className="flex gap-[2rem]">
              <img
                src={arrow}
                className="xl:w-10 xl:h-10 lg:w-7 lg:h-7 sm:w-6 sm:h-6 mt-2 "
              />
              <p
                className={`${
                  theme === "dark" ? " text-white" : "text-black"
                } text-2xl  2xl:text-xl 3xl:text-2xl xl:text-xl md:text-base sm:text-sm  font-normal`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r mr-2 from-[#FF297F] to-[#4B8FFF]  font-semibold text-3xl 2xl:text-xl 3xl:text-3xl  xl:text-2xl md:text-base sm:text-base leading-relaxed">
                  360° Business Acceleration:
                </span>
                Our innovative solutions empower businesses to uncover growth
                opportunities and achieve sustainable success.
              </p>
            </li>
          </ul>
        </div>
        <div
          className="col-span-2"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="600">
          <img src={moon_image} alt="moon" className="md:w-[90%]  " />
        </div>
      </div>
      <img src={line} className="mt-[0rem] relative z-0" />

      {/* mobile View */}
      <div className="md:hidden p-[2rem] ">
        <div className=" mb-[2rem]"  data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="600">
          <img src={moon_image} alt="moon" className=" " />
        </div>
        <div className="  "  data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="600">
          <div className=" ">
            <h4 className={`${
                theme === "dark" ? " text-white" : "text-[#0444AC]"
              } font-semibold text-xl pb-[2rem]`}>Discover LunarEdge</h4>
            <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold text-3xl leading-tight mt-0 pb-[0rem]">
              Innovative IT Solutions for
              <br /> Future-Ready Businesses
            </h3>
          </div>
          <ul className="text-lg   pt-[4rem]  ">
            <li className="mb-[2rem] flex gap-4 ">
              <img src={arrow} className="w-6 h-6 " />
              <p
                className={`${
                  theme === "dark" ? " text-white" : "text-black"
                } text-base 3xl:text-2xl leading-loose`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-semibold mr-1 text-3xl 2xl:text-3xl xl:text-xl md:text-base  sm:text-base">
                  Precision in Digital Solutions: 
                </span>
                LunarEdge excels at creating seamless digital experiences that
                balance hidden complexities with simple, intuitive designs,
                ensuring maximum usability.
              </p>
            </li>
            <li className="mb-[2rem] flex gap-4">
              <img src={arrow} className="w-6 h-6 " />
              <p
                className={`${
                  theme === "dark" ? " text-white" : "text-black"
                } text-base leading-loose`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-semibold mr-1 text-3xl 2xl:text-3xl xl:text-xl md:text-base  sm:text-base">
                  Transformative IT Services:
                </span>
                Our services blend creativity and technology to deliver modern
                business solutions that drive efficiency, scalability, and
                growth.
              </p>
            </li>
            <li className="mb-[2rem] flex gap-4">
              <img src={arrow} className="w-6 h-6 " />
              <p
                className={`${
                  theme === "dark" ? " text-white" : "text-black"
                } text-base leading-loose`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-semibold mr-1 text-3xl 2xl:text-3xl xl:text-xl md:text-base  sm:text-base">
                  Smooth Data Flow: 
                </span>
                We focus on enabling efficient communication across systems by
                building robust digital architectures tailored for scalability
                and seamless integration.
              </p>
            </li>
            <li className="flex gap-4">
              <img src={arrow} className="w-6 h-6 " />
              <p
                className={`${
                  theme === "dark" ? " text-white" : "text-black"
                } text-base leading-loose`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-semibold mr-1 text-3xl 2xl:text-3xl xl:text-xl md:text-base  sm:text-base">
                  360° Business Acceleration:
                </span>
                Our innovative solutions empower businesses to uncover growth
                opportunities and achieve sustainable success.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative md:hidden block my-[1rem] ">
        <img src={line} className="mt-[0rem] relative z-0" />
        <img
          src={header_moon}
          className="absolute md:w-[7%] w-[16%] left-[5rem] md:top-[-4rem] top-[-2rem] z-10"
        />
      </div>
    </div>
  );
};

export default Discover;
