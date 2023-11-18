import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalService({service}){

      const navigate = useNavigate();
      const [show1, setShow1] = useState(false);

      const handleClose1 = () => setShow1(false);
      const handleShow1 = () => setShow1(true);


    return (
      <>
        <div
          key={service.id}
          className="d-flex flex-column justify-content-center mt-4"
          onClick={handleShow1}
        >
          <h4 className="text-center service-head animate__animated animate__fadeInUp">
            {service.name}
          </h4>
          <div className={service.class} key={service.id}>
            <div className="example">
              <img src={service.src} alt={service.name} className="img-fluid service-pic"></img>
              <div className="content">
                <p className="text descr">
                  Click Here For More Information About Our {service.name}{" "}
                  Service
                </p>
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
          <Modal.Body className="modal-background">
            <div>
              <img
                src={service.src}
                alt={service.name}
                className="img-fluid"
              ></img>
            </div>

            <p className="service-description-body">{service.info}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="light" onClick={handleClose1}>
              Close
            </Button>
            <Button
              onClick={() => {
                navigate('/contact/'+service.name)
              }}
             variant="warning">Contact Us</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalService;