import { createContext } from 'react';
import { createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const getTheme = (mode) =>
  createTheme({
    typography: { fontFamily: 'Mathilda, Monserrat, Roboto, sans-serif' },
    palette: {
      mode,
      dark: {
        main: '#121212',
        contrastText: '#fff'
      },
      primary: {
        main: mode === 'dark' ? '#121212' : '#56B6A1',
        contrastText: mode === 'dark' ? '#121212' : '#fff'
      },
      secondary: {
        main: '#B6ECE2',
        contrastText: '#fff'
      },
      tertiary: {
        main: '#CC6566',
        contrastText: '#fff'
      },
      quaternary: {
        main: '#304C46',
        contrastText: '#fff'
      },
      quinary: {
        main: '#1F2725',
        contrastText: '#fff'
      }
    }
  });

export default getTheme;
