import { useState, useEffect } from "react";
import header_moon from "../assets/Home/header_moon.png";

const moonPositions = [
  { scrollY: 300, x: "70%", y: "100%",width:"10%" },
  { scrollY: 1200, x: "30%",y:"70%",width:"15%" },
  { scrollY: 2059, x: "75%",width:"40%"  },
  { scrollY: 2996, x: "35%", y: "60%",width:"15%" },
  { scrollY: 4771, x: "90%", y: "60%",width:"10%" },
  { scrollY: 5408, x: "30%", y: "70%" ,width:"15%"},
  { scrollY: 6699, x: "90%", y: "50%" ,width:"10%"},
  { scrollY: 7744, x: "30%", y: "50%" ,width:"15%"},
  { scrollY: 8544, x: "90%", y: "50%" ,width:"10%"},
  { scrollY: 9744, x: "30%", y: "50%" ,width:"12%"},
  { scrollY: 11744, x: "90%", y: "50%" ,width:"10%"},
  { scrollY: 12744, x: "30%", y: "50%" ,width:"15%"},
];

const ScrollMoon = () => {
  const [position, setPosition] = useState(moonPositions[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY);

      // Find the closest position based on scroll
      const closest = moonPositions.reduce((prev, curr) =>
        Math.abs(curr.scrollY - scrollY) < Math.abs(prev.scrollY - scrollY)
          ? curr
          : prev
      );

      setPosition(closest);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "100%", background: "#0b0514", position: "relative" ,}}>
      <img
        src={header_moon}
        alt="Moving Moon"
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
          width: position.width, // Dynamically changing width,
          // height: "80px",
          zIndex: 1000, // Ensures it stays above all elements
          transition: "top 0.5s ease-out, left 0.5s ease-out",
        }}
      />
    </div>
  );
};

export default ScrollMoon;
