import React from "react";
import "../styles/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fs-5 custom-underline">
      <div className="container-fluid justify-content-center">
        <div className="">
          <button
            id="nav-toggler"
            className="navbar-toggler mx-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav custom-nav m-3 justify-content-around">
            <li className="nav-item mt-1">
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home"
                    ? "nav-link active btn btn-warning text-reset"
                    : "nav-link btn btn-outline-warning custom-button text-reset"
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item mt-1">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio"
                    ? "nav-link active btn btn-warning text-reset"
                    : "nav-link btn btn-outline-warning custom-button text-reset"
                }
              >
                Services
              </a>
            </li>
            <li className="nav-item mt-1">
              <a
                href="#Projects"
                onClick={() => handlePageChange("Projects")}
                className={
                  currentPage === "Projects"
                    ? "nav-link active btn btn-warning text-reset"
                    : "nav-link btn btn-outline-warning custom-button text-reset"
                }
              >
                Projects
              </a>
            </li>
            <li className="nav-item mt-1">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume"
                    ? "nav-link active btn btn-warning text-reset"
                    : "nav-link btn btn-outline-warning custom-button text-reset"
                }
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
