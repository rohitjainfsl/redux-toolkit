import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from "./slices/CounterSlice";

function CounterRedux() {
    const dispatch = useDispatch()
    const countStateVar = useSelector((state) => {return state.counter.count})
  return (
    <>
      <button onClick={() => dispatch(incrementCounter)}>Increment</button>
      <p>{countStateVar}</p>
      <button onClick={() => dispatch(decrementCounter)}>Decrement</button>
    </>
  );
}

export default CounterRedux;
