import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import todoReducer from "../features/todo/todosSlice";
import filterReducer from "../features/todo/filtersSlice";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   posts: postsReducer,
//   todo: todoReducer,
//   filters: filterReducer,
// });
export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    todo: todoReducer,
    filters: filterReducer,
  },
});
