import { StyledOneCard } from "./OneCard.styled";

const OneCard = ({ image, action }) => {
  return <StyledOneCard onClick={action} image={image}></StyledOneCard>;
};

export default OneCard;
