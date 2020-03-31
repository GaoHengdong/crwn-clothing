import React, { Component } from "react";
import "./FormInput.scss";

export default class FormInput extends Component {
  render() {
    const { label, id, value, ...otherprops } = this.props;
    return (
      <div className="FormInput">
        <input
          className="FormInput__input"
          id={id}
          value={value}
          {...otherprops}
          autoComplete="off"
        />
        <label
          className={`FormInput__label ${value === "" ? "" : "shrink"}`}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  }
}
