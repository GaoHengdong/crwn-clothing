import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import FormButton from "../form-button/FormButton";
import "./SignUpForm.scss";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm_password: ""
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className="SignUpForm">
        <h2 className="SignUpForm__title">没有账号</h2>
        <div className="SignUpForm__subtitle">请用邮箱和密码注册</div>
        <form className="SignUpForm__form">
          <FormInput
            type="username"
            name="username"
            id="SignUpForm__username"
            value={this.state.username}
            onChange={this.handleFormChange}
            label="用户名"
            required
          />
          <FormInput
            type="email"
            name="email"
            id="SignUpForm__email"
            value={this.state.email}
            onChange={this.handleFormChange}
            label="电子邮件"
            required
          />
          <FormInput
            type="password"
            name="password"
            id="SignUpForm__password"
            value={this.state.password}
            onChange={this.handleFormChange}
            label="密码"
            required
          />
          <FormInput
            type="confirm_password"
            name="confirm_password"
            id="SignUpForm__confirm_password"
            value={this.state.confirm_password}
            onChange={this.handleFormChange}
            label="确认密码"
            required
          />
          <FormButton type="submit">注册</FormButton>
        </form>
      </div>
    );
  }
}
