import React from "react";

export default function Experience() {
  return (
    <div>
      <div className="work-container">
        <div className="container1">
          <h1>Work Experience:</h1>
        </div>
        <div className="container">
          <section className="card-list">
            <article className="card">
              <header className="card-header">
                <h2>Procter & Gamble</h2>
              </header>
              <div className="emp-data">
                <div>
                  <h3>Software Engineer</h3>
                </div>
                <div>
                  <h3>Jul 2021 – Present</h3>
                </div>
              </div>
              <div className="work-content">
                <ul>
                  <li>
                    Worked in a dynamic project that leveraged Next.js, React,
                    and Contentful, where I played an active role in the
                    integration of Incremental Static Regeneration (ISR) using
                    Next.js, alongside my contributions to frontend
                    enhancements.
                  </li>
                  <li>
                    Developed a Flask-based custom WebApp, streamlining
                    Catalogue migration between 2 e-commerce stores using
                    BigCommerce APIs, resulting in a 90% reduction in migration
                    time.
                  </li>
                  <li>
                    Worked on the development of DAGs and Airflow jobs to
                    analyse and partition datasets into multiple pipeline
                    workflows enabling seamless and efficient large-scale
                    migration activities.
                  </li>
                  <li>
                    Built and deployed custom webpages and features for multiple
                    D2C Ecommerce stores utilizing different frameworks such as
                    GraphQL, React, NextJS and JS.
                  </li>
                  <li>
                    Developed an API based monitoring and reporting solution to
                    generate customizable weekly reports and automatically flag
                    exceptions to specific business rules.
                  </li>
                </ul>
              </div>
            </article>

            <article className="card">
              <header className="card-header">
                <h2>Akmin Technologies</h2>
              </header>
              <div className="emp-data">
                <div>
                  <h3>Software Developer Intern</h3>
                </div>
                <div>
                  <h3>May 2018 – Sep 2018</h3>
                </div>
              </div>
              <div className="work-content">
                <ul>
                  <li>
                    Contributed to rollout of Deep Connect, a dynamic in-browser
                    messaging solution for increased subscriber engagement on
                    mobile and web-based clients.
                  </li>
                  <li>
                    Worked with clients to integrate databases with ISPs to
                    facilitate automated campaigns.
                  </li>
                  <li>
                    Responsibilities included preparing Use Cases and the beta
                    testing of 2 Android apps.
                  </li>
                </ul>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
