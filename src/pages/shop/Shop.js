import React from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import "./Shop.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selector";

const Shop = ({ shopCollections }) => (
  <div className="Shop">
    {shopCollections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  shopCollections: selectShopCollections,
});

export default connect(mapStateToProps)(Shop);
