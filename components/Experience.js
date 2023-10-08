import React from "react";
import Card from "./Card";
export default function Experience() {
  const experiences = [
    {
      company: "Procter & Gamble",
      title: "Software Engineer",
      date: "Jul 2021 - Present",
      content: [
        `Worked in a dynamic project that leveraged Next.js, React, and 
            Contentful, where I played an active role in the integration of
            Incremental Static Regeneration (ISR) using Next.js, alongside my
            contributions to frontend enhancements.`,
        `Developed a Flask-based custom WebApp, streamlining Catalogue
            migration between 2 e-commerce stores using BigCommerce APIs,
            resulting in a 90% reduction in migration time.`,
        `Worked on the development of DAGs and Airflow jobs to analyse and
            partition datasets into multiple pipeline workflows enabling
            seamless and efficient large-scale migration activities.`,
        `Built and deployed custom webpages and features for multiple D2C
            Ecommerce stores utilizing different frameworks such as GraphQL,
            React, NextJS and JS.`,
        `Developed an API based monitoring and reporting solution to generate
            customizable weekly reports and automatically flag exceptions to
            specific business rules.`,
      ],
    },
    {
      company: "Akmin Technologies",
      title: "Software Developer Intern",
      date: "May 2018 – Sep 2018",
      content: [
        ` Contributed to rollout of Deep Connect, a dynamic in-browser
            messaging solution for increased subscriber engagement on mobile and
            web-based clients.`,
        `Worked with clients to integrate databases with ISPs to facilitate
            automated campaigns.`,
        `Responsibilities included preparing Use Cases and the beta testing
            of 2 Android apps.`,
      ],
    },
  ];
  return (
    <div>
      <div className="work-container">
        <div id="work" className="container1">
          <h1>Work Experience:</h1>
        </div>
        <div className="container">
          <section className="card-list">
            {experiences.map((experience, index) => (
              <Card
                key={index}
                company={experience.company}
                title={experience.title}
                date={experience.date}
                content={experience.content}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
