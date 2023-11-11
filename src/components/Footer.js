import React from "react";
import "../styles/Footer.css";
// import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <div className="d-flex align-items-center justify-content-center footer">
      <a href="https://google.com">
        <h1 className="facebook">
          <FaFacebookSquare />
        </h1>
      </a>
      <a href="https://google.com">
        <h1 className="insta-container">
          <FaInstagram className="instagram" />
        </h1>
      </a>
      <a href="https://api.whatsapp.com/send?phone=1234567890" target='_blank'>
        <h1 className="whatsapp">
          <FaWhatsapp />
        </h1>
      </a>
    </div>
  );
}

export default Footer;
