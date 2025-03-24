import React,{useState,useEffect} from "react";
import about from "../assets/Aboutus/about.png";
import arrow from "../assets/Home/arrow.png";
import { FaChevronRight } from "react-icons/fa";
import line from "../assets/bar/line.png";
import header_moon from "../assets/Home/header_moon.png";
import { Link } from "react-router-dom";
const Aboutus = ({ theme }) => {
  const [isAbout, setIsAbout] = useState(false);
  const list = [
    {
      id: 1,
      name: "Innovative Partnerships:",
      description:
        "Dedicated to connecting innovative technology with the limitless potential of businesses and people.",
    },
    {
      id: 2,
      name: "Endless Possibilities: ",
      description:
        "Guided by our tagline, “Smart Innovation Meets Infinity,” we strive for excellence in every endeavor.",
    },
    {
      id: 3,
      name: "Cutting-Edge Solutions:",
      description:
        "From cutting-edge software development to strategic IT consulting, we provide tailored solutions that address unique business needs.",
    },
  ];
  useEffect(() => {
    const pathname = window.location.pathname;
 
    if (pathname === '/aboutus') {
      setIsAbout(true);
      
    } else if (pathname === '/') {
      
      setIsAbout(false);
    }
  }, []);

  return (
    <div className={`${isAbout ? "pt-[10rem]":"p-0"}`}>
      <div className="md:grid grid-cols-5 gap-[10rem] lg:gap-[4rem] xl:gap-[10rem]  md:pl-[3%] md:gap-[5rem] pl-[2rem] xl:pl-[3%] sm:gap-[3rem]  py-[5rem] hidden">
        <div
          className="relative col-span-2 pl-[6%]"
          data-aos="fade-down-right"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          <img
            src={about}
            alt="about"
            className="w-full max-w-[600px] object-cover"
          />
          <img
            src={header_moon}
            className="absolute right-[-2rem] bottom-[-1%]  xl:bottom-[32%] 3xl:bottom-[-1%]  md:w-[40%] 2xl:bottom-[0%] 2xl:right-[-8%] xl:right-[-13%] 3xl:right-[-10%] lg:right-[-8%] lg:bottom-[20%] md:bottom-[50%] sm:bottom-[45%] md:right-[-1rem] sm:right-[-1rem] w-[30%]"
          />
        </div>
        <div className="col-span-3 w-[90%]"  data-aos="fade-down-left"
          data-aos-duration="500"
          data-aos-delay="400">
          <h4
            className={`${
              theme === "dark" ? " text-white" : "text-[#0444AC]"
            }  xl:text-3xl  lg:text-xl md:text-lg sm:text-xl font-semibold pb-[2rem]`}
          >
            About LunarEdge
          </h4>
          <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-3xl  xl:text-4xl lg:text-3xl sm:text-2xl lg:leading-tight xl:leading-tight md:text-2xl 2xl:leading-snug 3xl:leading-tight  leading-tight mt-0 pb-[2rem]">
            Empowering Businesses
            <br /> with Smart Solutions
          </h3>

          <div>
            <ul className=" pb-[1rem] pt-[1rem]" data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="400">
              {list.map((item, i) => (
                <li className="flex gap-4 mb-[2rem] " key={item.id}>
                  <img
                    src={arrow}
                    className="xl:w-10 xl:h-10 lg:w-7 lg:h-7 sm:w-6 sm:h-6 mt-2 "
                  />
                  <div>
                    <p
                      className={` ${
                        theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                      } font-semibold text-3xl  2xl:text-2xl content-line-spacing 3xl:text-3xl xl:text-xl md:text-base  sm:text-base leading-relaxed`}
                    >
                      {item.name}{" "}
                      <span
                        className={`${
                          theme === "dark" ? " text-white" : "text-black"
                        } text-2xl 2xl:text-xl 3xl:text-2xl xl:text-lg md:text-base sm:text-sm  font-normal`}
                      >
                        {item.description}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-[#0444AC] text-white rounded-md p-[1.5rem] text-center flex  max-w-[350px] w-full hover:bg-[#FF297F] mt-[1rem] cursor-pointer transition-all duration-300">
              {/* w-[70%] xl:w-[40%] 3xl:w-[28%] 2xl:w-[35%]  lg:w-[50%] md:w-[55%] sm:w-[60%] */}
              <Link to="/aboutus" className="lg:text-lg xl:text-base 3xl:text-2xl text-sm inline">
                Know more About us{" "}
              </Link>
              <FaChevronRight className="2xl:text-sm text-xs mt-2 ml-2 " />
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className="px-[2rem] md:hidden pt-[2rem] ">
        <div className="">
          <h4
            className={`${
              theme === "dark" ? "text-white !important" : "text-[#0444AC]"
            }font-semibold text-xl  pb-[2rem]`}
          >
            About LunarEdge
          </h4>
          <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold text-3xl leading-tight mt-0 pb-[2rem]">
            Empowering Businesses
            <br /> with Smart Solutions
          </h3>
          <div className="  relative  "  data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="300">
            <img src={about} alt="about" className=" z-0 " />
            <img
              src={header_moon}
              className="absolute    w-[30%] right-[-1rem] z-100 bottom-[-1rem]"
            />
          </div>
          <div  >
            <ul className=" pb-[1rem] pt-[3rem]" data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="300">
              {list.map((item, i) => (
                <li className="flex gap-4 mb-[2rem] " key={item.id}>
                  <img src={arrow} className="w-6 h-6 mt-2 " />
                  <div>
                    <p
                      className={` ${
                        theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                      } font-semibold text-lg  leading-relaxed`}
                    >
                      {item.name}{" "}
                      <span
                        className={`${
                          theme === "dark" ? " text-white" : "text-[#0444AC]"
                        } text-base font-normal`}
                      >
                        {item.description}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-[#0444AC] text-white rounded-md p-[0.9rem] flex w-[70%]  mx-auto hover:bg-[#FF297F] cursor-pointer">
              <button className="text-base">Know more About us </button>
              <FaChevronRight className="2xl:text-sm text-xs mt-2 ml-2 " />
            </div>
          </div>
        </div>
      </div>
      <img src={line} className="mt-[3rem] md:mt-[0rem]" />
    </div>
  );
};

export default Aboutus;
