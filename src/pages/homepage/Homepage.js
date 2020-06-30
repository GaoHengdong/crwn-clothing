import React from "react";
import "../../components/directory/Directory";
import Directory from "../../components/directory/Directory";
import styled from "styled-components";
import { screen } from "../../helpers/variables";

const Homepage = () => {
  const Homepage = styled.div`
    padding: 20px 140px;
    ${screen("sm")(`
          padding: 20px 20px;
    `)}
  `;

  return (
    <Homepage>
      <Directory />
    </Homepage>
  );
};
export default Homepage;
