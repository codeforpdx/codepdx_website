import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  List,
  ListItem,
  Popover,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const logoBlobStyle = {
  position: 'absolute',
  bottom: 0,
  left: -30,
  right: 0,
  top: -50,
  height: '250px',
  backgroundImage: 'url(/assets/logoBlobNav.svg)',
  backgroundRepeat: 'no-repeat',
  maxWidth: '200px'
};

const navTextStyle = {
  textDecoration: 'none',
  color: 'inherit'
};

const menuTextStyle = {
  textDecoration: 'none',
  color: 'inherit',
  justifyContent: 'center',
  pb: '10px'
};
function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // anchor for menu to pop from its icon
  const anchorRef = useRef(null);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  const menuItems = (
    <List>
      <ListItem sx={menuTextStyle} component={Link} to="/" onClick={handleClose}>
        Home
      </ListItem>
      <ListItem sx={menuTextStyle} component={Link} to="/projects" onClick={handleClose}>
        Projects
      </ListItem>
      <ListItem sx={menuTextStyle} component={Link} to="/volunteer" onClick={handleClose}>
        Volunteer
      </ListItem>
    </List>
  );

  return (
    <AppBar component="nav" position="static" color={darkMode ? 'dark' : 'primary'}>
      <Toolbar sx={{ height: '100px', alignItems: 'center' }}>
        <Box sx={logoBlobStyle} display={{ xs: 'none', md: 'block' }} />
        <Link to="/" style={navTextStyle} aria-label="Home">
          <Box
            component="img"
            position="relative"
            alt="CODE PDX logo"
            src={'/assets/rose_logo.png'}
            sx={{
              width: '75px',
              mr: { xs: '0px', md: '30px' },
              ml: { xs: '0px', md: '30px' }
            }}
          />
        </Link>
        <Typography component="h1" variant="h4" display={{ xs: 'none', sm: 'block' }} pl={'10px'}>
          <Link to="/" style={navTextStyle} aria-label="Home">
            CODE PDX
          </Link>
        </Typography>

        {/* Display for larger viewports */}
        <Typography
          variant="body1"
          ml={'auto'}
          display={{ xs: 'none', sm: 'block' }}
          marginRight={2}
        >
          <Link to="/projects" style={navTextStyle} aria-label="Projects">
            Projects
          </Link>
        </Typography>
        <Typography variant="body1" display={{ xs: 'none', sm: 'block' }} marginRight={2}>
          <Link to="/volunteer" style={navTextStyle} aria-label="Volunteer">
            Volunteer
          </Link>
        </Typography>

        {/* Hamburger menu for smaller viewports */}
        <Hidden smUp>
          <IconButton
            sx={{ ml: 'auto', mr: 1 }}
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleToggle}
            ref={anchorRef}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <IconButton edge="end" color="inherit" onClick={handleThemeChange}>
          {darkMode ? <Brightness3Icon /> : <Brightness7Icon />}
        </IconButton>
        <Popover
          open={menuOpen}
          anchorEl={anchorRef.current}
          onClose={handleClose}
          // still need to fix this part.
          PaperProps={{
            style: {
              width: '100%',
              maxWidth: '100%'
            }
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          {menuItems}
        </Popover>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
