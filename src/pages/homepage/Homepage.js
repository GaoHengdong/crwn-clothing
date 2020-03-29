import React, { Component } from "react";
import "./Homepage.scss";
import "../../components/directory/Directory";
import Directory from "../../components/directory/Directory";

export default class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <Directory />
      </div>
    );
  }
}
