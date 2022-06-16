const reducer = (state = { id: 0 }, action) => {
  return action.type === "SET_CATEGORY" ? { id: action.payload } : state;
};
export default reducer;
