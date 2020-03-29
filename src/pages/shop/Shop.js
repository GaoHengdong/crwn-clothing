import React, { Component } from "react";
import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import "./Shop.scss";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: SHOP_DATA
    };
  }
  render() {
    return (
      <div className="Shop">
        {this.state.shopData.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
