import { useState } from "react";
import "./App.css";
import { useTheme } from "@mui/material/styles";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
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
    <Container
      sx={{
        zIndex: "1",
        height: "95vh",
        paddingBottom: "1rem",
      }}
    >
      <Typography
        sx={{ textAlign: "center", margin: "2rem 1rem 1rem 1rem" }}
        variant={isMobile ? "h5" : "h1"}
        className="app-name"
      >
        <span style={{ fontSize: isMobile ? "3rem" : "4rem" }}>React</span>{" "}
        <span
          style={{
            transform: "rotate(-20deg)",
            display: "inline-block",
            color: "#008a10",
          }}
        >
          To
        </span>{" "}
        {isMobile ? (
          <PhoneIphoneIcon
            sx={{
              transform: "translate(0px, -10px)",
              margin: "-.2rem .2rem -.2rem -.2rem",
              fontSize: "1rem",
            }}
          />
        ) : (
          ""
        )}
        <span
          style={{
            transform: "rotate(20deg)",
            display: "inline-block",
            color: "#ff0000",
          }}
        >
          Do
        </span>{" "}
        <span style={{ fontSize: isMobile ? "3rem" : "4rem" }}>App</span>
      </Typography>
      <TodoList isMobile={isMobile} />
    </Container>
  );
}

export default App;
