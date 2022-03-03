import { combineReducers } from "redux";
import weatherReducer from "./reducer";

const rootReducer = combineReducers({
  data: weatherReducer,
});

export default rootReducer;