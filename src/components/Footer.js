import React from "react";
import "../styles/Footer.css";
// import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebookSquare,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center footer">
        {/* <a href="https://google.com">
        <h1 className="facebook">
          <FaFacebookSquare />
        </h1>
      </a> */}
        <a href="https://www.instagram.com/honestushomeimprovement/">
          <h1 className="insta-container">
            <FaInstagram className="instagram" />
          </h1>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=16475291390"
          target="_blank"
        >
          <h1 className="whatsapp">
            <FaWhatsapp />
          </h1>
        </a>
      </div>
      <div className="d-flex align-items-center justify-content-center p-3">
        <FaPhone/>
        <span className="p-1">+1-6475291390</span>
      </div>
    </>
  );
}

export default Footer;
