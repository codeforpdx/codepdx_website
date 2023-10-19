import { useState } from 'react';

// React Router Imports

import { BrowserRouter } from 'react-router-dom';
// Material UI Imports
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Theme Imports
import theme from './theme';
// Component Imports
import Layout from './Layout';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout darkMode={darkMode} setDarkMode={setDarkMode} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
