import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import "./SignInForm.scss";

export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleFormSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const rs = await auth.signInWithEmailAndPassword(email, password);
      console.log(rs);
      this.setState({
        email: "",
        password: "",
      });
    } catch (e) {
      console.log(e);
    }
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
          <div className="SignInForm__btn-container">
            <CustomButton type="submit">登录</CustomButton>
            <CustomButton className="google-btn" onClick={signInWithGoogle}>
              用google登录
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
