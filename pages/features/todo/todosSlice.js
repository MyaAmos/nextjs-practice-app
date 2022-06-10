import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true, color: "red" },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
};

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  console.log(maxId + 1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      // Can return just the new todos array - no extra object around it
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
            color: "red",
          },
        ],
      };
    }
    case "todos/todoToggled": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    }
    case "todos/colorChange": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }

          return {
            ...todo,
            color: action.payload.color,
          };
        }),
      };
    }
    case "todos/todoDeleted": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case "todos/allCompleted": {
      console.log("all completed")
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            completed: true,
          };
        }),
      };
    }
    case "todos/completedCleared": {
      //return state.todos.filter((todo) => !todo.completed);
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed)
      };
    }
    default:
      return state;
  }
}

export const selectTodos = (state) => state.todo.todos;
export const selectUncompletedTodos = (state) => {
  const completedTodos = state.todo.todos.filter((todo) => !todo.completed);
  return completedTodos.length;
};
