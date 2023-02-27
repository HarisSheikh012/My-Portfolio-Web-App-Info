import { UpDownReducer } from "./UpDownReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  amount: UpDownReducer,
});
