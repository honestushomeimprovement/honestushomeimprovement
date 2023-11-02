import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

import "../../styles/Projects.css";
import pic from "../../assets/images/picholder.jpg";

export default function Projects() {
  setTimeout(function () {
    window.scrollTo(0, 500);
  }, 100);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <h1 className="text-center p-3 home-head">Projects</h1>
      <div className="grid-container">
        {/* New Project */}
        <div>
          <div
            className="about-container standard-container animate__slideInRight animate__animated"
            id=""
          >
            <div className="header-content">
              <h3> Project1 </h3>
            </div>
            <img
              onClick={handleShow}
              className="picture"
              src={pic}
              alt="project 1"
              width="450"
              height="400"
            ></img>
            <div className="about-content">
              <p className="writing-format">Location: Mississauga</p>
            </div>
          </div>
          {/* Modal Start */}
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Carousel Start */}
              <Carousel>
                <Carousel.Item>
                  <img
                    className="picture"
                    src={pic}
                    alt="project 1"
                    width="450"
                    height="400"
                  ></img>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="picture"
                    src={pic}
                    alt="project 1"
                    width="450"
                    height="400"
                  ></img>
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="picture"
                    src={pic}
                    alt="project 1"
                    width="450"
                    height="400"
                  ></img>
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              {/* Carousel End */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
          {/* Modal End */}
        </div>
        {/* New Project */}
        <div>
          <div
            className="projects-container flip-container animate__slideInLeft animate__animated"
            id=""
          >
            <div className="header-content flipped-header">
              <h3> Project2 </h3>
            </div>
            <img
              onClick={handleShow}
              className="picture"
              src={pic}
              alt="project 2"
              width="450"
              height="400"
            ></img>
            <div className="about-content flipped-about">
              <p className="writing-format">Location: Brampton</p>
            </div>
          </div>
          {/* Modal Start */}
          {/* <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don not even try to
              press escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal> */}
          {/* Modal End */}
        </div>
        {/* New Project */}
      </div>
    </>
  );
}
