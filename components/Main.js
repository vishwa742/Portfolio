import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Education from "./Education";
import Spotlight from "./Spotlight";
// import Spotlight from "./Spotlight";
// import { useClient } from "@next/client";

export default function Main() {
  return (
    <div className="right">
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Spotlight />
    </div>
  );
}
