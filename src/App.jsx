// React imports
import { useState } from "react";
// Material UI Imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Theme Imports
import theme from "./theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </ThemeProvider>
    </>
  );
}

export default App;
