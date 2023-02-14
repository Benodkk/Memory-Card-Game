import { combineReducers, createStore } from "redux";

import { difficultyReducer } from "./difficulty";
import { currentLevelReducer } from "./currentLevel";
import { allLevelsReducer } from "./allLevels";

const rootReducer = combineReducers({
  difficulty: difficultyReducer,
  currentLevel: currentLevelReducer,
  allLevels: allLevelsReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
