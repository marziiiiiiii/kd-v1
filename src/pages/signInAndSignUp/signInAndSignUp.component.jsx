import React from "react";
import "./signInAndSignUp.styles.scss";
import SignIn from "../../components/signIn/signIn.component";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-out">
    <div className="sign-in-and-sign-out-item">
      <SignIn />
    </div>
    <div className="sign-in-and-sign-out-item">
      <SignIn />
    </div>
  </div>
);

export default SignInAndSignUp;
