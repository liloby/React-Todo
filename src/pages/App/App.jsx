import { useState } from "react";
import './App.css'
import { Box, Container, Paper, Typography } from "@mui/material";
import TodoList from "../../components/TodoList/TodoList";


function App() {
  
  return (
    <div>
      <h1 className="title">
        React To Do
      </h1>
      <TodoList />
    </div>
  );
}

export default App;
