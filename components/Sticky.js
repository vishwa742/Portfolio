import React from "react";
import "./sticky.css";

function Sticky() {
  return (
    <div className="left">
      <div className="content">
        <div className="content-title">
          <img src="/images/vishwanath.png" className="img-face" />
          <span className="bigText">
            <h1>
              Hi, <br /> I&#39;m Vishwanath Ezhil.
            </h1>
          </span>
          <div className="bio-body">
            <h3>
              I am a Software Engineer located in New Jersey and I&#39;ve been
              writing code for the last 5 years. Some of my best work has been
              built using <strong> ReactJS</strong>, <strong> NextJS,</strong>
              <strong> Flask</strong>,<strong> Python</strong>, and
              <strong> JavaScript</strong>. My hobbies include Lifting and
              Running.
            </h3>
          </div>

          <div className="row social">
            <a target="blank" href="https://www.linkedin.com/in/e-vishwanath/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a target="blank" href="https://github.com/vishwa742">
              <i className="fab fa-github"></i>
            </a>
            <a target="blank" href="mailto:ezhilvishwanath@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
            <a target="blank" href="assets/resume.pdf">
              <i className="fa fa-file"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sticky;
