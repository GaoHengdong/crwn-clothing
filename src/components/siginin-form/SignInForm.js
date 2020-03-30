import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import FormButton from "../form-button/FormButton";
import "./SignInForm.scss";

export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  }
  render() {
    return (
      <div className="SignInForm">
        <h2 className="SignInForm__title">已经有账号</h2>
        <h3 className="SignInForm__subtitle">请用邮箱和密码登录</h3>
        <form className="SignInForm__form" onSubmit={this.handleFormSubmit}>
          <FormInput
            type="email"
            name="email"
            id="SignInForm__email"
            value={this.state.email}
            onChange={this.handleFormChange}
            label="电子邮件"
            required
          />
          <FormInput
            type="password"
            name="password"
            id="SignInForm__password"
            value={this.state.password}
            onChange={this.handleFormChange}
            label="密码"
            required
          />
          <FormButton type="submit" />
        </form>
      </div>
    );
  }
}
