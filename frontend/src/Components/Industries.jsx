import React, { useRef, useEffect, useState } from "react";
import img1 from "../assets/Industries/img1.png";
import img2 from "../assets/Industries/img2.png";
import img3 from "../assets/Industries/img3.png";
import img4 from "../assets/Industries/img4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import technology from "../assets/Technology/technology.png";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import line from "../assets/bar/line.png";

const Industries = ({ theme }) => {
  const sliderRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      name: "Healthcare",
      img: img1,
      description:
        "We provide innovative IT solutions to streamline healthcare operations, enhance patient care, and improve data management for healthcare providers.",
    },
    {
      id: 2,
      name: "Education",
      img: img2,
      description:
        "Our technology-driven solutions empower educational institutions with digital tools that enhance learning experiences, optimize administration, and support student success.",
    },
    {
      id: 3,
      name: "Real Estate",
      img: img3,
      description:
        "We deliver cutting-edge IT solutions for the real estate sector, helping businesses manage properties efficiently, improve customer engagement, and drive sales growth.",
    },
    {
      id: 4,
      name: "E-commerce",
      img: img4,
      description:
        "We offer robust IT solutions tailored for e-commerce businesses, optimizing online store performance, streamlining transactions, and enhancing customer experiences for sustained growth.",
    },
  ];
  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  return (
    <div >
      <div
        className="w-full h-full"
        style={{
          backgroundColor: isDarkMode ? "transparent" : "#F4F5FF",
          backgroundImage: isDarkMode ? `url(${technology})` : "none",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="2xl:px-[8rem]  md:p-[3rem] p-[2rem] w-full h-full py-[5rem] relative" data-aos="zoom-out"
    data-aos-duration="500"
    data-aos-delay="1000">
          <h4
            className={`${
              theme === "dark" ? " text-white" : "text-[#0444AC]"
            } xl:text-3xl lg:text-xl md:text-lg sm:text-xl text-xl  font-semibold pb-[2rem] lg:pt-[5rem]`}
          >
            Industries we serve
          </h4>
          <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-4xl xl:text-4xl lg:text-3xl sm:text-2xl lg:leading-tight text-3xl xl:leading-tight md:text-2xl  leading-tight mt-0 pb-[2rem]">
            Driving Innovation Across Diverse Industries
          </h3>
          <div className="md:flex hidden 3xl:gap-[2rem] 2xl:gap-[1rem] absolute 2xl:top-[7rem] top-[25%] sm:top-[5%] 3xl:right-[5rem] 2xl:right-[10rem] md:right-[5rem] md:gap-[2rem]">
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
          <Slider {...settings} ref={sliderRef}>
            {list.map((item) => (
              <div
                key={item.id}
                className="sm:mt-[3rem] mt-[6rem] mb-[2rem] "
              >
                <div className="3xl:w-[10rem] 3xl:h-[10rem] 2xl:w-[8rem] 2xl:h-[8rem] lg:w-[5rem] lg:h-[5rem] md:w-[5rem] md:h-[5rem] md:p-[1rem]  w-[5rem] h-[5rem] p-[1rem] flex justify-center rounded-full text-center xl:p-[2rem] lg:p-[1rem]  bg-[#e8e8e8]  border-2 border-white  mx-auto">
                  <img src={item.img} />
                </div>
                <div className="w-[0.1rem] h-[5rem] bg-[#e8e8e8] mx-auto"></div>
                <div className="font-poppins  text-center  cursor-pointer">
                  <div className="">
                    <div className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] 3xl:w-[398px] 2xl:w-[300px] lg:w-[95%] md:w-[90%] w-[95%] sm:w-[98%] text-center p-[1rem] text-white xl:text-4xl text-3xl lg:text-2xl 2xl:text-2xl md:text-xl sm:text-2xl  font-medium font-poppins rounded-t-md">
                      {item.name}
                    </div>
                    <div className="bg-white bg-opacity-80 p-[1rem] rounded-b-md   3xl:w-[398px] 2xl:w-[300px]  w-[95%] h-[300px]  sm:w-[98%] md:w-[90%] lg:w-[95%] 3xl:h-[400px] 2xl:h-[300px] xl:h-[400px] lg:h-[330px] md:h-[350px]   xl:text-2xl 2xl:text-xl 3xl:text-2xl lg:text-base md:text-base sm:text-base text-base  flex justify-center items-center">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="relative">
        <img src={line} className="mt-[0rem] relative z-0" />
        {/* <img
                src={header_moon}
                className="absolute w-[10%] left-[25rem] top-[-4rem] z-10"
              /> */}
      </div>
    </div>
  );
};

export default Industries;
