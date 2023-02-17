import styled from "styled-components";

export const StyledRules = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  background-color: ${({ theme }) => theme.colors.lightBlue07};
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
`;

export const StyledDescriptionTitle = styled.div`
  font-size: 2.8rem;
  align-self: center;
  padding-bottom: 10px;
`;

export const StyledHr = styled.hr`
  background-color: black;
  width: 80%;
  height: 2px;
  border: none;
  align-self: center;
  margin: 20px 0;
`;

export const StyledLi = styled.li`
  padding-bottom: 10px;
  &:last-child {
    padding-bottom: 0;
  }
  &::before {
    content: "-";
  }
`;
