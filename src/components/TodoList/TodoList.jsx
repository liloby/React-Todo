import { useState } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import NewTodoEnter from "../NewTodoEnter/NewTodoEnter";
import { v4 as uuidv4 } from "uuid";
import { Box, Grid, Card } from "@mui/material";
export default function TodoList({isMobile}) {
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
    {
      id: uuidv4().slice(-7),
      name: "Mow the lawn",
      difficulty: 3,
      date: Date.now(),
      completed: false,
    },
    {
      id: uuidv4().slice(-7),
      name: "Do the laundry",
      difficulty: 4,
      date: Date.now(),
      completed: false,
    },
    {
      id: uuidv4().slice(-7),
      name: "Study for the exam",
      difficulty: 5,
      date: Date.now(),
      completed: false,
    },
  ]);

  // Count the number of important tasks
  const [importantCount, setImportantCount] = useState(0);

  // Delete a todo
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    // Only decrement the important count if it's greater than 3
    if (importantCount >= 3) {
      setImportantCount(importantCount - 1);
    }
  }

  return (
    <>
      <NewTodoEnter setTodos={setTodos} todos={todos} isMobile={isMobile} />
      <Grid container sx={{ marginTop: 2 }}>
        {todos.map((todo, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={todo.id}>
            <TodoListItem
              key={todo.name}
              setTodos={setTodos}
              todo={todo}
              idx={idx}
              deleteTodo={deleteTodo}
              importantCount={importantCount}
              setImportantCount={setImportantCount}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
