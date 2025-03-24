import React from "react";
import Idea from "../assets/values/Idea.png";
import Sustainability from "../assets/values/Sustainability.png";
import Teamwork from "../assets/values/Teamwork.png";
import CriticalThinking from "../assets/values/CriticalThinking.png";
import Handshake from "../assets/values/Handshake.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import line from "../assets/bar/line.png";
import header_moon from "../assets/Home/header_moon.png";

const Values = ({ theme }) => {
  const list = [
    {
      id: 1,
      img: Idea,
      name: "Innovation",
      description:
        "We create forward-thinking digital solutions to solve real business challenges and deliver measurable results.",
    },
    {
      id: 2,
      img: Handshake,
      name: "Integrity",
      description:
        "Our core values are built on trust, transparency, and ethical practices, ensuring reliability in every project.",
    },
    {
      id: 3,
      img: CriticalThinking,
      name: "Excellence",
      description:
        "We go beyond expectations, providing top-notch IT solutions with precision and dedication.",
    },
    {
      id: 4,
      img: Teamwork,
      name: "Collaboration",
      description:
        "We work closely with clients, adopting collaborative approaches to ensure collective success.",
    },
    {
      id: 5,
      img: Sustainability,
      name: "Sustainability",
      description:
        "We embrace sustainable IT practices, benefiting businesses and the environment alike.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="w-full  h-full"
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay="300"
    >
      {/* desktop view */}
      <div className="2xl:block hidden w-[90%] mx-auto mt-[0rem]  pt-[12rem] pb-[2rem] ">
        <ul className="flex justify-around">
          {list.map((item, i) => (
            <div key={item.id} className="p-3 relative w-[20rem] ">
              {/* Image Container */}
              <div className="absolute w-28 h-28 3xl:top-[-15%] 2xl:top-[-9%] left-1/2 transform -translate-x-1/2 flex justify-center items-center  z-10">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-32 h-32 object-contain"
                />
              </div>

              {/* Content Box */}
              <div className="bg-white hover:bg-[#e8e8e8] cursor-pointer shadow-md rounded-md p-6 pt-16 text-center flex flex-col justify-around 3xl:min-h-[15rem] 2xl:min-h-[23rem]">
                <h3 className="text-[#0444AC] text-center font-semibold text-3xl font-poppins ">
                  {item.name}
                </h3>
                <p className="text-[#08162F] text-center  mt-[1rem] font-normal text-xl font-poppins flex justify-center items-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </div>

      {/* mobile View */}
      <div className=" 2xl:hidden  xl:block  pt-[2rem] xl:pt-[6rem] pb-[0.5rem] pl-[1rem] md:p-[2rem] md:pt-[5rem] sm:p-[2rem] pr-[0.5rem]">
        <Slider {...settings}>
          {list.map((item) => (
            <div
              className="pt-[3rem] pb-[1rem] pr-[0.5rem] relative  "
              key={item.id}
            >
              <div className="w-20 h-20 rounded-full   flex justify-center items-center absolute  3xl:top-[-2.7rem] top-[1rem] left-[39%] lg:left-[39%] md:left-[35%]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-[10rem] h-[5rem] mx-auto"
                />
              </div>
              <div className=" bg-white rounded-md p-[0.5rem] pt-[3rem] hover:bg-white cursor-pointer h-[14rem] lg:h-[17rem] md:h-[15rem] h- flex flex-col justify-center">
                <h3 className="text-[#0444AC] text-center font-semibold text-xl xl:text-3xl lg:text-2xl md:text-xl sm:text-base leading-relaxed font-poppins">
                  {item.name}
                </h3>
                <p className="text-[#08162F] text-center mt-[1rem]  text-base  xl:text-xl lg:text-base md:text-base sm:text-sm  font-normal font-poppins flex justify-center items-center ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <img src={line} className="mt-[3rem] md:block hidden" />
      <div className="relative md:hidden mt-[3rem] mb-[1.5rem]">
        <img src={line} className="mt-[0rem] relative z-0" />
        <img
          src={header_moon}
          className="absolute w-[17%] left-[2rem] top-[-2rem] z-10"
        />
      </div>
    </div>
  );
};
export default Values;
