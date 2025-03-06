import React, { useEffect, useState } from "react";
import "./Moon.css";
import moon from "./assets/moon.png";
import line from "./assets/line.png";

const ParallaxMoon = () => {
  const [yScroll, setYScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setYScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(yScroll);

  return (
    <div className="relative p-[10%] h-[200vh] bg-gradient-to-b from-[#240046] to-[#10002b]">
      {/* Line */}
      <img src={line} alt="line" className="w-full" />

      {/* Rotating Moon */}
      <img
        src={moon}
        alt="moon"
        className="absolute left-[13%] w-24 h-24 rotating-moon"
        style={{ top: `${yScroll*2.5}px`, left : `${yScroll*3}px`, transform: `rotate(${yScroll}deg)` }}
      />
    </div>
  );
};

export default ParallaxMoon;
