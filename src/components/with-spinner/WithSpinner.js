import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.style";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <SpinnerContainer>
      <SpinnerOverlay />
    </SpinnerContainer>
  ) : (
    <WrappedComponent {...otherProps} />
  );

export default WithSpinner;
