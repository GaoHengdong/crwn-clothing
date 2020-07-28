import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { signUpStart } from "../../redux/user/user.action";
import { connect } from "react-redux";
import "./SignUpForm.scss";

const SignUpForm = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  function handleFormChange(e) {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
    //检查密码
    const { password, confirm_password, username, email } = userCredentials;
    if (password !== confirm_password) {
      alert("您输入的密码不一致，请重新输入！");
    }
    signUpStart({ email, password, displayName: username });
  }

  return (
    <div className="SignUpForm">
      <h2 className="SignUpForm__title">没有账号</h2>
      <div className="SignUpForm__subtitle">请用邮箱和密码注册</div>
      <form className="SignUpForm__form" onSubmit={handleFormSubmit}>
        <FormInput
          type="username"
          name="username"
          id="SignUpForm__username"
          value={userCredentials.username}
          onChange={handleFormChange}
          label="用户名"
          required
        />
        <FormInput
          type="email"
          name="email"
          id="SignUpForm__email"
          value={userCredentials.email}
          onChange={handleFormChange}
          label="电子邮件"
          required
        />
        <FormInput
          type="password"
          name="password"
          id="SignUpForm__password"
          value={userCredentials.password}
          onChange={handleFormChange}
          label="密码"
          required
        />
        <FormInput
          type="password"
          name="confirm_password"
          id="SignUpForm__confirm_password"
          value={userCredentials.confirm_password}
          onChange={handleFormChange}
          label="确认密码"
          required
        />
        <CustomButton type="submit">注册</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
