import { useState } from "react";

export default function TodoApp() {
  const [todos, SetTodos] = useState([]);
  const [inputs, SetInputs] = useState("");

  const inputsValues = (e) => {
    SetInputs(e.target.value);
  };

  const AddTodo = () => {
    if (inputs.trim() !== "") {
      SetTodos([...todos, inputs]);
      SetInputs("");
    }
  };

  const DeleteTodo = () => {
    SetTodos(todos.filter((index) => index !== index));
  };

  const UpdateTodo = (index) => {
    const TodoUpdate = prompt("Update Value", todos[index]);
    const NewTodos = [...todos];
    console.log(NewTodos)
    NewTodos[index] = TodoUpdate;
    SetTodos(NewTodos);
  };
  return (
    <>
      <h1 className="absolute top-0 mt-9">Todo App</h1>
      <div className="w-full max-w-sm min-w-[200px]">
        <input
          className="w-[250px] bg-transparent placeholder:text-slate-400 mt-10 mr-2 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Type here..."
          value={inputs}
          onChange={inputsValues}
        />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={AddTodo}
        >
          Add Todo
        </button>
        <ul>
          {todos.map((todositems, index) => (
            <li key={index}>
              {todositems}
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={DeleteTodo}
              >
                Delete
              </button>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={()=>UpdateTodo(index)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
