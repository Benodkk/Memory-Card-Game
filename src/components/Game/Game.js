import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentLevel } from "../../redux/currentLevel";

import allImages from "../../database/images/allImages";

import OneCard from "../OneCard/OneCard";

import {
  StyledCardsContainer,
  StyledGame,
  StyledGameSectionHeading,
} from "./Game.styled";

const Game = ({ setGameOver }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [clickedCards, setClickedCards] = useState([]);

  const cardsQuantity = store.allLevels.find(
    (level) => level.level === store.currentLevel
  ).cards;

  let cards = [];
  for (let i = 0; i < cardsQuantity; i++) {
    cards.push(<OneCard image={allImages[i]} action={() => handleClick(i)} />);
  }

  cards.sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (clickedCards.length === cardsQuantity) {
      if (store.currentLevel === store.allLevels.length) {
        setGameOver("win");
      }
      setClickedCards([]);
      dispatch(setCurrentLevel());
    }
  }, [clickedCards]);

  const handleClick = (newCard) => {
    if (clickedCards.some((card) => card === newCard)) {
      setGameOver("defeat");
    } else {
      setClickedCards([...clickedCards, newCard]);
    }
  };

  return (
    <StyledGame>
      <StyledGameSectionHeading>
        <div>Difficulty: {store.difficulty.label}</div>
        <div>Level: {store.currentLevel}</div>
        <div>Score: {clickedCards.length}</div>
      </StyledGameSectionHeading>
      <StyledCardsContainer columns={cardsQuantity / 2}>
        {cards.map((card) => {
          return card;
        })}
      </StyledCardsContainer>
    </StyledGame>
  );
};

export default Game;
