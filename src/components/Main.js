import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "../styles/Main.css"
import "animate.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="custom-font">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="main">{renderPage()}</div>
    </div>
  );
}
