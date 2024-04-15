// React Imports
import { useMemo, useState } from 'react';
// React Router Imports
import { BrowserRouter } from 'react-router-dom';
// Material UI Imports
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
// Theme Imports
import getTheme from './theme';
// Component Imports
import Layout from './Layout';
import { useMediaQuery } from '@mui/material';

function App() {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useState(prefersDark);
  const theme = useMemo(() => getTheme(isDarkMode ? 'dark' : 'light'), [isDarkMode]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
