
import Header from "./Header";
import hero_img from "../assets/Home/hero_img.png";
import arrow from "../assets/Home/arrow.png";
import Hero from "./Hero";
import Values from "../Components/Values";
import Aboutus from "../Components/Aboutus";
import Journey from "../Components/Journey/";
import Moon from "../Components/Discover";
import Our_Vision from "../Components/Our_Vision";
import header_moon from "../assets/Home/header_moon.png";
import Discover from "../Components/Discover";
import Future from "../Components/Future";
import Mission from "../Components/Mission";
import Technology from "../Components/Technology";
import Process from "../Components/Process";
import Clients from "../Components/Clients";
import Industries from "../Components/Industries";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import Footer from "./Footer";
import MobileHero from "./MobileHero";
import ScrollMoon from "../Components/ScrollMoon";
import React, { useEffect,useState } from "react";

const Home = ({ toggletheme, theme }) => {
  const [isEdge, setIsEdge] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Edg")) {
      setIsEdge(true);
    }
  });
  return (
    <div className="overflow-hidden">
      <div className="block md:hidden">
        {/* <div className="bg-[#190F21] h-[1100px]">
          <Header toggletheme={toggletheme} theme={theme} />
          <Hero />
        </div> */}
        <MobileHero toggletheme={toggletheme} theme={theme} />
      </div>
      <div
        className={`hidden md:block bg-cover bg-center bg-[#190F21] bg-no-repeat relative  min-h-[145vh] md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[100vh] 2xl:min-h-[80vh] 3xl:min-h-screen ${isEdge?"2xl:h-[70vh]":"xl:min-h-[100vh]"}  `}
        style={{ backgroundImage: `url(${hero_img})` }}
      >
        <Header toggletheme={toggletheme} theme={theme} />
        <Hero theme={theme} />
        <img
          src={header_moon}
          className="hidden md:block absolute xl:right-[30rem] lg:bottom-[-2rem] xl:bottom-[-5rem] xl:w-[10%] md:bottom-[-2rem] md:w-[10%] lg:right-[15rem] md:right-[7rem]"
        />
        {/* <ScrollMoon /> */}
      </div>
      <div toggletheme={toggletheme} theme={theme}>
        <div className="hidden md:block">
          <Values theme={theme} />
        </div>
        <Aboutus theme={theme} />
        <Discover theme={theme} />
        <Journey theme={theme} />
        <Our_Vision theme={theme} />
        <Future theme={theme} />
        <Mission theme={theme} />
        <Technology theme={theme} />
        <Process theme={theme} />
        <Clients theme={theme} />
        <Industries theme={theme} />
        <Blogs theme={theme} />
        <Contact theme={theme} />
      </div>
      {/* <div toggletheme={toggletheme} theme={theme}>
        <Footer theme={theme} />
      </div> */}
    </div>
  );
};

export default Home;
