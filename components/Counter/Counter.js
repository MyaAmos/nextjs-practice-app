import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../../pages/features/counter/counterSlice";
import { Button, Input, Typography } from "@mui/material";
import { Container } from "@mui/system";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const countPlusTwo = useSelector((state) => state.counter.value + 2);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <Typography variant="h2" align="center" gutterBottom>
        Counter
      </Typography>
      <div className={styles.body}>
        <div className={styles.count}>
          <Typography variant="h5">{count}</Typography>
        </div>
        <div className={styles.btns}>
          <Button
            variant="outlined"
            className={styles.btn}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
          <Button
            variant="outlined"
            className={styles.btn}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
        </div>
        <div className={styles.amt}>
          <Input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </div>
        <div className={styles.btns}>
          <Button
            variant="outlined"
            className={styles.btn}
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </Button>
          <Button
            variant="outlined"
            className={styles.btn}
            onClick={() =>
              dispatch(incrementAsync(Number(incrementAmount) || 0))
            }
          >
            Add Async
          </Button>
        </div>
      </div>
      {/* omit additional rendering output here */}
    </div>
  );
}
