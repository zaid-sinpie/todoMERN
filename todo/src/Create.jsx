import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState([]);

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        className="px-5 py-2 border-2 rounded-md outline-none"
        placeholder="Enter Your Task Here"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="button"
        onClick={handleAdd}
        className="px-5 py-2 font-bold rounded-md hover:bg-gray-700 hover:text-[#e3e3e3] bg-gray-400"
      >
        Add Task
      </button>
    </div>
  );
};

export default Create;
