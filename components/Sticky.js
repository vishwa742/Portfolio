import React from "react";
import "./sticky.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import TypewriterText from "./Typewriter";
function Sticky() {
  return (
    <div className="left">
      <div className="content">
        <div className="content-title">
          <img src="/images/vishwanath.png" className="img-face" />
          <div className="bigText">
            <h1>
              <TypewriterText
                text="Hi, I&#39;m Vishwanath Ezhil."
                typingSpeed={50}
              />
              <br />
            </h1>
          </div>
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
              <i className="fa fa-linkedin"></i>
            </a>
            <a target="blank" href="https://github.com/vishwa742">
              <i className="fa fa-github"></i>
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
