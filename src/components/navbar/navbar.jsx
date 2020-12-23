import React from "react";
import "./navbar.css"

const Navbar = () => {
  return ( <nav
    className="navbar navbar-light  navbar-expand-lg"
    // style={{ backgroundColor: "#e3f2fd" }}
  >
    <a className="navbar-brand title" href="#">
      کارت ها
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
          دسته بندی ها <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#">
          پر بازدید ها
        </a>
        <a className="nav-item nav-link" href="#">
          رایگان!
        </a>
        <a className="nav-item nav-link disabled" href="#">
          ورود/ثبت نام
        </a>
      </div>
    </div>
  </nav> );
}
 
export default Navbar;

