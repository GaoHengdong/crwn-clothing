import React from "react";
import { selectCollectionById } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { connect } from "react-redux";
import "./Collection.scss";

const Collection = ({ collection }) => (
  <div className="Collection">
    <div className="Collection__title">{collection.title}</div>
    <div className="Collection__items-container">
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  collection: selectCollectionById(props.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
