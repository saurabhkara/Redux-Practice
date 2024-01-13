import { createStore } from "redux";
import combineReducers from "./reducer/todo";

const store = createStore(combineReducers);

export default store;
