import React from "react";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../../components/collection/Collection";
import "./Shop.scss";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="Shop">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
