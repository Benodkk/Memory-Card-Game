import styled from "styled-components";

import { devices } from "../../styles/deviceWidth";

export const StyledGameOver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightBlue07};
  font-size: 2.5rem;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  @media ${devices.desktop} {
    font-size: 3rem;
    padding: 40px;
    border-radius: 20px;
    margin-bottom: 40px;
  }
`;
