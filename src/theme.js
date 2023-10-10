import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: { fontFamily: "Roboto, sans-serif" },
  palette: {
    primary: {
      light: "#039686",
      main: "#017969",
      dark: "#004d3e",
      slight: "#8fc2bb",
      contrastText: "#fff",
    },
    secondary: {
      light: "#b32126",
      main: "#961020",
      dark: "#790111",
      contrastText: "#fff",
    },
    tertiary: {
      light: "#dbc584",
      main: "#DEBC59",
      dark: "#dbb032",
      contrastText: "#fff",
    },
  },
});

export default theme;
