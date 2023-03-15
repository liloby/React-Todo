import { useState, useMemo, useEffect } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import NewTodoEnter from "../NewTodoEnter/NewTodoEnter";
import { v4 as uuidv4 } from "uuid";
import { Box, Grid, Card, Button } from "@mui/material";
export default function TodoList({ isMobile }) {
  const [todos, setTodos] = useState(() => {
    // Get the todos from local storage
    const savedTodos = localStorage.getItem("todos");
    const initialTodos = JSON.parse(savedTodos)
    // If there are no todos, return the default todos
    return initialTodos ||
    [
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
  ];
});

useEffect(() => {
  // Save the todos to local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos, setTodos]);

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

  // Sort the todos by difficulty from least to most difficult
  const sortedTodosDifficulty = useMemo(() => {
    return [...todos].sort((a, b) => a.difficulty - b.difficulty);
  }, [todos]);

  // Sort the todos by date most recent first
  const sortedTodosDate = useMemo(() => {
    return [...todos].sort((a, b) => b.date - a.date);
  }, [todos]);

  return (
    <>
      <NewTodoEnter setTodos={setTodos} todos={todos} isMobile={isMobile} />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button onClick={() => setTodos(sortedTodosDifficulty)}>
          Sort by difficulty
        </Button>
        <Button onClick={() => setTodos(sortedTodosDate)}>Sort by date</Button>
      </Box>
      <Grid container sx={{ marginTop: 2 }}>
        {todos.map((todo, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={todo.id}>
            <TodoListItem
              key={todo.name}
              setTodos={setTodos}
              todos={todos}
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
