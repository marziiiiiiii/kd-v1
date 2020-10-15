import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../asserts/4.3 envelope.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="options">
      <Link calssName="op" style={{ padding: "10px " }} to="/contact">
        تماس با ما
      </Link>
      <Link calssName="" style={{ padding: "10px " }} to="/collections">
        همه دسته بندی ها
      </Link>

      <Link calssName="" style={{ padding: "10px " }} to="/signin">
        ورود / ثبت نام
      </Link>
      
    </div>
    <Link calssName="logo-container" to="/">
        <Logo className="logo" />
      </Link>
  </div>
);

export default Header;
