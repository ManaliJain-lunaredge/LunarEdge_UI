import React from "react";
import process from "../assets/Process/process.png";
import header_moon from "../assets/Home/header_moon.png";
import line from "../assets/bar/line.png";
import arrow from "../assets/Home/arrow.png";

const Process = ({ theme }) => {
  const list = [
    {
      id: 1,
      name: "Understanding Your Vision:",
      description:
        "We analyze your goals and requirements to create a custom plan.",
    },
    {
      id: 2,
      name: "Design & Development:",
      description:
        "Crafting intuitive designs and robust solutions tailored to your needs.",
    },
    {
      id: 3,
      name: "Launch & Support:",
      description:
        "Ensuring a smooth launch with ongoing support for lasting success.",
    },
  ];
  return (
    <div>
      <div className=" block 3xl:pt-[8rem] md:pt-[8rem] 3xl:pb-[2.5rem] md:pl-[2rem]">
        {/* desktop view */}
        <div className="md:grid grid-cols-5 3xl:gap-[10rem] 2xl:gap-[8rem] md:gap-[5rem] sm:gap-[3rem] pl-[2rem] hidden ">
          <div
            className="col-span-2"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className=" 2xl:pl-[4rem]  relative">
              <img src={process} alt="process" className=" w-full z-0" />
              <img
                src={header_moon}
                className="absolute 2xl:right-[-4rem] md:right-[-2rem] lg:top-[-3rem] md:top-[-1rem] 3xl:w-[30%] lg:w-[35%] md:w-[40%] z-100"
              />
            </div>
          </div>
          <div
            className="col-span-3 w-[90%]"
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <h4
              className={`${
                theme === "dark" ? " text-white" : "text-[#0444AC]"
              } xl:text-3xl lg:text-xl md:text-lg sm:text-xl font-semibold pb-[2rem]`}
            >
              Our Process
            </h4>
            <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-3xl 2xl:leading-snug  xl:text-4xl lg:text-3xl sm:text-2xl lg:leading-tight xl:leading-tight md:text-2xl  leading-tight mt-0 pb-[2rem]">
              How We Bring Your
              <br /> Vision to Life
            </h3>

            <div>
              <ul className=" xl:pr-0 2xl:pb-[4rem] p-[1rem]  " data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="400">
                {list.map((item, i) => (
                  <li className="flex gap-[2rem] mb-[2rem] " key={item.id}>
                    <p
                      className="text-white md:w-20 md:h-8 2xl:w-14 xl:w-14 xl:h-10 lg:w-14 lg:h-8 sm:w-16 sm:h-8 rounded-full flex p-1 justify-center items-center text-2xl  md:text-xl sm:text-base font-semibold"
                      style={{
                        background:
                          "linear-gradient(135deg, #FF297F 25%, #9E60C4 45%, #4B8FFF 80%)",
                      }}
                    >
                      {item.id}
                    </p>
                    <div>
                      <p
                        className={` ${
                          theme === "dark"
                            ? " text-[#5FC1FF]"
                            : "text-[#0444AC]"
                        } font-semibold text-3xl  2xl:text-2xl 3xl:text-3xl xl:text-xl md:text-base  sm:text-base leading-relaxed`}
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
        {/* mobile view */}
        <div className="px-[2rem] pt-[4rem] md:hidden ">
          <div className="">
            <h4 className={`${
                theme === "dark" ? " text-white" : "text-[#0444AC]"
              } font-semibold text-xl  pb-[2rem]`}> Our Process</h4>
            <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold text-3xl leading-tight mt-0 pb-[2rem]">
              How We Bring Your
              <br /> Vision to Life
            </h3>
            <div
              className="  relative  "
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              <img src={process} alt="about" className=" z-0 " />
              <img
                src={header_moon}
                className="absolute    w-[30%] right-[-1rem] z-100 bottom-[-1rem]"
              />
            </div>
            <div>
              <ul
                className=" pb-[1rem] pt-[3rem]"
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                {list.map((item, i) => (
                  <li className="flex gap-4 mb-[2rem] " key={item.id}>
                    <p
                      className="text-white md:w-20 md:h-12  sm:w-16 sm:h-8 w-16 h-8 rounded-full flex p-1 justify-center items-center text-xl  md:text-xl sm:text-base font-semibold"
                      style={{
                        background:
                          "linear-gradient(135deg, #FF297F 25%, #9E60C4 45%, #4B8FFF 80%)",
                      }}
                    >
                      {item.id}
                    </p>
                    <div>
                      <p
                        className={`${
                          theme === "dark"
                            ? " text-[#5FC1FF]"
                            : "text-[#0444AC]"
                        } font-semibold text-lg  leading-relaxed`}
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
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src={line}
          className="mt-[3rem] 2xl:mb-[4rem] lg:mt-[5rem] 3xl:mt-0 relative z-0"
        />
        {/* <img
          src={header_moon}
          className="absolute w-[15%] 2xl:w-[8%] right-[15rem] top-[-2rem] md:top-[-3rem] lg:top-[-4rem]  z-10"


          //left-[3rem] top-[-2rem] 3xl:right-[25rem] 3xl:top-[-5rem] md:left-[5rem] md:top-[-3rem]  xl:top-[-5rem] lg:top-[-4rem] 2xl:right-[10rem] 2xl:top-[-4rem]
        /> */}
      </div>
    </div>
  );
};

export default Process;
