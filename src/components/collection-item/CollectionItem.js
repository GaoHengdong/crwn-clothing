import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CollectionItem.scss";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

class CollectionItem extends Component {
  render() {
    const { item, addItem } = this.props;
    const { name, imageUrl, price } = item;
    return (
      <div className="CollectionItem">
        <div
          className="CollectionItem__image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="CollectionItem__subtitle">
          <div className="CollectionItem__name">{name}</div>
          <div className="CollectionItem__price">{price}</div>
        </div>
        <CustomButton
          className="inverted CollectionItem__button"
          onClick={() => addItem(item)}
        >
          加入购物车
        </CustomButton>
      </div>
    );
  }
}
const mapDispathToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispathToProps)(CollectionItem);
