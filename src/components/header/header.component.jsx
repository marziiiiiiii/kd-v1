import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../asserts/4.3 envelope.svg";
import { auth } from "../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="options">
      <Link className="option" to="/contact">
        تماس با ما
      </Link>

      <Link className="option" to="/collections">
        همه دسته بندی ها
      </Link>

      {currentUser ? (
        <div className="option" onClick={ () => auth.signOut()}>
          خروج از حساب کاربری
        </div>
      ) : (
        <Link className="option"  to="/signin">
          ورود / ثبت نام
        </Link>
      )}
    </div>

    <Link className="logo" to="/">
      <Logo  />
    </Link>
  </div>
);

export default Header;
//style={{ padding: "10px " }}