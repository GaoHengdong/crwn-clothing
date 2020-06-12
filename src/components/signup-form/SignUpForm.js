import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import "./SignUpForm.scss";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  async handleFormSubmit(e) {
    e.preventDefault();
    //检查密码
    const { password, confirm_password, username, email } = this.state;
    if (password !== confirm_password) {
      alert("您输入的密码不一致，请重新输入！");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { username });
      this.setState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div className="SignUpForm">
        <h2 className="SignUpForm__title">没有账号</h2>
        <div className="SignUpForm__subtitle">请用邮箱和密码注册</div>
        <form className="SignUpForm__form" onSubmit={this.handleFormSubmit}>
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
            type="password"
            name="confirm_password"
            id="SignUpForm__confirm_password"
            value={this.state.confirm_password}
            onChange={this.handleFormChange}
            label="确认密码"
            required
          />
          <CustomButton type="submit">注册</CustomButton>
        </form>
      </div>
    );
  }
}
