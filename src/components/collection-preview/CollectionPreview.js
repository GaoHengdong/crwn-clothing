import React, { Component } from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./CollectionPreview.scss";

export default class CollectionPreview extends Component {
  render() {
    const { title, items } = this.props;
    return (
      <div className="CollectionPreview">
        <div className="h2 CollectionPreview__title">{title}</div>
        <div className="CollectionPreview__items-container">
          {items.slice(0, 4).map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}
