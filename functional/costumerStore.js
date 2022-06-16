import { createStore } from "redux";
import costumerReducer from "./costumerReducer";

const costumerStore = createStore(costumerReducer);

export default costumerStore;

// const store = {
//   costumers: [
//     {
//       id: 1,
//       first_name: "John",
//       last_name: "Doe",
//       address: "musterstrasse 22",
//       post_code: 12345,
//       city: "Anytown",
//       email: "john-doe@mail.com",
//     },
//   ],
// };

// module.exports = store;
