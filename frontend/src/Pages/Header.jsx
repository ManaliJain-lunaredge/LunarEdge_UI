import React, { useState, useEffect } from "react";
import { IoMdCall } from "react-icons/io";
import logo from "../assets/Header/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import light_btn from "../assets/Header/light_btn.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import dark from "../assets/Header/dark.png";
import { Link } from "react-router-dom";
import header_bg from "../assets/Header/header_bg.png";

const Header = ({ toggletheme, theme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("/"); // Track the active link
  const [menuOpen, setMenuOpen] = useState(false); // Track the menu state
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 768) {
      if (menu === "services") {
        setServicesDropdown(true);
        setActiveDropdown("services");
      } else if (menu === "industries") {
        setIndustriesDropdown(true);
        setActiveDropdown("industries");
      }
    }
  };

  let closeDropdownTimeout;

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      closeDropdownTimeout = setTimeout(() => {
        setServicesDropdown(false);
        setIndustriesDropdown(false);
        setActiveDropdown(null);
      }, 200); // Add a small delay before closing (200ms)
    }
  };

  const cancelCloseDropdown = () => {
    clearTimeout(closeDropdownTimeout);
  };

  // Toggle dropdown on click (for mobile)
  const toggleDropdown = (menu) => {
    if (menu === "services") {
      setServicesDropdown(!servicesDropdown);
      setActiveDropdown(servicesDropdown ? null : "services");
    } else if (menu === "industries") {
      setIndustriesDropdown(!industriesDropdown);
      setActiveDropdown(industriesDropdown ? null : "industries");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbar = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "About Us",
      to: "/aboutus",
    },
    {
      id: 3,
      name: "Services",
      subItems: [
        { name: "Web Development", to: "/webdevelopment" },
        { name: "App Development", to: "/appdevelopment" },
        { name: "SEO Services", to: "/seoservices" },
      ],
    },
    {
      id: 4,
      name: "Industries",
      subItems: [
        { name: "Healthcare", to: "/healthcare" },
        { name: "Education", to: "/education" },
        { name: "Real Estate", to: "/realstate" },
        { name: "E-commerce", to: "/ecommerce" },
      ],
    },
    {
      id: 5,
      name: "Insights",
      to: "/insights",
    },
  ];

  const handleScroll = (to) => {
    const target = document.querySelector(to);
    if (target) {
      setMenuOpen(false); // Close the menu in mobile view
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(to); // Update the active link state
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 "
      style={{ backgroundImage: `url(${header_bg})` }}
    >
      <div className="container mx-auto ">
        <div
          className={`flex justify-between items-center font-poppins pt-[1rem] p-[1rem] md:pt-[1rem] md:p-[1rem] lg:pt-[1rem] lg:p-[1rem] xl:pt-[1rem]   ${
            scrolled
              ? "2xl:pt-[1rem] 2xl:pb-[1rem] 3xl:px-[6rem] lg:px-[2rem]"
              : "2xl:pt-[2rem] 2xl:py-[3rem] 2xl:px-[3.5rem] "
          } `}
        >
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                className="w-20 md:w-28 md:h-24 h-20 object-contain cursor-pointer"
                alt="Logo"
                onClick={() => handleScroll("/")}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="lg:block hidden">
            <ul className="flex justify-between gap-[5rem] 2xl:gap-[5rem]  mt-[1rem] lg:gap-[3rem] pl-[7rem] 2xl:pl-[7rem] lg:pl-0 ">
              {navbar.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    location.pathname === item.to ||
                    (location.pathname === "/" && item.to === "/")
                      ? "text-[#FB2B81]"
                      : "text-[#ffffff]"
                  } hover:text-[#FB2B81] cursor-pointer font-medium text-lg 2xl:text-xl lg:text-sm xl:text-lg relative`}
                  onClick={() => setActive(item.to)}
                  onMouseEnter={() => handleMouseEnter(item.name.toLowerCase())}
                  onMouseLeave={() => handleMouseLeave(item.name.toLowerCase())}
                >
                  <Link to={item.to} className="flex items-center">
                    {item.name}
                    {item.subItems && (
                      <RiArrowDropDownLine className="text-3xl 2xl:text-3xl lg:text-xl" />
                    )}
                  </Link>
                  {item.subItems && (
                    <ul
                      className={`absolute left-0 w-[250px] p-2 mt-[1rem] bg-white text-black rounded-md shadow-lg ${
                        (item.name === "Services" && servicesDropdown) ||
                        (item.name === "Industries" && industriesDropdown)
                          ? "block"
                          : "hidden"
                      }`}
                      onMouseEnter={cancelCloseDropdown} // Prevent closing when inside the submenu
                      onMouseLeave={handleMouseLeave} // Close when leaving submenu
                    >
                      {item.subItems.map((subItem, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-200 whitespace-nowrap"
                        >
                          <Link to={subItem.to}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}

          <div className="2xl:flex flex gap-5 md:hidden ">
            {/* Toggle Theme Button */}
            <button onClick={toggletheme} className="p-2 cursor-pointer">
              <img
                src={theme === "dark" ? dark : light_btn}
                alt="Theme Toggle"
                className="w-10 h-5"
              />
            </button>
            <div className=" group  hover:cursor-pointer md:px-2 md:py-[1rem] px-1 py-[0.5rem] rounded-md">
              <Link
                to="/contact"
                className="bg-gradient-to-l from-[#FF297F] to-[#4B8FFF] text-white  md:px-4 md:py-4  px-2 py-4 rounded-lg text-xs md:text-sm font-medium transition group-hover:from-[#4B8FFF] group-hover:to-[#4B8FFF]"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div
            className="text-white md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
          </div>

          {/* medium device code */}
          <div className="hidden  md:flex gap-[3rem] 2xl:hidden ">
            <div className="flex gap-5 pt-[0rem]">
              <button onClick={toggletheme} className="p-2 cursor-pointer">
                <img
                  src={theme === "dark" ? dark : light_btn}
                  alt="Theme Toggle"
                  className="w-10 h-5"
                />
              </button>
              <div className=" bg-gradient-to-l from-[#FF297F] to-[#4B8FFF] hover:bg-[#1c0d5c] hover:cursor-pointer md:px-2 md:py-[0.7rem] 2xl:px-2 2xl:py-[0.3rem] lg:px-0 lg:py-[0.3rem]px-1 py-[0.5rem] rounded-md">
                <a
                  Link
                  to="/contact"
                  className="text-white  md:px-4 md:py-6  px-2 py-4 rounded-lg text-xs md:text-sm font-medium transition"
                >
                  Request a Quote
                </a>
              </div>
              <div
                className="text-white lg:hidden cursor-pointer md:mt-3"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <IoClose size={24} />
                ) : (
                  <RxHamburgerMenu size={24} />
                )}
              </div>
            </div>

            {/* Hamburger Menu */}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed bg-[#190F21] top-0 left-0 w-[100%] md:w-[100%] h-full z-50">
            <div className="flex justify-between items-center p-4  border-[#FB2B81]">
              <Link to="/">
                {" "}
                <img
                  src={logo}
                  className="w-24 h-16  object-contain"
                  alt="Logo"
                />
              </Link>
              {/* <img
              src={light_btn}
              alt="light_btn"
              className="w-[3rem] h-[1.5rem] mt-[1rem]"
            /> */}
              <div
                className="text-white lg:hidden cursor-pointer md:mt-3"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <IoClose size={24} />
                ) : (
                  <RxHamburgerMenu size={24} />
                )}
              </div>
            </div>

            <ul className="flex flex-col text-left gap-5 items-start text-white font-medium text-[18px] px-4 py-6">
              {navbar.map((item) => (
                <li key={item.id} className="relative">
                  <div
                    className={`flex   w-full ${
                      location.pathname === item.to ||
                      (location.pathname === "/" && item.to === "/")
                        ? "text-[#FB2B81]"
                        : "text-white"
                    } hover:text-[#FB2B81] cursor-pointer font-medium text-lg`}
                    onClick={() => {
                      if (!item.subItems) {
                        setMenuOpen(false); // Close menu for normal links
                      }
                      toggleDropdown(item.name.toLowerCase());
                    }}
                  >
                    <Link to={item.to}>{item.name}</Link>
                    {item.subItems && (
                      <RiArrowDropDownLine className="text-3xl" />
                    )}
                  </div>

                  {item.subItems &&
                    activeDropdown === item.name.toLowerCase() && (
                      <ul className=" mt-2 bg-white text-black rounded-md shadow-lg w-[200px]">
                        {item.subItems.map((subItem, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-200"
                          >
                            <Link
                              to={subItem.to}
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
