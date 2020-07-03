import { connect } from "react-redux";
import { compose } from "redux";
import CollectionOverview from "./CollectionOverview";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const CollectionOverviewContainer = compose(
  WithSpinner,
  connect(mapStateToProps)
)(CollectionOverview);

export default CollectionOverviewContainer;
