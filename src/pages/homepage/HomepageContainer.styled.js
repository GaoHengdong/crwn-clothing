import styled from "styled-components";
import { screen } from "../../helpers/variables";
export const HomepageContainer = styled.div`
  padding: 20px 140px;
  ${screen("sm")(`
      padding: 20px 20px;
`)}
`;
