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
                <div>
                  <h3>
                    • Built a React application to book movie tickets for movies
                    currently playing in theatres.
                  </h3>
                </div>
                <div>
                  <h3>
                    • Technologies used: ReactJS, NodeJS, JavaScript, HTML, CSS
                  </h3>
                </div>
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
                <div>
                  <h3>
                    • Designed a website to find restaurants across the United
                    States based on address or a city name.
                  </h3>
                </div>
                <div>
                  <h3>
                    • Technologies used: Flask, Python, NumPy, Pandas, HTML,
                    JavaScript, CSS
                  </h3>
                </div>
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

            <article className="card">
              <header className="card-header">
                <h2>Airplane Boarding Visualizer</h2>
              </header>
              <div className="emp-data2">
                <div>
                  <h3>
                    • A Visualization Project built on React.js to compare the
                    most effective and the least effective airplane boarding
                    techniques.
                  </h3>
                </div>
                <div>
                  <h3>
                    • Technologies used: ReactJS, NodeJS, JavaScript, HTML, CSS
                  </h3>
                </div>
              </div>
              <div className="emp-data3">
                <div>
                  <a
                    className="btnn"
                    href="https://github.com/vishwa742/Airplane-Boarding-Visualizer"
                  >
                    Github
                  </a>
                </div>
                <div>
                  <a className="btnn" href="https://airplane-vis.netlify.app/">
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
