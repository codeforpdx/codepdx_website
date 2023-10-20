import { useState } from 'react';
import { AppBar, Toolbar, Typography, Switch, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" color={darkMode ? 'dark' : 'primary'} sx={{ height: '100px' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CODE PDX
        </Typography>
        <Typography variant="body1" marginRight={2}>
          Projects
        </Typography>
        <Typography variant="body1" marginRight={2}>
          Volunteer
        </Typography>
        <IconButton edge="end" color="inherit" onClick={handleThemeChange}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
