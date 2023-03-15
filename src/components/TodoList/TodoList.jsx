import { useState, useMemo, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import TodoListItem from "../TodoListItem/TodoListItem";
import NewTodoEnter from "../NewTodoEnter/NewTodoEnter";
import { v4 as uuidv4 } from "uuid";
import { Box, Grid, Card, Button, Badge } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function TodoList({ isMobile }) {
  const [todos, setTodos] = useLocalStorage("todos", [
    {
      id: uuidv4().slice(-7),
      name: "Take out the trash",
      difficulty: 1,
      date: 1678755641247,
      completed: false,
      important: false,
    },
    {
      id: uuidv4().slice(-7),
      name: "Grocery shopping",
      difficulty: 2,
      date: 1678655641247,
      completed: false,
      important: false,
    },
    {
      id: uuidv4().slice(-7),
      name: "Study for the exam",
      difficulty: 5,
      date: 1678555641247,
      completed: false,
      important: false,
    },
    {
      id: uuidv4().slice(-7),
      name: "Mow the lawn",
      difficulty: 3,
      date: 1678455641247,
      completed: false,
      important: false,
    },
    {
      id: uuidv4().slice(-7),
      name: "Do the laundry",
      difficulty: 4,
      date: 1678255641247,
      completed: false,
      important: false,
    },
  ]);

  // Count the number of stars earned
  const [totalStars, setTotalStars] = useLocalStorage("totalStars", 0);

  // Count the number of important tasks
  const [importantCount, setImportantCount] = useLocalStorage(
    "importantCount",
    0
  );

  // Delete a todo
  function deleteTodo(id) {
    // Only decrement the important count if the todo is marked important
    if (todos.find((todo) => todo.id === id).important) {
      setImportantCount(importantCount - 1);
    }
    setTodos(todos.filter((todo) => todo.id !== id));
    // Only decrement the important count if it's greater than 3 and the todo is important
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
        <Badge
          badgeContent={totalStars}
          color="secondary"
          overlap="circular"
          max={999}
          showZero
        >
          <StarIcon sx={{ fontSize: "2rem", color: "#ffbd00" }} />
        </Badge>
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
              setTotalStars={setTotalStars}
              totalStars={totalStars}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
