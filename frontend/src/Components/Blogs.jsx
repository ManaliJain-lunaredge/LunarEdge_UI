import React,{ useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../assets/Blogs/img1.png";
import img2 from "../assets/Blogs/img2.png";
import img3 from "../assets/Blogs/img3.png";
import line from "../assets/bar/line.png";
import header_moon from "../assets/Home/header_moon.png";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const Blogs = ({ theme }) => {
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
      name: "Top Web Development Trends for 2025",
      img: img1,
      description:
        "Stay ahead in the digital game by exploring groundbreaking advancements in web development and design. From AI-driven features to...",
      by: "-Pankaj Kumar",
      date: "3 Dec 2024",
    },
    {
      id: 2,
      name: "Top Digital Marketing Trends in 2025",
      img: img2,
      description:
        "Discover the future of digital marketing with trends like AI-powered personalization, voice search optimization, influencer collaborations... ",
      by: "-Prachi Jain",
      date: "5 Jan 2025",
    },
    {
      id: 3,
      name: "Top Designing Trends in 2025",
      img: img3,
      description:
        "Elevate user experiences with trends like immersive 3D designs, bold typography, and dynamic color palettes. In 2025, design innovation... ",
      by: "-Neha Soni",
      date: "15 Jan 2025",
    },
    {
      id: 1,
      name: "Top Web Development Trends for 2025",
      img: img1,
      description:
        "Stay ahead in the digital game by exploring groundbreaking advancements in web development and design. From AI-driven features to...",
      by: "-Pankaj Kumar",
      date: "3 Dec 2024",
    },
    {
      id: 2,
      name: "Top Digital Marketing Trends in 2025",
      img: img2,
      description:
        "Discover the future of digital marketing with trends like AI-powered personalization, voice search optimization, influencer collaborations... ",
      by: "-Prachi Jain",
      date: "5 Jan 2025",
    },
  ];
  return (
    <div data-aos="fade-down"
    data-aos-duration="500"
    data-aos-delay="150">
      <div className="2xl:px-[8rem] 2xl:py-[5rem] md:p-[3rem] p-[2rem] py-[5rem] relative">
        <h4 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] text-3xl font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-4xl  xl:text-5xl lg:text-3xl sm:text-2xl lg:leading-tight xl:leading-tight md:text-2xl  leading-tight mt-0 pb-[2rem]">
          Blogs and updates
        </h4>

        <h3   className={`${
            theme === "dark" ? " text-white" : "text-black"
          } xl:text-3xl lg:text-xl md:text-lg sm:text-xl  pb-[2rem] `}>
          Dive into Expert Insights, Industry Innovations, and Exciting Updates
          on Our Blog
        </h3>
        <div className="md:flex hidden 3xl:gap-[2rem] 2xl:gap-[1rem] absolute 2xl:top-[3rem] 3xl:top-[5rem] 3xl:right-[7rem] 2xl:right-[10rem] md:right-[5rem] md:gap-[2rem] md:top-[3rem] " >
          <div   className={`${
              theme === "dark" ? "bg-white text-black" : "text-white bg-[#AABFE6] border-4 border-[#0444AC]"
            } 2xl:w-[4rem] 2xl:h-[4rem] w-[3rem] h-[3rem]  rounded-full text-black p-[1rem]  flex justify-center items-center cursor-pointer`}  onClick={() => sliderRef.current.slickPrev()} >
            <FaAngleLeft className="text-4xl" />
          </div>
          <div  className={`${
              theme === "dark" ? "bg-white text-black" : "text-white bg-[#AABFE6] border-4 border-[#0444AC]"
            } 2xl:w-[4rem] 2xl:h-[4rem] w-[3rem] h-[3rem]  rounded-full text-black p-[1rem]  flex justify-center items-center cursor-pointer`} onClick={() => sliderRef.current.slickNext()}>
            <FaAngleRight className="text-4xl" />
          </div>
        </div>
       <div data-aos="zoom-out"
    data-aos-duration="500"
    data-aos-delay="200">
       <Slider {...settings} ref={sliderRef}>
          {list.map((item) => (
            <div key={item.id} className="mt-[3rem] mb-[2rem]">
              <div className="font-poppins  ">
                <div className={`${
                theme === "dark" ? " bg-[#E8E8E8] hover:bg-white cursor-pointer" : "bg-white hover:bg-[#e8e8e8] cursor-pointer "
              } 3xl:w-[500px] 2xl:w-[400px] 2xl:h-[550px] 3xl:h-[630px] md:w-[96%] w-[98%] lg:h-[450px]  md:h-[550px] h-[470px] rounded-lg flex flex-col `}>
                  <img src={item.img} className="p-[1rem]" />
                  <div className="flex justify-between  mt-[1rem] p-[1rem]">
                    <div className="  text-[#4B8FFE] 2xl:text-2xl font-semibold font-poppins ">
                      {item.date}
                    </div>
                    <div className=" text-[#FA2B82] 2xl:text-2xl  ">
                      <p className="font-bold">{item.by}</p>
                    </div>
                  </div>
                  <div className=" p-[1rem]  xl:text-2xl 2xl:text-xl 3xl:text-2xl lg:text-base text-base  ">
                    {item.description}
                    <a
                      href=""
                      className="text-[#166AF1]  cursor-pointer font-medium"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
       </div>
      </div>
      <div className="relative">
        <img src={line} className="mt-[0rem] 2xl:mb-[3rem] relative z-0" />
        <img
          src={header_moon}
          className="absolute md:w-[8%] w-[15%] top-[-2rem] right-[10rem] md:top-[-2rem] 2xl:top-[-4rem] lg:top-[-3rem] z-10"
        />
      </div>
    </div>
  );
};

export default Blogs;
