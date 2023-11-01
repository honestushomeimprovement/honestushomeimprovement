import React from "react";
import "../../styles/Services.css"
import pic from "../../assets/images/picholder.jpg"


const projects = [
  {
    id: 1,
    name: "Service",
    github: "https://github.com/keysbhag/FindFlix-Project",
    url: "https://google.com",
    stack: "stuff",
    class: "animate__animated animate__backInLeft project",
  },
  {
    id: 2,
    name: "Service",
    github: "https://github.com/keysbhag/Food-City-Grocery",
    url: "https://google.com",
    stack: "Stuff",
    class: "animate__animated animate__backInRight project",
  },
  {
    id: 3,
    name: "Service",
    github: "https://github.com/keysbhag/6ixAuto",
    url: "https://google.com",
    stack: "Stuff",
    class: "animate__animated animate__backInLeft project",
  },
  {
    id: 5,
    name: "Servcie",
    github: "https://github.com/keysbhag/Weather-Application",
    url: "https://google.com",
    stack: "Stuff",
    class: "animate__animated animate__backInLeft project",
  },
];

function Services() {
    setTimeout(function () {
      window.scrollTo(0, 500);
    }, 100);
  return (
    <>
      <h1 className="text-center p-3 home-head">Services</h1>
      <div className="top-margin d-flex align-items-center justify-content-around flex-wrap">
        {projects.map((project) => (
          <div className="d-flex flex-column">
            <div className={project.class} key={project.id}>
              <a href={project.url} target="blank" className="example border">
                <img
                  src={pic}
                  alt={project.name}
                  width="450"
                  height="400"
                ></img>
                <div class="content">
                  <h2 className="text">
                    {" "}
                    {project.name} <p className="descr"> {project.stack}</p>{" "}
                  </h2>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
