import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Footer from "../components/Footer";
import "../styles/Main.css";
import "animate.css";
import crest from "../assets/images/MainCrest.jpeg";
import underbar from "../assets/images/UnderBar.jpg"

export default function Main() {

  return (
    <div className="custom-font">
      <div className="d-flex justify-content-center">
        <img src={crest} alt="crest-logo" className="crest"></img>
      </div>
      <Navbar />
      <div className="d-flex justify-content-center">
        <img src={underbar} alt="crest-logo" className="underbar"></img>
      </div>
      <div className="main">
        <Routes>
          <Route path="/reno-site" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route
            exact
            path="/contact/:paramSubject"
            element={<Contact />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
