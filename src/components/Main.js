import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import "../styles/Main.css";
import "animate.css";
import crest from "../assets/images/Crest.png";

export default function Main() {

  return (
    <div className="custom-font">
      <div className="d-flex justify-content-center">
        <img src={crest} alt="crest-logo" className="crest"></img>
      </div>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/contact/:paramSubject" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}
