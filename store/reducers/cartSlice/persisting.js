import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import reducer from ".";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
export default persistedReducer;
