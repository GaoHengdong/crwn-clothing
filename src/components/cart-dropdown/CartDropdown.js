import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.scss";

const CartDropDown = () => (
  <div className="CartDropdown">
    <div className="CartDropdown__item">item</div>
    <CustomButton className="CartDropdown__button">去结算</CustomButton>
  </div>
);

export default CartDropDown;
