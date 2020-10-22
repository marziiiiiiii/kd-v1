import React from "react";
import "./customButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, useMarginRight, ...otherProps }) => (
  <button
    className= {`${useMarginRight ? 'margin-right': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
