import { combineReducers } from "redux";

import todosReducer from "./todosSlice";
import filtersReducer from "./filtersSlice";

const todoRootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
});

export default todoRootReducer;
