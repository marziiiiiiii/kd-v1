import React, { Component } from "react";

const Navbar = () => {
  return ( <nav
    className="navbar navbar-light  navbar-expand-lg"
    // style={{ backgroundColor: "#e3f2fd" }}
  >
    <a className="navbar-brand" href="#">
      Kart Davat
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#">
          Features
        </a>
        <a className="nav-item nav-link" href="#">
          Pricing
        </a>
        <a className="nav-item nav-link disabled" href="#">
          Disabled
        </a>
      </div>
    </div>
  </nav> );
}
 
export default Navbar;

