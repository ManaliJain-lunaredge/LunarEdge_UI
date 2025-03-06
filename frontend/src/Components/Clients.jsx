import React, { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import client from "../assets/Client/client.png";
import { FaStar } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import line from "../assets/bar/line.png";
import header_moon from "../assets/Home/header_moon.png";

const Clients = ({ theme }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const list = [
    {
      id: 1,
      name: "Shubham kumar",
      img: client,
      description:
        "Lunaredge transformed our outdated website into a modern, responsive, and user-friendly platform. Their team was professional.",
      rate: 3.5,
    },
    {
      id: 2,
      name: "Shubham kumar",
      img: client,
      description:
        "LunarEdge transformed our brand with stunning designs and a user-friendly website. Their creativity is unmatched!",
      rate: 3.5,
    },
    {
      id: 3,
      name: "James Anderson",
      img: client,
      description:
        "The custom CRM from LunarEdge streamlined our operations. Their expertise and timely delivery are impressive!",
      rate: 3.5,
    },
    {
      id: 4,
      name: "Shubham kumar",
      img: client,
      description:
        "Lunaredge transformed our outdated website into a modern, responsive, and user-friendly platform. Their team was professional.",
      rate: 3.5,
    },
    {
      id: 5,
      name: "Shubham kumar",
      img: client,
      description:
        "LunarEdge transformed our brand with stunning designs and a user-friendly website. Their creativity is unmatched!",
      rate: 3.5,
    },
  ];
  return (
    <div data-aos="zoom-up-right" data-aos-duration="500" data-aos-delay="150">
      <div className="2xl:px-[8rem] md:p-[3rem] p-[2rem] py-[5rem] relative w-full h-full md:mb-[5rem]">
        <h4 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold mt-0 pb-[2rem] text-3xl 2xl:text-5xl  xl:text-4xl lg:text-3xl md:text-2xl lg:leading-tight xl:leading-tight">
          Clients Testimonials
        </h4>

        <h3
          className={`${
            theme === "dark" ? " text-white" : "text-black"
          } text-xl leading-tight mt-0 pb-[2rem] xl:text-2xl lg:text-xl md:text-lg  font-poppins `}
        >
          Discover How We've Made a Difference – Real Stories from Our Valued
          Clients
        </h3>
        <div className="md:flex hidden gap-[2rem] absolute xl:top-[5rem] lg:top-[3rem] top-[30%] sm:top-[25%] 3xl:right-[5rem] 2xl:right-[10rem] md:right-[5rem]   ">
          <div
            className={`${
              theme === "dark"
                ? "bg-white text-black"
                : "text-white bg-[#AABFE6] border-4 border-[#0444AC]"
            } 2xl:w-[4rem] 2xl:h-[4rem] w-[3rem] h-[3rem]  rounded-full text-black p-[1rem]  flex justify-center items-center cursor-pointer`}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaAngleLeft className="text-4xl" />
          </div>
          <div
            className={`${
              theme === "dark"
                ? "bg-white text-black"
                : "text-white bg-[#AABFE6] border-4 border-[#0444AC]"
            } 2xl:w-[4rem] 2xl:h-[4rem] w-[3rem] h-[3rem]  rounded-full text-black p-[1rem]  flex justify-center items-center cursor-pointer`}
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaAngleRight className="text-4xl" />
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="150"
        >
          <Slider {...settings} ref={sliderRef}>
            {list.map((item) => (
              <div
                key={item.id}
                className="xl:mt-[7rem] lg:mt-[3rem]  md:mt-[7rem] mb-[2rem]"
              >
                <div className="font-poppins pl-[0.1rem] sm:pl-[0.1rem] ">
                  <div
                    className={`${
                      theme === "dark"
                        ? " bg-[#E8E8E8] dark:hover:bg-white dark:cursor-pointer"
                        : "bg-white hover:bg-[#e8e8e8] cursor-pointer"
                    }  3xl:w-[500px] 2xl:w-[400px] 2xl:h-[500px] 3xl:h-[630px] w-[98%] xl:w-[90%] xl:h-[500px]  lg:h-[400px] h-[450px] rounded-lg flex flex-col justify-center`}
                  >
                    <img
                      src={item.img}
                      className="3xl:w-[50%] md:w-[40%] w-[50%] mx-auto "
                    />
                    <div className="flex justify-between 2xl:p-[2rem] p-[1rem] mt-[1rem]">
                      <div className="  text-[#4B8FFE] text-xl xl:text-xl lg:text-2xl md:text-xl 2xl:text-2xl sm:text-base  leading-relaxed font-semibold font-poppins ">
                        {item.name}
                      </div>
                      <div className="flex text-[#FA2B82] gap-[1rem] 2xl:text-2xl  xl:text-xl text-base ">
                        <FaStar className="text-[#FA2B82]" />
                        <p className="font-bold">{item.rate}</p>
                      </div>
                    </div>
                    <div className=" 2xl:p-[2rem] p-[1rem]   text-base  xl:text-2xl 2xl:text-xl 3xl:text-2xl lg:text-base md:text-base sm:text-sm ">
                      "{item.description}"
                    </div>{" "}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="relative">
        {/* <img src={line} className="mt-[0rem]  relative z-0" /> */}
        {theme === "light" && (
          <img src={line} className="mt-[0rem] relative z-0" />
        )}
        <img
          src={header_moon}
          className="absolute md:w-[8%] w-[15%] top-[-2rem] 2xl:left-[25rem] 2xl:top-[-4rem] md:left-[20rem] right-[5rem] md:top-[-2rem] lg:top-[-3rem] z-100"
        />
      </div>
    </div>
  );
};

export default Clients;
