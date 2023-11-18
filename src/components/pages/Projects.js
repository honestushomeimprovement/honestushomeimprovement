import React, { useState } from "react";

import projects from "../../assets/ProjectsInfo";
import ModalCarousel from "../ModalCarousel";
import Dropdown from "react-bootstrap/Dropdown";
import "../../styles/Projects.css";
import pic from "../../assets/images/picholder.jpg";

export default function Projects() {
  const [filter, setFilter] = useState("");

  if (filter) {
    const filterProjs = projects.filter((project) =>
      project.category.includes(filter)
    );

    return (
      <>
        <h1 className="text-center p-3 home-head">Projects</h1>
        <div className="p-5 d-flex">
          <h4> Filter By Category: </h4>
          <Dropdown className="mx-2">
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Select A Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                All
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("Paint");
                }}
              >
                Painting
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                Pot Lights
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("Floor");
                }}
              >
                Flooring
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                Kitchens
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("Bathroom");
                }}
              >
                Bathrooms
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                Epoxy Flooring
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                Wainscoting
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                General Contracting
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <h4> Filter Selected: {filter}</h4>
        </div>
        <div className="grid-container pb-5">
          {filterProjs.map((project, index) => (
            <div key={project.id}>
              {index % 2 === 0 ? (
                <div>
                  <div
                    key={project.id}
                    className="project-container standard-container animate__fadeInRight animate__animated"
                    id=""
                  >
                    <div className="header-content">
                      <h3 className="project-head"> {project.name} </h3>
                    </div>
                    <div className="picture-container p-4">
                      <div>
                        <img
                          src={project.images[0]}
                          alt="project 1"
                          className="img-fluid p-2"
                        ></img>
                      </div>
                      <div>
                        <img
                          src={project.images[0]}
                          alt="project 1"
                          className="img-fluid p-2"
                        ></img>
                      </div>
                    </div>
                    <div className="about-content p-2">
                      <p className="writing-format">
                        Location: {project.location}{" "}
                      </p>
                    </div>
                    {/* Modal Start */}
                    <div className="align-self-center p-3">
                      <ModalCarousel projectImages={project.images} />
                    </div>
                    {/* Modal End */}
                  </div>
                </div>
              ) : (
                //Project Flip--------------------------------
                <div>
                  <div
                    key={project.id}
                    className="project-container flip-container animate__fadeInLeft animate__animated"
                    id=""
                  >
                    <div className="header-content flipped-header">
                      <h3 className="project-head"> {project.name} </h3>
                    </div>
                    <div className="picture-container p-4">
                      <div>
                        <img
                          src={project.images[0]}
                          alt="project 1"
                          className="img-fluid p-2"
                        ></img>
                      </div>
                      <div>
                        <img
                          src={project.images[0]}
                          alt="project 1"
                          className="img-fluid p-2"
                        ></img>
                      </div>
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
  } else {
    //All Filter------------------------------------------------------------------------------------------------------------------------
    return (
      <>
        <h1 className="text-center p-3 home-head">Projects</h1>
        <div className="p-5 d-flex">
          <h4> Filter By Category: </h4>
          <Dropdown className="mx-2">
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Select A Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                All
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("Paint");
                }}
              >
                Painting
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                Pot Lights
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("Floor");
                }}
              >
                Flooring
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                Kitchens
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("Bathroom");
                }}
              >
                Bathrooms
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                Epoxy Flooring
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                Wainscoting
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setFilter("");
                }}
              >
                General Contracting
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="grid-container pb-5">
          {/* New Project */}
          {projects.map((project) => (
            <div key={project.id}>
              {project.id % 2 === 0 ? (
                <div>
                  <div
                    key={project.id}
                    className="project-container standard-container animate__fadeInRight animate__animated"
                    id=""
                  >
                    <div className="header-content">
                      <h3 className="project-head"> {project.name} </h3>
                    </div>
                    <div className="picture-container p-4">
                      <div>
                        <img
                          src={project.images[0]}
                          alt="project 1"
                          className="img-fluid p-2"
                        ></img>
                      </div>
                      <div>
                        <img
                          src={project.images[0]}
                          alt="project 1"
                          className="img-fluid p-2"
                        ></img>
                      </div>
                    </div>
                    <div className="about-content p-2">
                      <p className="writing-format">
                        Location: {project.location}{" "}
                      </p>
                    </div>
                    {/* Modal Start */}
                    <div className="align-self-center p-3">
                      <ModalCarousel projectImages={project.images} />
                    </div>
                    {/* Modal End */}
                  </div>
                </div>
              ) : (
                //Project Flip--------------------------------
                <div>
                  <div
                    key={project.id}
                    className="project-container flip-container animate__fadeInLeft animate__animated"
                    id=""
                  >
                    <div className="header-content flipped-header">
                      <h3 className="project-head"> {project.name} </h3>
                    </div>
                    <div className="picture-container p-4">
                      <div>
                        <img
                          src={project.images[0]}
                          alt="project 1"
                          className="img-fluid p-2"
                        ></img>
                      </div>
                      <div>
                        <img
                          src={project.images[0]}
                          alt="project 1"
                          className="img-fluid p-2"
                        ></img>
                      </div>
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
          {/* End of projects */}
        </div>
      </>
    );
  }
}
