import { Button, Card } from "@mui/material";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoListItem({ todo, idx, deleteTodo }) {
  const [completedTodo, setCompletedTodo] = useState([todo]);

  return (
    <Card
      className="todo-item-container"
      sx={{
        p: 3,
        textAlign: "center",
        m: 1,
        borderRadius: ".8rem",
        bgcolor:todo.difficulty === 1
        ? "#ffffff"
        : todo.difficulty === 2
        ? "#ebffe5"
        : todo.difficulty === 3
        ? "#fffce0"
        : todo.difficulty === 4
        ? "#ffeacb"
        : todo.difficulty === 5
        ? "#ffd6d6"
        : "#f4f4f4",
      }}
    >
      <h2 className="todo-item-id">{idx + 1}</h2>
      <h3 className="todo-item-name">Task: {todo.name}</h3>
      <h3 className="todo-item-difficulty">Difficulty: {todo.difficulty}</h3>
      <h3 className="todo-item-date">
        Date Created: {new Date(todo.date).toLocaleDateString("en-US")}
      </h3>
      <h3 className="todo-item-completed">
        Completed: {completedTodo.completed ? "Yes" : "No"}
      </h3>
      {!completedTodo.completed ? (
        <Button
          sx={{ ":hover": { bgcolor: "#effcff" } }}
          onClick={() => setCompletedTodo({ completed: true })}
        >
          <DoneIcon />
        </Button>
      ) : (
        <Button
          sx={{ ":hover": { bgcolor: "#ffeff4" } }}
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </Button>
      )}
    </Card>
  );
}
