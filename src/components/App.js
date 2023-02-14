import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetLevel } from "../redux/currentLevel";
import { resetDifficulty } from "../redux/difficulty";
import { StyledApp } from "./App.styled";
import ChooseLevel from "./ChooseDifficulty/ChooseDifficulty";
import Game from "./Game/Game";
import GameOver from "./GameOver/GameOver";
import Heading from "./Heading/Heading";
import Rules from "./Rules/Rules";
import StartMenu from "./StartMenu/StartMenu";

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
      {gameOver ? (
        <GameOver setGameOver={setGameOver} />
      ) : difficultyChosen ? (
        <Game setGameOver={setGameOver} />
      ) : gameStarted ? (
        <ChooseLevel setDifficultyChosen={setDifficultyChosen} />
      ) : showRules ? (
        <Rules />
      ) : (
        <StartMenu
          setGameStarted={setGameStarted}
          setShowRules={setShowRules}
        />
      )}
    </StyledApp>
  );
}

export default App;
