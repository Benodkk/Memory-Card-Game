import styled from "styled-components";
import landscape from "../database/images/landscape.webp";

import { devices } from "../styles/deviceWidth";

export const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${landscape});
  background-position: center;
`;

export const StyledGameSection = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2vh 0 6vh;
  @media ${devices.desktop} {
    padding: 5vh 0 15vh;
  }
`;
