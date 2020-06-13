import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CollectionItem.scss";

export default class CollectionItem extends Component {
  render() {
    const { name, imageUrl, price } = this.props;
    return (
      <div className="CollectionItem">
        <div
          className="CollectionItem__image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="CollectionItem__subtitle">
          <div className="CollectionItem__name">{name}</div>
          <div className="CollectionItem__price">{price}</div>
        </div>
        <CustomButton />
      </div>
    );
  }
}
