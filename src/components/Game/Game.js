import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allImages from "../../database/images/allImages";
import { setCurrentLevel } from "../../redux/currentLevel";
import OneCard from "../OneCard/OneCard";

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
    console.log(newCard);
    if (clickedCards.some((card) => card === newCard)) {
      setGameOver("lose");
    } else {
      setClickedCards([...clickedCards, newCard]);
    }
  };

  return (
    <div>
      <div>Difficulty: {store.difficulty}</div>
      <div>Level: {store.currentLevel}</div>
      <div>
        {cards.map((card) => {
          return card;
        })}
      </div>
    </div>
  );
};

export default Game;
