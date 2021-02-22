import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light text-uppercase sticky-top"
        id="navbar-example"
      >
        <div className="container">
          <a className="navbar-brand" href="#homescreen">
            home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#aboutscreen">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#worksscreen">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactscreen">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
