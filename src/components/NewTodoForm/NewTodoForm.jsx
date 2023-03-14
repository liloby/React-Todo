import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function NewTodoForm({ setTodos, todos }) {
    const emptyTask = {
        name: "",
        difficulty: 1,
        date: Date.now(),
        completed: false,
    }
  const [task, setTask] = useState(emptyTask);

  const handleAddTask = () => {
    console.log("Hi")
    setTodos([ ...todos, { ...task, id: uuidv4().slice(-7)}]);
    setTask(emptyTask)
  };
    
  return (
    <div>
      <label htmlFor="">
        Task:
        <input
          value={task.name}
          onChange={(e) => setTask({...task, name: e.target.value})}
          type="text"
          className="name"
        />
      </label>
      <label htmlFor="">
        Difficulty:
        <select
          value={task.difficulty}
          onChange={(e) => setTask({... task, difficulty: parseInt(e.target.value)})}
          name=""
          id=""
          className="difficulty"
        >
          <option value="1">1 - Easy</option>
          <option value="2">2 - Moderate</option>
          <option value="3">3 - Challenging</option>
          <option value="4">4 - Difficult</option>
          <option value="5">5 - Very Difficult</option>
        </select>
      </label>
      <button onClick={handleAddTask} className="add-btn">
        Add Task
      </button>
    </div>
  );
}
