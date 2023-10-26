import React from "react";
import "../styles/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-info fs-5">
      <div className="container-fluid justify-content-center">
        <div className="d-flex">
          <button
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
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav custom-nav m-3">
            <li className="nav-item mt-1">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About"
                    ? "nav-link active btn btn-primary text-reset"
                    : "nav-link btn btn-outline-primary"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item mt-1">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio"
                    ? "nav-link active btn btn-primary text-reset"
                    : "nav-link btn btn-outline-primary"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mt-1">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact"
                    ? "nav-link active btn btn-primary text-reset"
                    : "nav-link btn btn-outline-primary"
                }
              >
                Contact
              </a>
            </li>
            <li className="nav-item mt-1">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume"
                    ? "nav-link active btn btn-primary text-reset"
                    : "nav-link btn btn-outline-primary"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
