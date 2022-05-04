import { createTheme } from "@mui/material/styles";
import { React } from "react";

/**
 *
 * @returns {React.jsx}
 */
export const Theme = createTheme({
  palette: {
    primary: {
      main: "#5B7CFD",
      text: "#222222",
    },
    secondary: {
      main: "#fff",
      bg: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontWeight: 400,
  },
});
