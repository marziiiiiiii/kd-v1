import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../asserts/4.3 envelope.svg";
import { auth } from "../parse/parse.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="options">
      <Link calssName="each-option"style={{ padding: "10px " }} to="/contact">
        تماس با ما
      </Link>

      <Link calssName="each-option"style={{ padding: "10px " }} to="/collections">
        همه دسته بندی ها
      </Link>

      {currentUser ? (
        <div className="each-option"style={{ padding: "10px " }} onClick={ () => auth.signOut()}>
          خروج از حساب کاربری
        </div>
      ) : (
        <Link calssName="each-option"style={{ padding: "10px " }}  to="/signin">
          ورود / ثبت نام
        </Link>
      )}
    </div>

    <Link calssName="logo-container" to="/">
      <Logo className="logo" />
    </Link>
  </div>
);

export default Header;
//style={{ padding: "10px " }}