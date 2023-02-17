import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 2rem;
  font-family: "Brother1816";
  padding: 20px 80px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.lightBlue04};
  border: 1px solid black;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue07};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
