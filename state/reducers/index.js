import { combineReducers } from "redux";
import visibilityReducer from "./visibilityReducer";
import categorySwitcher from "./categorySwitcher";

const reducers = combineReducers({
  visible: visibilityReducer,
  switcher: categorySwitcher,
});

export default reducers;
