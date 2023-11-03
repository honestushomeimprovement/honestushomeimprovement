import React from "react";

import projects from "../../assets/ProjectsInfo";
import ModalCarousel from "../ModalCarousel";
import "../../styles/Projects.css";
import pic from "../../assets/images/picholder.jpg";


export default function Projects() {

  return (
    <>
      <h1 className="text-center p-3 home-head">Projects</h1>
      <div className="grid-container">
        {/* New Project */}
        {projects.map((project) => (
          <div key={project.id}>
            {project.id % 2 === 0 ? (
              <div>
                <div
                  key={project.id}
                  className="about-container standard-container animate__slideInRight animate__animated"
                  id=""
                >
                  <div className="header-content">
                    <h3> {project.name} </h3>
                  </div>
                  <img
                    className="picture"
                    src={project.images[0]}
                    alt="project 1"
                    width="450"
                    height="400"
                  ></img>
                  <div className="about-content">
                    <p className="writing-format">
                      Location: {project.location}{" "}
                    </p>
                  </div>
                  {/* Modal Start */}
                  <ModalCarousel projectImages={project.images} />
                  {/* Modal End */}
                </div>
              </div>
            ) : (
              //Project Flip--------------------------------
              <div>
                <div
                  key={project.id}
                  className="projects-container flip-container animate__slideInLeft animate__animated"
                  id=""
                >
                  <div className="header-content flipped-header">
                    <h3> {project.name} </h3>
                  </div>
                  <img
                    className="picture"
                    src={pic}
                    alt="project 2"
                    width="450"
                    height="400"
                  ></img>
                  <div className="about-content flipped-about">
                    <p className="writing-format">
                      Location: {project.location}{" "}
                    </p>
                  </div>
                  {/* Modal Start */}
                  <ModalCarousel projectImages={project.images} />
                  {/* Modal End */}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
