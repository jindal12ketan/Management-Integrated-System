import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({

  name: "counter",

  initialState: 0,

  reducers: {

    // reducers specify how the state should be updated when the corresponding actions are dispatched.

    increment: (state) => state + 1,

    decrement: (state) => (state <= 0 ? 0 : state-1),

  },

});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
// export const {countReducer} = counterSlice.reducer;