import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews"
import "../styles/Main.css"
import "animate.css";
import crest from"../assets/images/Crest.png"

export default function Main() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Services") {
      return <Services />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Reviews"){
      return <Reviews />
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="custom-font">
      <div className="d-flex justify-content-center">
        <img src={crest} alt="crest-logo" width="550" height="500"></img>
      </div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="main">{renderPage()}</div>
    </div>
  );
}
