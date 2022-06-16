export const addToCart = (product, quantity) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity },
    });
  };
};
export const removeFromCart = (product, quantity) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { product, quantity },
    });
  };
};
