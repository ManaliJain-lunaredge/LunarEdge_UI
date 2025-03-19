import React, { useRef, useEffect, useState } from "react";
import technology from "../assets/Technology/technology.png";
import img1 from "../assets/Technology/img1.png";
import img2 from "../assets/Technology/img2.png";
import img3 from "../assets/Technology/img3.png";
import img4 from "../assets/Technology/img4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import line from "../assets/bar/line.png";

const Technology = ({ theme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const sliderRef = useRef(null);
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
  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const list = [
    {
      id: 1,
      name: "Figma",
      img: img1,
      description:
        "Our design team uses Figma to create intuitive, user-friendly interfaces in real-time, ensuring seamless collaboration and faster design iterations.",
    },
    {
      id: 2,
      name: "NodeJS",
      img: img2,
      description:
        "NodeJS enables us to build high-performance, scalable applications with efficient server-side solutions and real-time capabilities for dynamic user experiences.",
    },
    {
      id: 3,
      name: "HTML",
      img: img3,
      description:
        "We craft responsive, visually stunning websites using HTML that deliver a seamless and engaging experience across all devices and screen sizes.",
    },
    {
      id: 4,
      name: "CSS",
      img: img4,
      description:
        "With CSS, we design responsive and visually captivating websites that provide an intuitive and consistent user experience on any device.",
    },
  ];
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundColor: isDarkMode ? "transparent" : "#F4F5FF",
        backgroundImage: isDarkMode ? `url(${technology})` : "none",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    
    >
      <div className="2xl:px-[8rem] xl:px-[3rem] md:p-[3rem] p-[2rem] py-[5rem] relative"   data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="150">
        <h4
          className={`${
            theme === "dark" ? " text-white" : "text-[#0444AC]"
          } 2xl:text-3xl lg:text-xl md:tetx-lg sm:text-xl text-xl  font-semibold pb-[2rem]`}
        >
          Our Techs
        </h4>
        <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-4xl  xl:text-4xl lg:text-3xl sm:text-2xl lg:leading-tight text-3xl xl:leading-tight md:text-2xl  leading-tight mt-0 pb-[2rem]">
          The Technologies We Excel At
        </h3>
        <div className="md:flex hidden 2xl:gap-[2rem] gap-[1rem] absolute 2xl:top-[7rem] top-[3rem]  3xl:right-[5rem] 2xl:right-[10rem] right-[3rem]">
          <div
            className={`${
              theme === "dark"
                ? "bg-white text-black"
                : "text-white bg-[#AABFE6] border-4 border-[#0444AC]"
            } 2xl:w-[4rem] 2xl:h-[4rem] w-[3rem] h-[3rem]  rounded-full text-black p-[1rem]  flex justify-center items-center cursor-pointer`}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaAngleLeft className="2xl:text-4xl text-xl" />
          </div>
          <div
            className={`${
              theme === "dark"
                ? "bg-white text-black"
                : "text-white bg-[#AABFE6] border-4 border-[#0444AC]"
            } 2xl:w-[4rem] 2xl:h-[4rem] w-[3rem] h-[3rem]  rounded-full text-black p-[1rem]  flex justify-center items-center cursor-pointer`}
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaAngleRight className="2xl:text-4xl text-xl" />
          </div>
        </div>
  <div data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="150">
  <Slider {...settings} ref={sliderRef}>
          {list.map((item) => (
            <div key={item.id} className="mt-[1.5rem] mb-[2rem] sm:pl-[1rem] ">
              <div className="3xl:w-[10rem] 3xl:h-[10rem] 2xl:w-[8rem] 2xl:h-[8rem] md:w-[5rem] md:h-[5rem] w-[6rem] h-[6rem] p-[1rem]  rounded-full 2xl:p-[2rem] bg-[#e8e8e8]  border-2 border-white mx-auto ">
                <img src={item.img} />
              </div>
              <div className="w-[0.1rem] h-[5rem] bg-[#e8e8e8] mx-auto"></div>
              <div className="font-poppins  text-center  cursor-pointer">
                <div className="text-center rounded-lg">
                  <div className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] 3xl:w-[398px] 2xl:w-[300px]  lg:w-[100%] md:w-[95% ] w-[95%] text-center p-[1rem] text-white xl:text-4xl 2xl:text-2xl 3xl:text-4xl lg:text-2xl font-medium font-poppins rounded-t-md">
                    {item.name}
                  </div>
                  <div className="bg-white bg-opacity-80 p-[1rem] rounded-b-md text-base sm:text-base 3xl:w-[398px] 2xl:w-[300px] lg:w-[100%] 3xl:h-[330px] lg:h-[240px] md:h-[350px] h-[300px] sm:w-[95%]  w-[95%] 3xl:text-2xl flex justify-center items-center">
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

export default Technology;
