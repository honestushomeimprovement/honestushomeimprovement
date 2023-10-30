import React from "react";
import "../../styles/Projects.css";

export default function Projects() {
  return (
    <>
      <h1 className="text-center p-3 home-head">Projects</h1>
      <div className="grid-container">
        <div
          className="about-container standard-container animate__slideInRight animate__animated"
          id=""
        >
          <div className="header-content">
            <h3> Project1 </h3>
            <p className="writing-format">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="about-content"></div>
        </div>
        <div
          className="projects-container flip-container animate__slideInLeft animate__animated"
          id=""
        >
          <div className="header-content flipped-header">
            <h3> Project2 </h3>
          </div>
          <p className="writing-format">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}
