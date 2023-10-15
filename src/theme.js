import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: { fontFamily: 'Mathilda, Monserrat, Roboto, sans-serif' },
  palette: {
    primary: {
      main: '#56B6A1',
      contrastText: '#fff'
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

export default theme;
