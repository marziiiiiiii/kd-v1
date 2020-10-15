import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../asserts/4.3 envelope.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link calssName="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link calssName="" style={{ padding: "18px " }} to="/contact">
        تماس با ما
      </Link>
      <Link calssName="" style={{ padding: "18px " }} to="/collections">
        همه دسته بندی ها
      </Link>

      <Link calssName="" style={{ padding: "18px " }} to="/collections">
        ورود / ثبت نام
      </Link>
    </div>
  </div>
);

export default Header;
