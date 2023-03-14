import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App";
import "./index.css";

const theme = createTheme({ 
  // palette: {
  //   primary: {
  //     main: '#F4A561'
  //   },
  //   secondary: {
  //     main: '#ffffff'
  //   },
  // },
  // typography: {
  //   h1: {
  //     fontSize: '3rem',
  //     fontWeight: 700,
  //   },
  //   h2: {
  //     fontSize: '2rem',
  //     fontWeight: 700,
  //   },
  //   h3: {
  //     fontSize: '1.5rem',
  //     fontWeight: 700,
  //   },
  // }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
