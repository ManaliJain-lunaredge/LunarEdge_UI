import { useState, useEffect } from "react";
import header_moon from "../assets/Home/header_moon.png";

// Generate moon positions dynamically
const moonPositions = Array.from({ length: 13 }, (_, i) => ({
  scrollY: i * 1000, // Dynamic spacing (adjust as needed)
  x: i === 5 ? "67%" : i===8 ? "35%":i===9 ? "26%":i===10 ? "30%":i===11 ? "78%":i===12 ? "30%" :i===13 ? "30%": i % 2 === 0 ? "70%" :i % 6 === 0 ? "40%" :"30%", // Set 65% when i == 6
  y: i===1?"90%" :i === 4 ? "100%" : i === 5 ? "38%":i === 5 ? "38%":i === 10 ? "29%" :i === 11 ? "78%" :i === 12 ? "31%" :`${100 - i * 10}%` ,
  width:
  i === 2 // 🌙 Increase size at `i == 2`
    ? "40%" // Big size at this point
    : i === 7 // 🌙 Set width to 60% at `i == 6`
    ? "7%"
     : i === 11 // 🌙 Set width to 60% at `i == 6`
    ? "10%"
     : i === 10  ||i===12// 🌙 Set width to 60% at `i == 6`
    ? "7%"
    : i > 2 // 🌙 Decrease size after `i == 2`
    ? `${10 + ((i % 4) * 5) / 3}%` // Smaller size after `i == 2`
    : `${10 + (i % 4) * 5}%`, // Default width variation
  rotation: i * 45, // Smooth rotation increments
}));


const ScrollMoon = () => {
  const [position, setPosition] = useState(moonPositions[0]);

  useEffect(() => {
  const handleScroll = () => {
  const scrollY = window.scrollY;

  // Find the closest moon position
  const closest = moonPositions.reduce((prev, curr) =>
    Math.abs(curr.scrollY - scrollY) < Math.abs(prev.scrollY - scrollY) ? curr : prev
  );

  setPosition(prev => ({
    ...closest,
    rotation: prev.rotation + 2, // Increment rotation smoothly
  }));
};


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "100%", background: "#0b0514", position: "relative" }}>
      <img
        src={header_moon}
        alt="Moving Moon"
        style={{
          position: "fixed",
          top: position.y, // Dynamically adjust `top` value
          left: position.x,
          transform: `translate(-50%, -50%) rotate(${position.rotation}deg)`,
          width: position.width, // Dynamically adjust width
          zIndex: 1000,
          transition:
            "top 0.5s ease-out, left 0.5s ease-out, transform 0.5s ease-out, width 0.5s ease-out",
        }}
      />
    </div>
  );
};

export default ScrollMoon;
