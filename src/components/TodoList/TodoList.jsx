import { useState } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import NewTodoForm from "../NewToDoForm/NewTodoForm";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4().slice(-7),
      name: "Take out the trash",
      difficulty: 1,
      date: Date.now(),
      completed: false,
    },
    {
      id: uuidv4().slice(-7),
      name: "Grocery shopping",
      difficulty: 2,
      date: Date.now(),
      completed: false,
    },
  ]);

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <NewTodoForm setTodos={setTodos} todos={todos} />
      {todos.map((todo, idx) => (
        <TodoListItem
          key={todo.name}
          setTodos={setTodos}
          todo={todo}
          idx={idx}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
