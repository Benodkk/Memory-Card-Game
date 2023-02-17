import {
  StyledHeading,
  StyledHeadingContainer,
  StyledSmallHeading,
} from "./Heading.styled";

const Heading = () => {
  return (
    <StyledHeadingContainer>
      <StyledHeading>Lord of the rings</StyledHeading>
      <StyledSmallHeading>Memory card game</StyledSmallHeading>
    </StyledHeadingContainer>
  );
};

export default Heading;
