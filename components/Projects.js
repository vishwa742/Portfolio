import React from "react";
import ProjectCards from "./ProjectCards";

export default function Projects() {
  const projects = [
    {
      name: "Ticket Booker",
      description: [
        `Built a React application to book movie tickets for movies
                    currently playing in theatres.`,
        `Technologies used: ReactJS, NodeJS, JavaScript, HTML, CSS`,
      ],
      g_link: "https://github.com/vishwa742/React-ticketing-app",
      site_link: "https://ticketbooker.netlify.app/",
    },
    {
      name: "Restaurant Finder",
      description: [
        `Designed a website to find restaurants across the United
                    States based on address or a city name.`,
        `Technologies used: Flask, Python, NumPy, Pandas, HTML,
                    JavaScript, CSS`,
      ],
      g_link: "https://github.com/vishwa742/RestaurantFinder",
      site_link: "https://restaurant-finder-vish.herokuapp.com/",
    },
  ];
  return (
    <div>
      <div className="projects-container">
        <div id="projects" className="container1">
          <h1>Projects:</h1>
        </div>
        <div className="container">
          <section className="card-list">
            {projects.map((project, index) => (
              <ProjectCards
                key={project.index}
                name={project.name}
                description={project.description}
                g_link={project.g_link}
                site_link={project.site_link}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
