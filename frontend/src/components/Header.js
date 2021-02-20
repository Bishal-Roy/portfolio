import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
function Header() {
  return (
    <>
      <nav className="navbar text-uppercase font-weight-bold navbar-expand-lg navbar-dark  bg-dark sticky-top">
        <div className="container">
          <div className="navbar-nav">
            <Link
              className="nav-link"
              to="homescreen"
              smooth={true}
              duration="1000"
            >
              Home
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav-link"
                to="aboutscreen"
                smooth={true}
                duration="1000"
              >
                About
              </Link>
              <Link
                className="nav-link"
                to="worksscreen"
                smooth={true}
                duration="1000"
              >
                Works
              </Link>
              <Link
                className="nav-link"
                to="contactscreen"
                smooth={true}
                duration="1000"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
