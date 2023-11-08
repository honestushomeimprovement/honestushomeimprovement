import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

function ModalCarousel({projectImages}, modalTitle) {
  console.log(modalTitle)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Click Here To See All Photos
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title> </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-background">
          {/* Carousel Start */}
          <Carousel>
            {projectImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="modal-picture"
                  src={image}
                  alt="project 1"
                ></img>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          {/* Carousel End */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCarousel;
