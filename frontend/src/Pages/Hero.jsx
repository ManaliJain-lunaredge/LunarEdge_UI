import React, { useEffect,useState } from "react";
import arrow from "../assets/Home/arrow.png";
import { Link } from "react-router-dom";
import mobile_hero from "../assets/Hero/mobile_hero.png";
import header_moon from "../assets/Home/header_moon.png";
const Hero = () => {
 const [isEdge, setIsEdge] = useState(false);
  const list = [
    {
      id: 1,
      name: "Exceptional Realities",
    },
    {
      id: 2,
      name: "Combining Creativity",
    },
    {
      id: 3,
      name: "Precision and Passion",
    },
  ];
 useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Edg")) {
      setIsEdge(true);
    }
  });
  return (
    <div>
      <div
        className="3xl:pl-[3.5rem] 2xl:pl-[3.5rem] 2xl:pb-[10px] 2xl:p-0 lg:p-[2rem] p-[1rem] md:block hidden"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <h3 class={`md:text-left font-poppins text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF297F] from-[0%] to-[#4B8FFF] to-[38%] 2xl:pt-[15rem] font-semibold 3xl:text-6xl  text-4xl  3xl:pt-[17rem]  mt-[0rem]  leading-tight ${isEdge?"pt-[10rem]":""}`}>
          Smart Innovation
          <br /> Meets <span class="text-[#43ACF8]">INFINITY</span>
        </h3>
        <h4 className="text-[#FFFFFF] 2xl:text-3xl md:text-left text-center text-xl 2xl:mt-[3rem] mt-[1rem]">
          We Transform Innovative Ideas Into Reality
        </h4>
        <div>
          <p className="text-white 2xlcustome-leading   3xl:text-2xl 2xl:text- md:text-base text-xl mt-[3rem] lg:text-base xl:w-[33%] lg:w-[40%]  md:w-[38%]">
            Step into a world where innovation meets possibility. At LunarEdge,
            we craft IT solutions that transform your business dreams into
            digital reality. Experience the magic of technology thoughtfully
            designed for your success.
          </p>
        </div>
        <div className="flex justify-between bg-[#777676]  border border-slate-100 2xl:mb-[3rem] rounded-md xl:w-[40%] lg:w-[60%] md:w-[60%]  w-[100%] p-[0.7rem] text-white 2xl:mt-[4rem] mt-[4rem]">
          <div>
            <input
              type="email"
              className="bg-transparent text-white placeholder:text-white focus:outline-none lg:text-lg md:text-sm 2xl:px-3 px-0 2xl:py-[0.7rem] py-[0.5rem] "
              placeholder="Enter Email Address"
            />
          </div>
          <div className="2xl:mt-[0.9rem] lg:mt-[0.6rem] md:mt-[0.3rem] group">
            <Link
              to="/contact"
              className="text-white bg-gradient-to-l from-[#FF297F] to-[#4B8FFF] rounded-md cursor-pointer lg:text-base md:text-xs p-3 2xl:w-[15rem] w-[7rem] h-[3rem] 2xl:h-[3rem] transition-all duration-300 group-hover:from-[#4B8FFF] group-hover:to-[#4B8FFF]"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
      <div className="block md:hidden p-[1rem]">
        <h3
          class=" font-poppins text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF297F] from-[0%] to-[#4B8FFF] to-[38%] font-semibold 2xl:text-6xl text-3xl  2xl:mt-[3rem] mt-[7rem] leading-tight"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="150"
        >
          Smart Innovation
          <br /> Meets <span class="text-[#43ACF8]">INFINITY</span>
        </h3>
        <h4 className="text-[#FFFFFF]  text-center text-sm 2xl:mt-[3rem] mt-[1rem]">
          We Transform Innovative Ideas Into Reality
        </h4>
        <div>
          <img
            src={mobile_hero}
            className=" "
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="150"
          />
        </div>
        <div className="bg-[#777676] border border-slate-100 rounded-md p-[0.7rem] text-white 2xl:mt-[4rem] mt-[2rem]">
          {/* Input Field */}
          <div className="bg-[#D0D0D063] rounded-md p-2 mb-2">
            <input
              type="email"
              className="bg-transparent text-white placeholder:text-white focus:outline-none text-sm 2xl:px-3 px-0 2xl:py-[0.7rem] py-[0.5rem] w-full"
              placeholder="Enter Email Address"
            />
          </div>

          {/* Button */}
          <div className="mt-1 w-full group">
            <Link
              to="/contact"
              className="block text-white bg-gradient-to-l from-[#FF297F] to-[#4B8FFF] rounded-md cursor-pointer text-sm md:text-xs p-3 text-center transition-all duration-300 group-hover:from-[#4B8FFF] group-hover:to-[#4B8FFF]"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <p className={` text-white pt-[2rem] w-[90%]`}>
              Step into a world where innovation meets possibility. At
              LunarEdge, we craft IT solutions that transform your business
              dreams into digital reality. Experience the magic of technology
              thoughtfully designed for your success.{" "}
            </p>
          </div>
          <div className="col-span-1 flex justify-center flex-col items-center">
            <img
              src={header_moon}
              className=""
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
