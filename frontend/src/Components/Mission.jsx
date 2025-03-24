import React from "react";
import line from "../assets/bar/line.png";
import header_moon from "../assets/Home/header_moon.png";

const Mission = ({ theme }) => {
  const list1 = [
    {
      id: 1,
      name: "Transforming Potential into Success",
      description:
        "At LunarEdge, we recognize the unique strengths of businesses and deliver innovative, tailored solutions that drive measurable success, ensuring lasting impact and growth.",
    },
    {
      id: 2,
      name: "Fostering Sustainable Growth",
      description:
        "By using strategic planning and advanced technologies, we create opportunities for long-term growth across industries, empowering businesses to thrive in an ever-evolving market.",
    },
  ];
  const list2 = [
    {
      id: 3,
      name: "Forward-Thinking Solutions",
      description:
        "We focus on developing smart, forward-thinking solutions to address challenges, paving the way for business excellence and fostering competitive advantage.",
    },
    {
      id: 4,
      name: "Driving Excellence with Technology",
      description:
        "Through the integration of cutting-edge tools and methodologies, we enable businesses to achieve efficiency, scalability, and leadership in their fields.",
    },
  ];
  return (
    <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="400">
      <div className="2xl:pt-[10rem] pt-[4rem] pb-[4rem] 2xl:px-[8rem] xl:px-[3rem] p-[2rem]">
        <h4
          className={`${
            theme === "dark" ? " text-white" : "text-[#0444AC]"
          }  2xl:text-3xl lg:text-xl md:text-lg sm:text-xl font-semibold pb-[2rem]`}
        >
          Driving Success with a Clear Mission
        </h4>
        <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-4xl text-3xl xl:text-4xl lg:text-3xl sm:text-2xl lg:leading-tight xl:leading-tight md:text-2xl  leading-tight mt-0 pb-[2rem]">
          A Mission to Transform Potential into Success
        </h3>

        {/* Combine list1 and list2 in one container to align properly */}
        <div className="md:grid grid-cols-2 gap-[3rem] 2xl:mt-[3rem] mt-[1.5rem]"  data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="800">
          {[...list1, ...list2].map((item) => (
            <div
              key={item.id}
              className={`${
                theme === "dark" ? " bg-[#e8e8e8]" : "bg-white"
              }  rounded-lg 2xl:p-[2rem] p-[1.5rem] sm:p-[1rem] 2xl:mb-[2rem] md:mb-0 mb-[2rem]`}
            >
              <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent bg-clip-text inline-block text-xl lg:text-2xl 3xl:text-4xl 2xl:text-2xl xl:text-2xl md:text-xl font-semibold text-center pb-[1rem]">
                {item.name}
              </h3>
              <p
                className={`${
                  theme === "dark" ? " text-black" : "text-black"
                } text-base  3xl:text-2xl 2xl:text-xl xl:text-lg md:text-base sm:text-sm   font-normal`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <img src={line} className="md:mt-[5rem] mt-[0rem] relative z-0" />
        <img
          src={header_moon}
          className="absolute md:w-[8%] w-[15%] top-[-2rem] md:right-[5rem] lg:top-[-3rem] md:top-[-2rem] 3xl:top-[-5rem] 2xl:top-[-3rem] right-[3rem] z-10"
          // left-[5rem] top-[-2rem]
          //2xl:w-[10%] left-[3rem] top-[-3rem] 3xl:top-[-6rem] 2xl:right-[10%] md:left-[5%] md:top-[-4rem] xl:top-[-7rem] lg:top-[-6rem] xl:w-[13%] 2xl:top-[-4rem] w-[20%] 3xl:right-[10rem]
        />
      </div>
    </div>
  );
};

export default Mission;
