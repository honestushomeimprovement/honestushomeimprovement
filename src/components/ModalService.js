import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import pic from "../assets/images/picholder.jpg";

function ModalService({service}){
      const [show1, setShow1] = useState(false);

      const handleClose1 = () => setShow1(false);
      const handleShow1 = () => setShow1(true);


    return (
      <>
        <div
          key={service.id}
          className="d-flex flex-column justify-content-center"
          onClick={handleShow1}
        >
          <div className={service.class} key={service.id}>
            <div className="example border">
              <img src={pic} alt={service.name} width="450" height="400"></img>
              <div className="content">
                <h2 className="text">
                  {" "}
                  {service.name} <p className="descr"> {service.description}</p>{" "}
                </h2>
              </div>
            </div>
          </div>
          {/* Modal Code Here */}
        </div>
        <Modal
          show={show1}
          onHide={handleClose1}
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
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary">Contact Us</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalService;