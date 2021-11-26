import { combineReducers, createStore } from "redux";
import boardListReducer from "./boardListReducer";

export default combineReducers({
    Lists: boardListReducer,
});



