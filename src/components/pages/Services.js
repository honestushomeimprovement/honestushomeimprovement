import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../styles/Services.css";
import pic from "../../assets/images/picholder.jpg";
import services from "../../assets/ServiceInfo";

function Services() {
  setTimeout(function () {
    window.scrollTo(0, 500);
  }, 100);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h1 className="text-center p-3 home-head">Services</h1>
      <div className="top-margin d-flex align-items-center justify-content-around flex-wrap">
        {services.map((service) => (
          <div className="d-flex flex-column justify-content-center">
            <div className={service.class} key={service.id}>
              <div onClick={handleShow} className="example border">
                <img
                  src={pic}
                  alt={service.name}
                  width="450"
                  height="400"
                ></img>
                <div class="content">
                  <h2 className="text">
                    {" "}
                    {service.name}{" "}
                    <p className="descr"> {service.description}</p>{" "}
                  </h2>
                </div>
              </div>
            </div>
            {/* Modal Code Here */}
            <>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{service.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <img
                      src={service.src}
                      alt={service.name}
                      width="450"
                      height="400"
                    ></img>
                  </div>
                  {service.info}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary">Contact Us</Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
