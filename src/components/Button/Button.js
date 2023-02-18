import React, { StyledButton } from "./Button.styled";

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
