import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncreaseByAmount = () => {
    dispatch(incrementByAmount(5));
  };

  return (
    <div>
      <h3>Count {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncreaseByAmount}>Increase by 5</button>
    </div>
  );
};

export default CounterView;
