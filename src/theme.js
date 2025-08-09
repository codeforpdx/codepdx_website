import { createTheme } from '@mui/material/styles';

const getTheme = (mode) =>
  createTheme({
    typography: { fontFamily: 'Mathilda, Monserrat, Roboto, sans-serif' },
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#56B6A1' : '#56B6A1',
        contrastText: mode === 'dark' ? '#fff' : '#1D1B20',
        starkContrast: mode === 'dark' ? '#fff' : '#000',
        invertContrast: mode === 'dark' ? '#000' : '#fff',
        boxOutline: mode === 'dark' ? '#30363d' : '#B6ECE2',
        cardFill: mode === 'dark' ? 'rgb(29, 27, 32)' : 'rgba(217, 217, 217, 0.4)'
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
      },
      senary: {
        main: '#56B6A1',
        contrastText: '#fff'
      },
      septenary: {
        main: mode === 'dark' ? '#56B6A1' : '#1D1B20',
        contrastText: '#fff'
      }
    }
  });

export default getTheme;
