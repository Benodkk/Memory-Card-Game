import gameRules from "../../database/gameRules";

import Button from "../Button/Button";

import {
  StyledRules,
  StyledHr,
  StyledLi,
  StyledDescriptionTitle,
} from "./Rules.Styled";

const Rules = ({ setShowRules }) => {
  const gameplayDescription = [...Object.values(gameRules.gameplay)];
  const rules = [...Object.values(gameRules.rules)];
  return (
    <>
      <StyledRules>
        <StyledDescriptionTitle>Main goal</StyledDescriptionTitle>
        <ul>
          <StyledLi>{gameRules.objective}</StyledLi>
        </ul>
        <StyledHr />
        <StyledDescriptionTitle>Gameplay</StyledDescriptionTitle>
        <ul>
          {gameplayDescription.map((rule) => {
            return <StyledLi>{rule}</StyledLi>;
          })}
        </ul>
        <StyledHr />
        <StyledDescriptionTitle>Rules</StyledDescriptionTitle>
        <ul>
          {rules.map((rule) => {
            return <StyledLi>{rule}</StyledLi>;
          })}
        </ul>
      </StyledRules>
      <Button onClick={() => setShowRules(false)}>Back</Button>
    </>
  );
};

export default Rules;
