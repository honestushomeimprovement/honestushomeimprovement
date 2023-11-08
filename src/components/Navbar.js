import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
import "../styles/Navbar.css";

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end:true})

  return (
    <li className="nav-item mt-1">
      <Link
        to={to}
        className={
          isActive
            ? "nav-link active btn btn-warning text-reset"
            : "nav-link btn btn-outline-warning custom-button text-reset"
        }
        {...props}
      > {children}</Link>
    </li>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fs-5 custom-underline">
      <div className="container-fluid justify-content-center">
        <div className="toggle-btn">
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
            <CustomLink to="/"> Home </CustomLink>
            <CustomLink to="/services"> Services </CustomLink>
            <CustomLink to="/projects"> Projects </CustomLink>
            <CustomLink to="/reviews"> Reviews </CustomLink>
            <CustomLink to="/contact"> Contact </CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
