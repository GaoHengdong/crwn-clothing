import React, { Component } from "react";
import "./CustomButton.scss";

export default class CustomButton extends Component {
  render() {
    const { children, className, ...otherprops } = this.props;
    return (
      <button className={`CustomButton ${className}`} {...otherprops}>
        {children}
      </button>
    );
  }
}
