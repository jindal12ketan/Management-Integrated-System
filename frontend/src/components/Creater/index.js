import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { APPCurrentUser } from "utils/validations";
import { decrement, increment } from "../../slices/counterSlice";

const Creater = () => {
  const { sessionToken, user } = APPCurrentUser();
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  console.log(sessionToken, user)
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      {count > 0 ? (
        <button onClick={() => dispatch(decrement())}>-</button>
      ) : null}
    </div>
  );
};

export default Creater;