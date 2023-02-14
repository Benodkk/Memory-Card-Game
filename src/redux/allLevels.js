function setAllLevels(value) {
  return {
    type: "SET_LEVELS",
    payload: value,
  };
}

export { setAllLevels };

export function allLevelsReducer(state = {}, action) {
  switch (action.type) {
    case "SET_LEVELS":
      return action.payload;
    default:
      return state;
  }
}
