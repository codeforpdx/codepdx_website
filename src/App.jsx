import { useMemo, useState } from 'react';
// React Router Imports
import { BrowserRouter } from 'react-router-dom';
// Material UI Imports
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Theme Imports
import getTheme, { ColorModeContext } from './theme';
// Component Imports
import Layout from './Layout';
// Hook Imports
import useThemeDetector from './hooks/useThemeDetector';

function App() {
  const preferredTheme = useThemeDetector();

  const [mode, setMode] = useState(preferredTheme);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
