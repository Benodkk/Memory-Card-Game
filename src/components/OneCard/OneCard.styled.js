import styled from "styled-components";

export const StyledOneCard = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border: 3px solid black;
  border-radius: 15px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
    box-shadow: rgba(0, 0, 0, 0.6) 0px 10px 30px;
  }
`;
