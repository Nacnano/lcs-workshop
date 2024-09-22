"use client";

import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return; // Avoid empty tasks
    setTodos([...todos, input]);
    setInput(""); // Clear input
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    // Normal CSS
    <div className="todoContainer">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        onKeyPress={(e) => e.key === "Enter" && addTodo()}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

    // TailwindCSS
    // <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-20 text-center">
    //   <h1 className="text-2xl font-semibold mb-5">To-Do List</h1>
    //   <div className="mb-4">
    //     <input
    //       type="text"
    //       value={input}
    //       onChange={(e) => setInput(e.target.value)}
    //       placeholder="Add a new task"
    //       onKeyPress={(e) => e.key === "Enter" && addTodo()}
    //       className="p-2 w-60 border rounded-md mr-3 focus:outline-none focus:ring-2 focus:ring-green-500"
    //     />
    //     <button
    //       onClick={addTodo}
    //       className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
    //     >
    //       Add
    //     </button>
    //   </div>
    //   <ul className="list-none p-0">
    //     {todos.map((todo, index) => (
    //       <li
    //         key={index}
    //         className="bg-gray-100 p-3 mb-3 flex justify-between items-center rounded-md"
    //       >
    //         {todo}
    //         <button
    //           onClick={() => deleteTodo(index)}
    //           className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-200"
    //         >
    //           Delete
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
