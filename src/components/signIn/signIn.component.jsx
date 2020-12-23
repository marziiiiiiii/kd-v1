import React, { Component } from "react";
import FormInput from "../formInput/formInput.component";
import CustomButtom from "../customButton/customButton.component";
import "./signIn.styles.scss";
import { signInWithGoogle } from "../parse/parse.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefualt();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>ورود به حساب کاربری</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="sign-in-buttons">
            <CustomButtom style={{marginRight:"5px"}} type="submit ">ورود</CustomButtom>
            <CustomButtom style={{marginLeft:"5px"}} onClick={signInWithGoogle} isGoogleSignIn>
              ورود با گوگل
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
