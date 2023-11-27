import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "../../slices/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      {count > 0 ? (
        <button onClick={() => dispatch(decrement())}>-</button>
      ) : null}
    </div>
  );
};

export default Home;
