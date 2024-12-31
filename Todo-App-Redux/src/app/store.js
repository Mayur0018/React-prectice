import { configureStore } from "@reduxjs/toolkit";
import todoreducers from "../Features/TodoSlice";

export const store = configureStore({
  reducer: {
    Todos: todoreducers,
  },
});
