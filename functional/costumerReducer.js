let startingID = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_COSTUMER":
      return [
        ...state,
        {
          id: ++startingID,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          address: action.payload.address,
          post_code: action.payload.post_code,
          city: action.payload.city,
          email: action.payload.email,
        },
      ];
    case "DELETE_COSTUMER":
      return state.filter((costumer) => costumer.id !== action.payload.id);
    case "EDIT_COSTUMER":
      return state.map((costumer) => {
        if (costumer.id === action.payload.id) {
          return {
            ...costumer,
            first_name: action.payload.first_name,
            last_name: action.payload.last_name,
            address: action.payload.address,
            post_code: action.payload.post_code,
            city: action.payload.city,
            email: action.payload.email,
          };
        } else {
          return costumer;
        }
      });
    default:
      return state;
  }
}
