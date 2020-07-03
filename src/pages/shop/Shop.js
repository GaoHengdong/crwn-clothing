import React from "react";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../../components/collection/Collection";
import "./Shop.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/WithSpinner";
import { fetchCollections } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import {
  selectIsFetching,
  selectIsCollectionsLoading,
} from "../../redux/shop/shop.selector";
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }
  render() {
    const { match, loading, isCollectionsLoading } = this.props;
    return (
      <div className="Shop">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner
              isLoading={isCollectionsLoading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});
const mapStateToProps = createStructuredSelector({
  loading: selectIsFetching,
  isCollectionsLoading: selectIsCollectionsLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
