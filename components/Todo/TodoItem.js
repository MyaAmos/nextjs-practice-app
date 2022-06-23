import React, { useState } from "react";
import {
  Grid,
  Typography,
  ListItem,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import styles from "./Todo.module.css";
import { useDispatch } from "react-redux";
import { availableColors, capitalize } from "../../pages/features/todo/colors";

const TodoItem = (props) => {
  const [newColor, setNewColor] = useState(props.color);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch({
      type: "todos/colorChange",
      payload: { id: props.id, color: event.target.value },
    });
  };

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={4}>
        <ListItem>
          <Typography className={styles.todoTitle} variant="h6">{props.text}</Typography>
        </ListItem>
      </Grid>
      <Grid item xs={2}>
        <ListItem>
          <Checkbox
            checked={props.completed}
            onClick={() => {
              dispatch({ type: "todos/todoToggled", payload: props.id });
            }}
          />
        </ListItem>
      </Grid>
      <Grid item xs={4}>
        <ListItem>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.color}
              label="Color"
              onChange={handleChange}
            >
                {availableColors.map((c) => {
                    return(
                        <MenuItem value={c} divider >{c}</MenuItem>
                    );
                })}
            </Select>
          </FormControl>
        </ListItem>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
