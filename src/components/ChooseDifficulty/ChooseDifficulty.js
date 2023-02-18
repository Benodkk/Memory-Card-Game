import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setDifficulty } from "../../redux/difficulty";
import { setAllLevels } from "../../redux/allLevels";

import levelTypes from "../../database/levelTypes";

import Button from "../Button/Button";

import {
  StyledChooseDifficulty,
  StyledDifficultyButton,
} from "./ChooseDifiiculty.styled";

const ChooseDifficulty = ({ setDifficultyChosen }) => {
  const dispatch = useDispatch();
  const difficulty = useSelector((state) => state.difficulty);
  return (
    <StyledChooseDifficulty>
      {levelTypes.map((level) => {
        return (
          <StyledDifficultyButton
            key={level.difficulty.id}
            chosen={difficulty.id === level.difficulty.id}
            onClick={() => {
              dispatch(setDifficulty(level.difficulty));
              dispatch(setAllLevels(level.levels));
            }}
          >
            {level.difficulty.label}
          </StyledDifficultyButton>
        );
      })}
      <Button onClick={() => (difficulty ? setDifficultyChosen(true) : "")}>
        START!
      </Button>
    </StyledChooseDifficulty>
  );
};

export default ChooseDifficulty;
