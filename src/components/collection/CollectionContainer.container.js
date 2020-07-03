import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../with-spinner/WithSpinner";
import Collection from "./Collection";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoading } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsLoading,
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
