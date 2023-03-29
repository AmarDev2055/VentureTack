import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../css/popNavbar.css";
const PopNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <NavLink
                  to="/population"
                  className="nav-link "
                  aria-current="page"
                >
                  जनसंख्या
                </NavLink>
              </li>
              <li className="nav-item ">आर्थिक विकास</li>
              <li className="nav-item ">शिक्षा</li>
              <li className="nav-item">स्वास्थ्य</li>
              <li className="nav-item">कृषि</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PopNavbar;
