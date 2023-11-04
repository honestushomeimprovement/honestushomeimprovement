import React from "react";
import "../../styles/Services.css";

import services from "../../assets/ServiceInfo";
import ModalService from "../ModalService";

function Services() {
  setTimeout(function () {
    window.scrollTo(0, 500);
  }, 100);

  console.log(services);

  return (
    <>
      <h1 className="text-center p-3 home-head">Services</h1>
      <div className=" d-flex align-items-center justify-content-around flex-wrap">
        {services.map((service) => (
          <ModalService key={service.id} service={service} />
        ))}
      </div>
    </>
  );
}

export default Services;
