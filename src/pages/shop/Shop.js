import React from "react";
import CollectionOverviewContainer from "../../components/collection-overview/CollectionOverviewContainer.container";
import CollectionContainer from "../../components/collection/CollectionContainer.container";
import "./Shop.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollections } from "../../redux/shop/shop.actions";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="Shop">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(null, mapDispatchToProps)(Shop);
