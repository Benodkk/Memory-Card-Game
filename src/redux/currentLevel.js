function setCurrentLevel() {
  return {
    type: "LEVEL_UP",
  };
}
function resetLevel() {
  return {
    type: "RESET",
  };
}

export { setCurrentLevel, resetLevel };

export function currentLevelReducer(state = 1, action) {
  switch (action.type) {
    case "LEVEL_UP":
      return state + 1;
    case "RESET":
      return 1;
    default:
      return state;
  }
}
