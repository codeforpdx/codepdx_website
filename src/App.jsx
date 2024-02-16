// React Imports
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
// Material UI Imports
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
// Theme Imports
import getTheme from './theme';
// Component Imports
import Layout from './Layout';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={getTheme(darkMode ? 'dark' : 'light')}>
        <BrowserRouter>
          <Layout darkMode={darkMode} setDarkMode={setDarkMode} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
