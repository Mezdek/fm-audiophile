const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.includes(action.payload.product)
        ? [...state, action.payload]
        : [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((n) => n !== action.payload);
    default:
      return state;
  }
};
export default reducer;
[
  {product: 1, quantity: 2},
]