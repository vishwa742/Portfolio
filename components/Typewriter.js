"use client";
import React, { useState, useEffect } from "react";

function TypewriterText({ text, typingSpeed }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    if (currentIndex < text.length) {
      typingInterval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, typingSpeed, currentIndex]);

  return <span>{displayText}</span>;
}

export default TypewriterText;
