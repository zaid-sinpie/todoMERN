import axios from "axios";
import Create from "./Create.jsx";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodo(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-[#4c4c4c] mt-4 text-center gap-2">
      <h2 className="uppercase font-bold">To Do List</h2>
      <Create />
      {todos.length === 0 ? (
        <h3 className="uppercase font-bold">No Todos</h3>
      ) : (
        todos.map((todo, idx) => (
          <div
            className="bg-black flex justify-between rounded-md py-2 my-1 text-[#3e3e3e] text-start px-2"
            key={idx}
          >
            {todo.done ? (
              <div
                onClick={() => handleEdit(todo._id)}
                className={`w-fit px-2 rounded-sm bg-[#a5ff71] cursor-pointer line-through`}
              >
                <p>{todo.task}</p>
              </div>
            ) : (
              <div
                onClick={() => handleEdit(todo._id)}
                className={`w-fit px-2 rounded-sm bg-[#ff7b7b] cursor-pointer`}
              >
                <p>{todo.task}</p>
              </div>
            )}
            <p
              onClick={() => handleDelete(todo._id)}
              className="w-fit px-2 rounded-sm bg-[#e3e3e3] hover:bg-[#6c6c6c] hover:text-[#e3e3e3] cursor-pointer"
            >
              <i className="fa-solid fa-trash"></i>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
