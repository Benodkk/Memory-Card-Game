import styled from "styled-components";

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
  margin-bottom: 8rem;
  background-color: ${({ theme }) => theme.colors.lightBlue07};
  border-radius: 10px;
`;

export const StyledCardsContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-template-rows: 1fr 1fr;
`;
