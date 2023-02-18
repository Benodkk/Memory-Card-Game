import styled from "styled-components";

import { devices } from "../../styles/deviceWidth";

export const StyledRules = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlue07};
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 15px;
  @media ${devices.desktop} {
    width: 1024px;
    margin-bottom: 40px;
    padding: 40px;
  }
`;

export const StyledDescriptionTitle = styled.div`
  font-size: 2.8rem;
  align-self: center;
  padding-bottom: 5px;
  @media ${devices.desktop} {
    padding-bottom: 10px;
  }
`;

export const StyledHr = styled.hr`
  background-color: black;
  width: 80%;
  height: 2px;
  border: none;
  align-self: center;
  margin: 10px 0;
  @media ${devices.desktop} {
    margin: 20px 0;
  }
`;

export const StyledLi = styled.li`
  padding-bottom: 5px;
  &:last-child {
    padding-bottom: 0;
  }
  &::before {
    content: "-";
  }
  @media ${devices.desktop} {
    padding-bottom: 10px;
  }
`;
