import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "Todos",
  initialState: [],
  reducers: {
    addTodos: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    delteTodo: (state, action) => {
      return state.filter((todos) => todos.id !== action.payload);
    },
  },
});

export const { addTodos, delteTodo } = todoslice.actions;
export default todoslice.reducer;
