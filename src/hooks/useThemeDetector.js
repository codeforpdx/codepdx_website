import useMediaQuery from '@mui/material/useMediaQuery';

const useThemeDetector = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return prefersDarkMode ? 'dark' : 'light';
};

export default useThemeDetector;
