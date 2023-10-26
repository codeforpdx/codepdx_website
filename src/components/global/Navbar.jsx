import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const logoBlobStyle = {
  position: 'absolute',
  bottom: 0,
  left: -30,
  right: 0,
  top: -50,
  height: '250px',
  backgroundImage: { md: 'url(/assets/logoBlobNav.svg)', sm: 'none' },
  backgroundRepeat: 'no-repeat',
  display: {
    lg: 'flex',
    xs: 'none'
  },
  maxWidth: '200px'
};

const textStyle = {
  textDecoration: 'none',
  color: 'inherit'
};

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" color={darkMode ? 'dark' : 'primary'}>
      <Toolbar sx={{ height: '100px', alignItems: 'center' }}>
        <Box sx={logoBlobStyle}></Box>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Box
            position={'relative'}
            component="img"
            alt="CODE PDX logo"
            aria-label="Code pdx"
            zIndex={2}
            src={'/assets/rose_logo.png'}
            sx={{
              width: '75px',
              mr: '30px',
              ml: { xs: '0px', sm: '30px', lg: '20px' }
            }}
          />
        </Link>
        <Link to="/" style={textStyle}>
          <Typography display={{ xs: 'none', sm: 'block' }} pl={'15px'} flex={1} variant="h4">
            CODE PDX
          </Typography>
        </Link>
        <Typography variant="body1" ml={'auto'} marginRight={2}>
          <Link to="/projects" style={textStyle}>
            Projects
          </Link>
        </Typography>
        <Typography style={textStyle} variant="body1" marginRight={2}>
          <Link to="/volunteer" style={textStyle}>
            Volunteer
          </Link>
        </Typography>
        <IconButton edge="end" color="inherit" onClick={handleThemeChange}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
