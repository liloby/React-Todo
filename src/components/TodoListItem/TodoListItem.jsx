import { useState } from "react";

export default function TodoListItem({ todo, idx, deleteTodo}) {
    const [completedTodo, setCompletedTodo] = useState([todo])


  return (
    <div className="todo-item-container">
      <h2 className="todo-item-id">{idx + 1}</h2>
      <h2>{todo.id}</h2>
      <h3 className="todo-item-name">Task: {todo.name}</h3>
      <h3 className="todo-item-difficulty">Difficulty: {todo.difficulty}</h3>
      <h3 className="todo-item-date">
        Date Created: {new Date(todo.date).toLocaleDateString("en-US")}
      </h3>
      <h3 className="todo-item-completed">
        Completed: {completedTodo.completed ? "Yes" : "No"}
      </h3>
      {!completedTodo.completed ?
      <button onClick={() => setCompletedTodo({completed: true})} >Finished ✔</button>
      :
      <button onClick={() => deleteTodo(todo.id)} >Delete ❌</button>
      }
    </div>
  );
}
