import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import store from "./redux/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#dad26b",
    },
    secondary: {
      light: "#0066ff",
      main: "#acb5b0",
      contrastText: "#ffff",
    },
  },
  typography: {
    fontFamily: [
      "Titillium Web",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
    button: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "2",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
