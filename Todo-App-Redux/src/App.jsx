import { useState } from "react";
import { addTodos, delteTodo } from "./Features/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const [input, searchInput] = useState("");
  const todos = useSelector((state) => state.Todos);
  console.log(todos);
  const dispatch = useDispatch();
  const AddTodos = () => {
    if (input.trim() !== "") {
      dispatch(addTodos(input));
      searchInput("");
    }
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => searchInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={AddTodos}
        >
          Add Todo
        </button>
        <ul>
          {todos.map((todositems, index) => (
            <li key={index}>
              {todositems.text}
              <button onClick={() => dispatch(delteTodo(todositems.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
