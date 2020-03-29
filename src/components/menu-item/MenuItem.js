import React from "react";
import "./MenuItem.scss";

export default function MenuItem(props) {
  const { title, imageUrl, size } = props;
  return (
    <div className={`MenuItem ${size === "large" ? "large" : ""}`}>
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
