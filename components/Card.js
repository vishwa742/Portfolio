"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

function Card({ company, title, date, content }) {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("400px");
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const toggleContent = () => {
    if (isMobile) {
      setExpanded(!expanded);
      setMaxHeight(expanded ? "400px" : "550px");
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setMaxHeight("none");
    }
  }, [isMobile]);

  return (
    <article
      className={`card ${expanded ? "expanded" : ""}`}
      onClick={toggleContent}
      style={{
        maxHeight,
      }}
    >
      <div className="card-inner">
        <header className={`card-header ${expanded ? "hidden" : ""}`}>
          <h2>{company}</h2>
        </header>
        <div className={`emp-data ${expanded ? "hidden" : ""}`}>
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            <h3>{date}</h3>
          </div>
        </div>
        <div className={`work-content ${expanded ? "visible" : ""}`}>
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="click-indicator"></div>
    </article>
  );
}

export default Card;
