import React from "react";

import projects from "../../assets/ProjectsInfo";
import ModalCarousel from "../ModalCarousel";
import "../../styles/Projects.css";
import pic from "../../assets/images/picholder.jpg";


export default function Projects() {

  return (
    <>
      <h1 className="text-center p-3 home-head">Projects</h1>
      <div className="grid-container pb-5">
        {/* New Project */}
        {projects.map((project) => (
          <div key={project.id}>
            {project.id % 2 === 0 ? (
              <div>
                <div
                  key={project.id}
                  className="project-container standard-container animate__slideInRight animate__animated"
                  id=""
                >
                  <div className="header-content">
                    <h3> {project.name} </h3>
                  </div>
                  <div className="picture p-4">
                    <img
                      src={project.images[0]}
                      alt="project 1"
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="about-content p-2">
                    <p className="writing-format">
                      Location: {project.location}{" "}
                    </p>
                  </div>
                  {/* Modal Start */}
                  <div className="align-self-center p-3">
                    <ModalCarousel
                      projectImages={project.images}
                      modalTitle={project}
                    />
                  </div>
                  {/* Modal End */}
                </div>
              </div>
            ) : (
              //Project Flip--------------------------------
              <div>
                <div
                  key={project.id}
                  className="project-container flip-container animate__slideInLeft animate__animated"
                  id=""
                >
                  <div className="header-content flipped-header">
                    <h3> {project.name} </h3>
                  </div>
                  <div className="picture p-4">
                    <img
                      src={project.images[0]}
                      alt="project 1"
                      className="img-fluid "
                    ></img>
                  </div>
                  <div className="about-content flipped-about p-2">
                    <p className="writing-format">
                      Location: {project.location}{" "}
                    </p>
                  </div>
                  {/* Modal Start */}
                  <div className="align-self-center p-3">
                    <ModalCarousel
                      projectImages={project.images}
                      modalTitle={project}
                    />
                  </div>
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
