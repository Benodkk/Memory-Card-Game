import styled from "styled-components";

import { devices } from "../../styles/deviceWidth";

export const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const StyledGameSectionHeading = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 2.4rem;
  padding: 10px;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.lightBlue07};
  border-radius: 10px;
  @media ${devices.desktop} {
    margin-bottom: 8rem;
  }
`;

export const StyledCardsContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  @media ${devices.desktop} {
    gap: 20px;
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    grid-template-rows: 1fr 1fr;
  }
`;
