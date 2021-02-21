import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light text-uppercase">
        <div class="container">
          <a className="navbar-brand" href="#homescreen">
            home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#aboutscreen"
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#worksscreen">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contactscreen">
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
