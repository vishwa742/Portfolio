"use client";
import React, { useEffect, useState } from "react";
import "./sticky.css";
import rocketShipSvg from "./assets/rocket-ship-svgrepo-com.svg"; // Correct the import path

export default function Spotlight() {
  const [spotlightPosition, setSpotlightPosition] = useState({
    x: -100,
    y: -100,
  });
  const [trails, setTrails] = useState([]);
  const [rocketAngle, setRocketAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY + window.scrollY;

      // Calculate the angle between the previous and current cursor position
      const deltaX = x - spotlightPosition.x;
      const deltaY = y - spotlightPosition.y;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRocketAngle(angle);
      setSpotlightPosition({ x, y });

      // Add the current position to the trails array
      setTrails((prevTrails) => [...prevTrails, { x, y }]);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [spotlightPosition]);

  return (
    // <div>
    //   {/* Render rainbow-colored trails */}
    //   {trails.map((trail, index) => (
    //     <div
    //       key={index}
    //       className="trail"
    //       style={{
    //         left: `${trail.x}px`,
    //         top: `${trail.y}px`,
    //         backgroundColor: `hsl(${(index * 10) % 360}, 100%, 50%)`,
    //       }}
    //     ></div>
    //   ))}

    //   {/* Render the rocket-shaped spotlight */}
    //   <img src={rocketShipSvg} alt="Rocket Ship" />
    // </div>
    <></>
  );
}
