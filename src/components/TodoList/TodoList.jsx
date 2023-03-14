import { useState } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Take out the trash",
      difficulty: 1,
      date: Date.now(),
      completed: false,
    },
    {
      id: 2,
      task: "Grocery shopping",
      difficulty: 2,
      date: Date.now(),
      completed: false,
    },
  ]);
  return (
    <div>
      <div>
        <label htmlFor="">
          Task:
        <input type="text" className="task" />
        </label>
        <label htmlFor="">
          Difficulty:
        <select name="" id="" className="difficulty">
          <option value="1">1 - Easy</option>
          <option value="2">2 - Moderate</option>
          <option value="3">3 - Challenging</option>
          <option value="4">4 - Difficult</option>
          <option value="5">5 - Very Difficult</option>
        </select>
        </label>
        <button className="add-btn">Add Task</button>
      </div>
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
}
