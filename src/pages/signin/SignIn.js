import React, { Component } from "react";
import SignInForm from "../../components/siginin-form/SignInForm";
import "./SignIn.scss";

export default class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <SignInForm />
      </div>
    );
  }
}
