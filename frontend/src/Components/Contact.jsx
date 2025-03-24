import React,{useState,useEffect} from "react";
import line from "../assets/bar/line.png";
import header_moon from "../assets/Home/header_moon.png";
import { Link } from "react-router-dom";

const Contact = ({ theme }) => {
  const [isContact, setIsContact] = useState(false);
   useEffect(() => {
      const pathname = window.location.pathname;
   
      if (pathname === '/contact') {
        setIsContact(true);
        
      } else if (pathname === '/') {
        
        setIsContact(false);
      }
    }, []);
  return (
    <div className={`${isContact ? "pt-[10rem]":"p-0"}`}>
      <div className="2xl:px-[8rem] 2xl:py-[5rem] md:p-[3rem] p-[2rem] py-[5rem]">
        <div>
          <div className="lg:grid grid-cols-6  gap-[5rem]">
            <div
              className="col-span-3"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="150"
            >
              <h4
                className={`${
                  theme === "dark" ? " text-white" : "text-[#0444AC]"
                } text-xl font-semibold pb-[2rem]`}
              >
                Contact LunarEdge Today
              </h4>
              <h3 className="bg-gradient-to-r from-[#FF297F] to-[#4B8FFF] font-poppins text-transparent  bg-clip-text inline-block font-semibold 3xl:text-6xl 2xl:text-4xl  xl:text-4xl lg:text-3xl sm:text-2xl lg:leading-tight xl:leading-tight md:text-2xl  leading-tight mt-0 pb-[2rem] text-3xl">
                Let’s Build Something
                <br /> Exceptional Together
              </h3>
              <ul
                className="text-lg   lg:pt-[4rem] 3xl:pt-[3rem]  "
                data-aos="fade-down-left"
                data-aos-duration="500"
                data-aos-delay="400"
              >
                <li className="mb-[2rem]  ">
                  <p
                    className={`${
                      theme === "dark" ? " text-white" : "text-black"
                    } text-base 2xl:text-2xl 3xl:text-2xl  xl:text-xl lg:text-base md:text-base sm:text-sm   font-normal leading-loose`}
                  >
                    <span
                      className={`${
                        theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                      } font-semibold text-3xl  2xl:text-2xl 3xl:text-3xl xl:text-xl md:text-base  sm:text-base leading-relaxed me-1`}
                    >
                      Future-Ready Web Development:
                    </span>
                    Stay ahead with modern IT solutions designed to bring your
                    business vision to life. We specialize in scalable,
                    high-performance digital solutions for companies of all
                    sizes.
                  </p>
                </li>
                <li className="mb-[2rem] flex gap-[2rem]">
                  <p
                    className={`${
                      theme === "dark" ? " text-white" : "text-black"
                    } text-base 2xl:text-2xl 3xl:text-2xl  xl:text-xl lg:text-base md:text-base sm:text-sm   font-normal leading-loose`}
                  >
                    <span
                      className={`${
                        theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                      } font-semibold text-3xl 2xl:text-2xl 3xl:text-3xl xl:text-xl md:text-base  sm:text-base leading-relaxed me-1`}
                    >
                      From UI/UX Excellence to Full-Scale Development:
                    </span>
                    Whether it's a stunning user experience or a powerful
                    software system, we optimize your digital presence to drive
                    engagement, efficiency, and growth.
                  </p>
                </li>
                <li className="mb-[2rem] flex gap-[2rem]">
                  <p
                    className={`${
                      theme === "dark" ? " text-white" : "text-black"
                    } text-base 2xl:text-2xl 3xl:text-2xl  xl:text-xl lg:text-base md:text-base sm:text-sm   font-normal leading-loose`}
                  >
                    <span
                      className={`${
                        theme === "dark" ? " text-[#5FC1FF]" : "text-[#0444AC]"
                      } font-semibold text-3xl  2xl:text-2xl 3xl:text-3xl xl:text-xl md:text-base  sm:text-base leading-relaxed me-1`}
                    >
                      Harnessing Cutting-Edge Strategies:
                    </span>
                    We blend advanced technologies with dedicated support,
                    ensuring your business stays ahead in today’s fast-evolving
                    digital landscape.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="col-span-3"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="150"
            >
              <div
                className={` ${
                  theme === "dark" ? " bg-[#AEAEAE]" : "bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                }  bg-opacity-50 md:p-[2rem] p-[1rem] rounded-lg mt-[3rem]`}
              >
                <form>
                  <div
                    className={`${
                      theme === "dark"
                        ? " bg-[#e8e8e8]"
                        : "bg-white border-2 border-[#F0F0F0]"
                    }   bg-opacity-40 text-white rounded-lg p-[1.3rem] mb-[2rem]`}
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      className={`bg-transparent md:text-base 2xl:text-xl lg:text-base focus:outline-none focus:text-black     ${
                        theme === "dark"
                          ? " dark:placeholder:text-white"
                          : "placeholder:text-[#A3A3A3]"
                      }`}
                    />
                  </div>
                  <div
                    className={`${
                      theme === "dark"
                        ? " bg-[#e8e8e8]"
                        : "bg-white border-2 border-[#F0F0F0]"
                    }   bg-opacity-40 text-white rounded-lg p-[1.3rem] mb-[2rem]`}
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      className={`bg-transparent md:text-base 2xl:text-xl lg:text-base focus:outline-none focus:text-black    ${
                        theme === "dark"
                          ? " dark:placeholder:text-white "
                          : "placeholder:text-[#A3A3A3] "
                      }`}
                    />
                  </div>
                  <div
                    className={`${
                      theme === "dark"
                        ? " bg-[#e8e8e8]"
                        : "bg-white border-2 border-[#F0F0F0]"
                    }   bg-opacity-40 text-white rounded-lg md:text-base text-xs  mb-[2rem]`}
                  >
                    <div className="flex ">
                      <div className="bg-[#CDCDCD] dark:bg-[#AEAEAE] text-white   md:p-[1.3rem] p-[1rem] rounded-l-lg whitespace-nowrap">
                        IND +91
                      </div>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className={`bg-transparent md:text-base 2xl:text-xl lg:text-base text-base ms-2 focus:outline-none focus:text-black   ${
                          theme === "dark"
                            ? " dark:placeholder:text-white"
                            : "placeholder:text-[#A3A3A3]"
                        } `}
                      />
                    </div>
                  </div>
                  <div
                    className={`${
                      theme === "dark"
                        ? " bg-[#e8e8e8]"
                        : "bg-white border-2 border-[#F0F0F0]"
                    } text-white bg-opacity-40 rounded-lg p-[1.3rem] mb-[1rem]`}
                  >
                    <textarea
                      type="text"
                      placeholder="Your Requirements "
                      className={`bg-transparent md:text-base 2xl:text-xl lg:text-base  focus:outline-none focus:text-black      ${
                        theme === "dark"
                          ? " dark:placeholder:text-white "
                          : "placeholder:text-[#A3A3A3] "
                      }`}
                      rows="7"
                    />
                  </div>
                  <div className="bg-[#0444AC] p-[1rem] text-center rounded-lg text-white text-xl font-semibold cursor-pointer hover:bg-[#5FC1FF] hover:text-black">
                    <Link to="/contact">Send Your Enquiry</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src={line}
          className="mt-[0rem] md:mt-[2rem] lg:mt-0 relative xl:mb-[6rem]  3xl:mb-[10rem] z-0"
        />
        <img
          src={header_moon}
          className="absolute w-[10%] md:left-[25rem] left-[5rem] top-[-1rem] lg:top-[-4rem] md:top-[-2rem] z-10"
        />
      </div>
    </div>
  );
};

export default Contact;
