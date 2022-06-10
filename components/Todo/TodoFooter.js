import { Button, Typography, Checkbox } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { availableColors, capitalize } from "../../pages/features/todo/colors";
import {
  StatusFilters,
  selectColors,
  selectStatus,
} from "../../pages/features/todo/filtersSlice";
import { selectUncompletedTodos } from "../../pages/features/todo/todosSlice";

const TodoFooter = () => {
  const colors = useSelector(selectColors);
  const status = useSelector(selectStatus);
  const todosRemaining = useSelector(selectUncompletedTodos);
  const dispatch = useDispatch();

  const RemainingTodos = ({ count }) => {
    const suffix = count === 1 ? "" : "s";

    return (
      <div>
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
      <div className="filters statusFilters">
        <h5>Filter by Status</h5>
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
          <Checkbox
            name={color}
            checked={checked}
            onChange={handleChange}
          />
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
      <div className="filters colorFilters">
        <h5>Filter by Color</h5>
        <form className="colorSelection">{renderedColors}</form>
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
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <Button
          className="button"
          onClick={() => {
            dispatch({ type: 'todos/allCompleted'})
          }}
        >
          Mark All Completed
        </Button>
        <Button
          className="button"
          onClick={() => {
            dispatch({ type: "todos/completedCleared"})
          }}
        >
          Clear Completed
        </Button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  );
};

export default TodoFooter;
