import { Button, Card, Box } from "@mui/material";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoListItem({
  todo,
  deleteTodo,
  importantCount,
  setImportantCount,
  todos,
  setTodos,
  totalStars,
  setTotalStars,
  idx,
}) {
  const [star, setStar] = useState(todo.difficulty);

  // handle marking a task as important
  function handleMarkImportant() {
    // limit the number of important tasks to 3
    if (importantCount < 3) {
      setImportantCount(importantCount + 1);
      // create a new array of todos, with the updated todo
      const updatedTodos = todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, important: true };
        }
        return t;
      });
      setTodos(updatedTodos);
    }
    if (todo.important === true) {
      setImportantCount(importantCount - 1);
      const updatedTodos = todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, important: false };
        }
        return t;
      });
      setTodos(updatedTodos);
    }
  }

  // handle marking a task as completed
  function handleCompleteTodo() {
    setTotalStars(totalStars + star);
    // create a new array of todos, with the updated todo
    const updatedTodos = todos.map((t) => {
      // if the todo id matches the id of the todo we want to update, return the updated todo
      if (t.id === todo.id) {
        return { ...t, completed: true };
      }
      // otherwise, return the original todo
      return t;
    });
    setTodos(updatedTodos);
  }

  return (
    <Card
      className="todo-item-container"
      sx={{
        position: "relative",
        boxShadow: "5px 5px 8px #7373732b",
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
            color: todo.important == true ? "red" : "#00000054",
            ":hover": { color: "red" },
          }}
        />
      </Button>
      {/* <h2 className="todo-item-id">{idx + 1}</h2> */}
      <h3 className="todo-item-name">Task: {todo.name}</h3>
      <h3 className="todo-item-date">
        Created on: {new Date(todo.date).toLocaleDateString("en-US")}
      </h3>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", margin: '-1rem 0' }}
      >
        <h3>Difficulty:</h3>
        {todo.difficulty === 1 ? (
          <StarIcon sx={{ color: "#ffbd00" }} />
        ) : todo.difficulty === 2 ? (
          <>
            <StarIcon sx={{ color: "#ffbd00" }} />
            <StarIcon sx={{ color: "#ffbd00" }} />
          </>
        ) : todo.difficulty === 3 ? (
          <>
            <StarIcon sx={{ color: "#ffbd00" }} />
            <StarIcon sx={{ color: "#ffbd00" }} />
            <StarIcon sx={{ color: "#ffbd00" }} />
          </>
        ) : todo.difficulty === 4 ? (
          <>
            <StarIcon sx={{ color: "#ffbd00" }} />
            <StarIcon sx={{ color: "#ffbd00" }} />
            <StarIcon sx={{ color: "#ffbd00" }} />
            <StarIcon sx={{ color: "#ffbd00" }} />
          </>
        ) : todo.difficulty === 5 ? (
          <>
            <StarIcon sx={{ color: "#ffbd00" }} />
            <StarIcon sx={{ color: "#ffbd00" }} />
            <StarIcon sx={{ color: "#ffbd00" }} />
            <StarIcon sx={{ color: "#ffbd00" }} />
            <StarIcon sx={{ color: "#ffbd00" }} />
          </>
        ) : (
          <StarIcon sx={{ color: "#ffbd00" }} />
        )}
      </Box>
      <h3 className="todo-item-completed">
        Completed: {todo.completed ? "Yes" : "No"}
      </h3>
      {!todo.completed ? (
        <Button
          sx={{ ":hover": { bgcolor: "#effcff" } }}
          onClick={handleCompleteTodo}
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
