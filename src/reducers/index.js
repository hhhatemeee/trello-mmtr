import { combineReducers } from "redux";
import boardListReducer from "./boardListReducer";

export default combineReducers({
    Lists: boardListReducer,
});



