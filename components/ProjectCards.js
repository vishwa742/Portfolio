"use client";
import React from "react";

function ProjectCards({ name, description, g_link, site_link }) {
  return (
    <div>
      <article className="card">
        <header className="card-header">
          <h2>{name}</h2>
        </header>
        <div className="emp-data2">
          <ul>
            {description.map((lines, index) => (
              <li key={index}>{lines}</li>
            ))}
          </ul>
        </div>
        <div className="emp-data3">
          <div>
            <a className="btnn" href={g_link}>
              Github
            </a>
          </div>
          <div>
            <a className="btnn" href={site_link}>
              View Website
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectCards;
