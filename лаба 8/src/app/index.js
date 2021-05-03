import { combineReducers } from "redux";
import friendlist from "./UserSelect";

const allReducers = combineReducers({
  friends: friendlist
});

export default allReducers;
