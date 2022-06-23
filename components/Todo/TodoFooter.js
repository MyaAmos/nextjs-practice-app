import { Button, Typography, Checkbox } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { availableColors, capitalize } from "../../pages/features/todo/colors";
import {
  StatusFilters,
  selectColors,
  selectStatus,
} from "../../pages/features/todo/filtersSlice";
import styles from "./Todo.module.css";
import { selectUncompletedTodos } from "../../pages/features/todo/todosSlice";

const TodoFooter = () => {
  const colors = useSelector(selectColors);
  const status = useSelector(selectStatus);
  const todosRemaining = useSelector(selectUncompletedTodos);
  const dispatch = useDispatch();

  const RemainingTodos = ({ count }) => {
    const suffix = count === 1 ? "" : "s";

    return (
      <div className={styles.remaining}>
        <h5>Remaining Todos</h5>
        <strong>{count}</strong> item{suffix} left
      </div>
    );
  };

  const StatusFilter = ({ value: status, onChange }) => {
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
      const value = StatusFilters[key];
      const handleClick = () => onChange(value);
      const className = value === status ? "selected" : "";

      return (
        <li key={value}>
          <Button className={className} onClick={handleClick}>
            {key}
          </Button>
        </li>
      );
    });
    return (
      <div className={styles.status}>
        <h5 >Filter by Status</h5>
        <ul>{renderedFilters}</ul>
      </div>
    );
  };

  const ColorFilters = ({ value: colors, onChange }) => {
    const renderedColors = availableColors.map((color) => {
      const checked = colors.includes(color);
      const handleChange = () => {
        const changeType = checked ? "removed" : "added";
        onChange(color, changeType);
      };

      return (
        <label key={color}>
          <Checkbox name={color} checked={checked} onChange={handleChange} />
          <span
            className="color-block"
            style={{
              backgroundColor: color,
            }}
          ></span>
          {capitalize(color)}
        </label>
      );
    });
    return (
      <div>
        <h5 className={styles.colorFilter}>Filter by Color</h5>
        <form className={styles.colorFilters}>{renderedColors}</form>
      </div>
    );
  };

  const onColorChange = (color, changeType) => {
    //console.log("Color change: ", { color, changeType });
    dispatch({
      type: "filters/colorFilterChanged",
      payload: { color: color, changeType: changeType },
    });
  };
  const onStatusChange = (status) => {
    console.log("Status change: ", status);
    dispatch({
      type: "filters/statusFilterChanged",
      payload: status,
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.actions}>
        <h5 className={styles.actions_title}>Actions</h5>
        <div className={styles.actionButtons}>
          <Button
            className={styles.bttn}
            onClick={() => {
              dispatch({ type: "todos/allCompleted" });
            }}
          >
            Mark All Completed
          </Button>
          <Button
            className={styles.bttn}
            onClick={() => {
              dispatch({ type: "todos/completedCleared" });
            }}
          >
            Clear Completed
          </Button>
        </div>
      </div>

      <RemainingTodos count={todosRemaining}/>
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters
        value={colors}
        onChange={onColorChange}
        className={styles.colorFilters}
      />
    </footer>
  );
};

export default TodoFooter;
