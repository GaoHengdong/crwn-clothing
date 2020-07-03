import shopActionTypes from "./shop.type";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.util";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsFailure = (errorMsg) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg,
});

export const fetchCollections = () => (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch((e) => dispatch(fetchCollectionsFailure(e.message)));
};
