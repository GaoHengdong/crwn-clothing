import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";
import "./SignInForm.scss";

class SignInForm extends Component {
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
    const { emailSignInStart } = this.props;
    emailSignInStart({ email, password });
  }
  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton
              type="button"
              className="google-btn"
              onClick={googleSignInStart}
            >
              用google登录
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignInForm);
