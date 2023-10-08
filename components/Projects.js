import React from "react";

export default function Projects() {
  return (
    <div>
      <div className="projects-container">
        <div className="container1">
          <h1>Projects:</h1>
        </div>
        <div className="container">
          <section className="card-list">
            <article className="card">
              <header className="card-header">
                <h2>Ticket Booker</h2>
              </header>
              <div className="emp-data2">
                <ul>
                  <li>
                    {" "}
                    Built a React application to book movie tickets for movies
                    currently playing in theatres.
                  </li>
                  <li>
                    {" "}
                    Technologies used: ReactJS, NodeJS, JavaScript, HTML, CSS
                  </li>
                </ul>
              </div>
              <div className="emp-data3">
                <div>
                  <a
                    className="btnn"
                    href="https://github.com/vishwa742/React-ticketing-app"
                  >
                    Github
                  </a>
                </div>
                <div>
                  <a className="btnn" href="https://ticketbooker.netlify.app/">
                    View Website
                  </a>
                </div>
              </div>
            </article>

            <article className="card">
              <header className="card-header">
                <h2>Restaurant Finder</h2>
              </header>
              <div className="emp-data2">
                <ul>
                  <li>
                    {" "}
                    Designed a website to find restaurants across the United
                    States based on address or a city name.
                  </li>
                  <li>
                    {" "}
                    Technologies used: Flask, Python, NumPy, Pandas, HTML,
                    JavaScript, CSS
                  </li>
                </ul>
              </div>
              <div className="emp-data3">
                <div>
                  <a
                    className="btnn"
                    href="https://github.com/vishwa742/RestaurantFinder"
                  >
                    Github
                  </a>
                </div>
                <div>
                  <a
                    className="btnn"
                    href="https://restaurant-finder-vish.herokuapp.com/"
                  >
                    View Website
                  </a>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
