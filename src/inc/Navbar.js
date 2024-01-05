import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
       <div class="container-fluid">
          <a
            class="navbar-brand"
            href="/"
            style={{ color: "orange", fontFamily: "cursive", fontSize: "bold" }}
          >
            NetMovie
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white", fontFamily: "monospace" }}
                >
                  Home
                </Link>
              </li>






              <li class="nav-item">
                <Link
                  to="/movies"
                  class="nav-link"
                  href="#"
                  style={{ color: "white", fontFamily: "sans-serif" }}
                >
Movies          
                </Link>
              </li>







              <li class="nav-item">
                <Link
                  style={{ color: "white", fontFamily: "sans-serif" }}
                  to="/contact"
                  class="nav-link"
                  href="#"
                >
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  style={{ color: "white", fontFamily: "sans-serif" }}
                  to="adver"
                  class="nav-link"
                  href="#"
                >
                  Advertise
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
