import {
  Typography,
  Input,
  Button,
  Grid,
  ListItem,
  Checkbox,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../pages/app/store";
import styles from "./Todo.module.css";
import TodoItem from "./TodoItem";
import { selectTodos } from "../../pages/features/todo/todosSlice";
import TodoFooter from "./TodoFooter";

const Todo = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  // const unsubscribe = store.subscribe(() => console.log("TOdos:" , todos));

  const [newTodo, setNewTodo] = useState();

  return (
    <div>
      <div className={styles.header}>
        <Typography variant="h4" align="center">
          Todo
        </Typography>
      </div>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item xs={4}>
          <Input
            aria-label="Set new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className={styles.btn}
            onClick={() => {
              dispatch({ type: "todos/todoAdded", payload: newTodo }),
                setNewTodo("");
            }}
          >
            Add Todo
          </Button>
        </Grid>
      </Grid>
      <div className={styles.todoList}>
        {todos.length > 0 && todos.map((todo) => {
          return (
            <div key={todo.id}>
              <TodoItem
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                color={todo.color}
              />
            </div>
          );
        })}
        {todos.length === 0 && <div><Typography variant="h5" align="center">No Todo List Items</Typography></div>}
        {/* {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <TodoItem
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                color={todo.color}
              />
            </div>
          );
        })} */}
      </div>
        <TodoFooter />
    </div>
  );
};

export default Todo;
