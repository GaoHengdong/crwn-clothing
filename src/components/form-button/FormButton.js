import React, { Component } from "react";
import "./FormButton.scss";

export default class FormButton extends Component {
  render() {
    const { children, className, ...otherprops } = this.props;
    return (
      <button className={`FormButton ${className}`} {...otherprops}>
        {children}
      </button>
    );
  }
}
