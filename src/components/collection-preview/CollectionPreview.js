import React, { Component } from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./CollectionPreview.scss";
import { withRouter } from "react-router-dom";

class CollectionPreview extends Component {
  render() {
    const { title, items, history, match } = this.props;
    return (
      <div className="CollectionPreview">
        <div
          className="h2 CollectionPreview__title"
          onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
        >
          {title}
        </div>
        <div className="CollectionPreview__items-container">
          {items.slice(0, 4).map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(CollectionPreview);
