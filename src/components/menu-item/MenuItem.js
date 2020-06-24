import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

function MenuItem(props) {
  const { title, imageUrl, size, history, linkUrl } = props;
  return (
    <div
      className={`MenuItem ${size === "large" ? "large" : ""}`}
      onClick={() => history.push(`/${linkUrl}`)}
    >
      <div
        className="MenuItem__background"
        style={{ backgroundImage: `url(${imageUrl}) ` }}
      ></div>
      <div className="MenuItem__title-container">
        <h2 className="MenuItem__title">{title}</h2>
        <h3 className="MenuItem__subtitle">现在购买</h3>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
