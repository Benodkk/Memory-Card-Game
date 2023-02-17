import Button from "../Button/Button";

import { StyledStartMenu } from "./StartMenu.styled";

const StartMenu = ({ setGameStarted, setShowRules }) => {
  return (
    <StyledStartMenu>
      <Button onClick={() => setGameStarted(true)}>Start Game</Button>
      <Button onClick={() => setShowRules(true)}>Rules</Button>
    </StyledStartMenu>
  );
};

export default StartMenu;
