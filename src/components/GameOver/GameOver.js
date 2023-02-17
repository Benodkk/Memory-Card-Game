import { useEffect, useState } from "react";

import gameOverInfo from "../../database/gameOverInfo";

import Button from "../Button/Button";

import { StyledGameOver } from "./GameOver.styled";

const GameOver = ({ setGameOver, gameOver }) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    if (gameOver === "defeat") {
      setMessage(gameOverInfo.defeat);
    }
    if (gameOver === "win") {
      setMessage(gameOverInfo.win);
    }
  }, [gameOver]);

  return (
    <>
      <StyledGameOver>{message}</StyledGameOver>
      <Button onClick={() => setGameOver(false)}>Main menu</Button>
    </>
  );
};

export default GameOver;
