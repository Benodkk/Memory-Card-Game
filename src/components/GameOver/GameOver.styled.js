import styled from "styled-components";

export const StyledGameOver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightBlue07};
  font-size: 3rem;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
`;
