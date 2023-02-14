function setDifficulty(value) {
  return {
    type: "SET_DIFFICULTY",
    payload: value,
  };
}
function resetDifficulty() {
  return {
    type: "RESET_DIFFICULTY",
  };
}

export { setDifficulty, resetDifficulty };

export function difficultyReducer(state = "", action) {
  switch (action.type) {
    case "SET_DIFFICULTY":
      return action.payload;
    case "RESET_DIFFICULTY":
      return "";
    default:
      return state;
  }
}
