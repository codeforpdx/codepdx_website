import { useState } from 'react';
import { AppBar, Toolbar, Typography, Switch, Box, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const logoBlobStyle = {
  position: 'absolute',
  bottom: 0,
  left: -30,
  right: 0,
  top: -50,
  // backgroundSize: 'cover',
  backgroundImage: { md: 'url(/assets/logoBlobNav.svg)', sm: 'none' },
  backgroundRepeat: 'no-repeat',
  zIndex: 1,
  display: {
    lg: 'flex',
    xs: 'none'
  },
  maxWidth: '200px'
};

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  underline: 'hover'
};

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" color={darkMode ? 'dark' : 'primary'} sx={{ height: '100px' }}>
      <Box sx={logoBlobStyle}></Box>
      <Toolbar>
        <Typography variant="h6">CODE PDX</Typography>
        <Typography sx={linkStyle} variant="body1" ml={'auto'} marginRight={2}>
          <Link to="/projects">Projects</Link>
        </Typography>
        <Typography variant="body1" marginRight={2}>
          <Link to="/volunteer">Volunteer</Link>
        </Typography>
        <IconButton edge="end" color="inherit" onClick={handleThemeChange}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
