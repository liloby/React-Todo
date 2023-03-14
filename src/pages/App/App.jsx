import { useState } from "react";
import "./App.css";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TodoList from "../../components/TodoList/TodoList";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ bgcolor: "#c9e5ef", height: "100vh" }}>
      <Typography
        sx={{ textAlign: "center", margin: "2rem 1rem 1rem 1rem" }}
        variant={isMobile ? "h5" : "h1"}
        className="app-name"
      >
        <span style={{fontSize: '4rem'}}>React</span>{" "}
        <span style={{ transform: 'rotate(-20deg)', display: 'inline-block', color: '#008a10' }}>To</span>{" "}
        <span style={{ transform: 'rotate(20deg)', display: 'inline-block', color: '#ff0000' }}>Do</span>{" "}
        <span style={{fontSize: '4rem'}}>App</span>
      </Typography>
      <TodoList />
    </Container>
  );
}

export default App;
