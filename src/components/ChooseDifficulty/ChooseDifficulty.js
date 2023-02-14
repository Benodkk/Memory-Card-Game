import levelTypes from "../../database/levelTypes";

import { useDispatch, useSelector } from "react-redux";
import { setDifficulty } from "../../redux/difficulty";
import { setAllLevels } from "../../redux/allLevels";

const ChooseDifficulty = ({ setDifficultyChosen }) => {
  const dispatch = useDispatch();
  const difficulty = useSelector((state) => state.difficulty);
  return (
    <div>
      {levelTypes.map((level) => {
        return (
          <button
            key={level.difficulty.id}
            onClick={() => {
              dispatch(setDifficulty(level.difficulty.id));
              dispatch(setAllLevels(level.levels));
            }}
          >
            {level.difficulty.label}
          </button>
        );
      })}
      <button onClick={() => (difficulty ? setDifficultyChosen(true) : "")}>
        START!
      </button>
    </div>
  );
};

export default ChooseDifficulty;
