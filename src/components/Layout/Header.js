import React from "react";
import "../../css/header.css";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid ">
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
          <img src="./images/logo.PNG" alt="" className="logo" />
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand mx-auto">
              cmis.mofaga.gov.np
            </Link>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <NavLink
                  to="/"
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  गृह पृष्ठ
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/contact" className="nav-link" href="#">
                  सम्पर्क गर्नुहोस्
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/support" className="nav-link" href="#">
                  सपोर्ट
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sourceMap" className="nav-link" href="#">
                  स्रोत-नक्सा
                </NavLink>
              </li>
            </ul>
            <form className=" d-flex mx-auto mb-2 mb-lg-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="सर्च"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                लगइन
              </button>
            </form>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" href="#">
                Action
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                Another action
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                Something else here
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" href="#">
                Action
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                Another action
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" href="#">
                Something else here
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
