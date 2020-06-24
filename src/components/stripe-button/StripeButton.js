import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Gx9ImGO5vEzb9VWoZshOf6G5dCjLt8LYa6WYKGJtvsR60FAoPeEb3ugZSNkf8WwN19qna3aV6EauZoQzaUySlSl00bfjMstE8";

  return <StripeCheckOut />;
};
