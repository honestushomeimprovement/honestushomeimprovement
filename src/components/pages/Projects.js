import React from "react";
import "../../styles/Projects.css";

export default function Projects() {
  return (
    <>
      <h1 className="text-center p-3 home-head">Projects</h1>
      <div className="grid-container">
        <div
          class="about-container standard-container animate__slideInRight animate__animated"
          id="about"
        >
          <div class="header-content">
            <h3> About </h3>
            <p class="writing-format">
              My name is Keyshawn Bhagwandin. I am a 25 year old young
              professional Full Stack developer currently residing in the GTA. I
              am very passionate about coding and web development. I love
              developing functional projects, responsive web applications, and
              practical software’s. Some of the technologies I have become very
              skilled in include HTML, CSS and JavaScript. I am dedicated to my
              craft and work to keep build on my already high level skills in
              programming and coding languages.
            </p>
          </div>
          <div class="about-content"></div>
        </div>
      </div>
    </>
  );
}
