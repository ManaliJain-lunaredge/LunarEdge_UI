import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import Values from "../Components/Values";

const MobileHero = ({ toggletheme, theme }) => {
  return (
    <div>
      <div className="bg-[#190F21] h-[1100px] relative mb-[17rem]">
        {/* <Header toggletheme={toggletheme} theme={theme} /> */}
        <Hero />
       <div className="">
       <Values />
       </div>
      </div>
      {/* <div className="absolute top-[-5%]">
       
      </div> */}
    </div>
  );
};

export default MobileHero;
