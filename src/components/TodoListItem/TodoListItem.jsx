import { Button, Card } from "@mui/material";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoListItem({
  todo,
  idx,
  deleteTodo,
  importantCount,
  setImportantCount,
}) {
  const [completedTodo, setCompletedTodo] = useState([todo]);
  const [markImportant, setMarkImportant] = useState(false);

  // handle marking a task as completed
  function handleMarkImportant() {
    if (markImportant) {
      setImportantCount(importantCount - 1);
      setMarkImportant(false);
      return;
    }
    if (importantCount < 3) {
    setImportantCount(importantCount + 1);
    setMarkImportant(true);
    }
  }

  return (
    <Card
      className="todo-item-container"
      sx={{
        position: "relative",
        p: 3,
        textAlign: "center",
        m: 1,
        borderRadius: ".8rem",
        bgcolor:
          todo.difficulty === 1
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
      <Button
        onClick={handleMarkImportant}
        disableElevation
        disableRipple
        sx={{
          position: "absolute",
          top: ".5rem",
          left: "-.5rem",
          ":hover": { bgcolor: "transparent" },
        }}
      >
        <PriorityHighIcon
          sx={{
            color: markImportant == true ? "red" : "#00000054",
            ':hover': { color: 'red' }
          }}
        />
      </Button>
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
