const cartMethods = {
  addOneToCart: (state, action) => {
    try {
      const { items } = state;
      const { productId } = action.payload;
      const item = items.find((item) => item.productId === productId);
      item ? item.quantity++ : items.push({ productId, quantity: 1 });
    } catch (e) {
      console.log("addOneToCart error :", e);
    }
  },

  addToCart: (state, action) => {
    try {
      const { items } = state;
      const { productId, quantity } = action.payload;
      if (items.find((item) => item.productId === productId)) {
        items.find((item) => item.productId === productId).quantity += quantity;
      } else {
        items.push(action.payload);
      }
    } catch (e) {
      console.log("addToCart error :", e);
    }
  },

  removeOneFromCart: (state, action) => {
    try {
      const { items } = state;
      const { productId } = action.payload;
      const item = items.find((item) => item.productId === productId);
      item
        ? item.quantity > 1
          ? item.quantity--
          : items.splice(items.indexOf(item), 1)
        : null;
    } catch (e) {
      console.log("removeOneFromCart error :", e);
    }
  },

  removeFromCart: (state, action) => {
    try {
      const { items } = state;
      const { productId } = action.payload;
      const item = items.find((item) => item.productId === productId);
      items.splice(items.indexOf(item), 1);
    } catch (e) {
      console.log("removeFromCart error :", e);
    }
  },
};
export default cartMethods;
