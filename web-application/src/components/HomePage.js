import React, { Component } from "react";
import { Link } from "react-router-dom";
import img2 from './images/img2.jpg'

class HomePage extends Component {
  render() {
    const customNavbarStyle = {
      paddingTop: "1px",
      paddingBottom: "1px",
      background: "linear-gradient(to right, #0000ff, #00aaff)", // Gradient colors
    };

    const customNavbarStyle1 = {
      paddingTop: "10px",
      paddingBottom: "10px",
      background: "linear-gradient(to right,#ffffff, #f0f0f0)", // Gradient colors
    };

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={customNavbarStyle}
        >
         
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" >
                <Link to="/registration" style={{ textDecoration: "none" }}>
                  {" "}
                  <a className="nav-link" href="#" >
                    Register
                  </a>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-light "
            id="nav"
            style={customNavbarStyle1}
          >
            <a className="navbar-brand" href="#">
              Online Appointment Scheduling 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Merchant{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <img
          src={img2}
          alt="Image"
          style={{ height: "800px", width: "100%"}}
        />
      </div>
    );
  }
}

export default HomePage;
