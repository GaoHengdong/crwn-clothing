import React from "react";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ shopCollections }) => (
  <div className="CollectionOverview">
    {shopCollections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  shopCollections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
