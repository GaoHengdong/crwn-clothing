import React from "react";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../../components/collection/Collection";
import "./Shop.scss";
import { Route } from "react-router-dom";

const Shop = ({ match }) => (
  <div className="Shop">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
