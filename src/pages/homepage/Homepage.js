import React from "react";
import "../../components/directory/Directory";
import Directory from "../../components/directory/Directory";
import { HomepageContainer } from "./HomepageContainer.styled";

const Homepage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};
export default Homepage;
