import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { resetLevel } from "../redux/currentLevel";
import { resetDifficulty } from "../redux/difficulty";

import ChooseDifficulty from "./ChooseDifficulty/ChooseDifficulty";
import Game from "./Game/Game";
import GameOver from "./GameOver/GameOver";
import Heading from "./Heading/Heading";
import Rules from "./Rules/Rules";
import StartMenu from "./StartMenu/StartMenu";

import { StyledApp, StyledGameSection } from "./App.styled";

function App() {
  const dispatch = useDispatch();
  const [gameStarted, setGameStarted] = useState(false);
  const [difficultyChosen, setDifficultyChosen] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    if (gameOver) {
      dispatch(resetDifficulty());
      dispatch(resetLevel());
      setGameStarted(false);
      setDifficultyChosen(false);
    }
  }, [gameOver]);

  return (
    <StyledApp>
      <Heading />
      <StyledGameSection>
        {gameOver ? (
          <GameOver gameOver={gameOver} setGameOver={setGameOver} />
        ) : difficultyChosen ? (
          <Game setGameOver={setGameOver} />
        ) : gameStarted ? (
          <ChooseDifficulty setDifficultyChosen={setDifficultyChosen} />
        ) : showRules ? (
          <Rules setShowRules={setShowRules} />
        ) : (
          <StartMenu
            setGameStarted={setGameStarted}
            setShowRules={setShowRules}
          />
        )}
      </StyledGameSection>
    </StyledApp>
  );
}

export default App;
