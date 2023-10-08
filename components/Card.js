"use client";
import React, { useState, useEffect } from "react";

function Card({ company, title, date, content }) {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("400px");
  const toggleContent = () => {
    if (window.innerWidth <= 768) {
      setExpanded(!expanded);
    }
  };

  useEffect(() => {
    console.log(window.innerWidth);
  }, [expanded]);
  return (
    <article
      className={`card ${expanded ? "expanded" : ""}`}
      onClick={toggleContent}
      style={{
        maxHeight:
          window.innerWidth <= 768 ? (expanded ? "550px" : "400px") : "none",
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
