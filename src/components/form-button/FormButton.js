import React, { Component } from "react";
import "./FormButton.scss";

export default class FormButton extends Component {
  render() {
    const { children, ...otherprops } = this.props;
    return (
      <button className="FormButton" {...otherprops}>
        {children}
      </button>
    );
  }
}
