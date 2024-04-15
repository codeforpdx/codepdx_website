// React Imports
import { useState, useRef } from 'react';
// React Router Imports
import { Link } from 'react-router-dom';
// Material UI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grow from '@mui/material/Grow';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
// Prop Types
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

// const logoBlobStyle = {
//   position: 'absolute',
//   bottom: 0,
//   left: -30,
//   right: 0,
//   top: -50,
//   height: '250px',
//   backgroundImage: 'url(/assets/codePdx/logo-blob-nav.svg)',
//   backgroundRepeat: 'no-repeat',
//   maxWidth: '200px'
// };
const navTextStyle = {
  textDecoration: 'none',
  justifyContent: 'center',
  '&:hover': {
    transform: 'scale(1.2)',
    textDecoration: 'underline',
    transition: ' transform 0.3s, textDecoration 0.3s'
  }
};

const hamburgerMenuTextStyle = {
  justifyContent: 'center',
  transition: ' transform 0.3s, textDecoration 0.3s',
  pt: '15px',
  pb: '15px',
  '&:hover': {
    transform: 'scale(1.3)',
    backgroundColor: '#56B6A1'
  }
};

const DarkModeToggle = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2
  }
}));

function NavBar({ darkMode, handleThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();

  // anchor for menu to pop from
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  const menuItems = (
    <List>
      <ListItem
        sx={{ ...hamburgerMenuTextStyle, color: theme.palette.primary.contrastText }}
        component={Link}
        to="/"
        onClick={handleClose}
      >
        Home
      </ListItem>
      <ListItem
        sx={{ ...hamburgerMenuTextStyle, color: theme.palette.primary.contrastText }}
        component={Link}
        to="/projects"
        onClick={handleClose}
      >
        Projects
      </ListItem>
      <ListItem
        sx={{ ...hamburgerMenuTextStyle, color: theme.palette.primary.contrastText }}
        component={Link}
        to="/volunteer"
        onClick={handleClose}
      >
        Volunteer
      </ListItem>
    </List>
  );

  return (
    <AppBar ref={anchorRef} component="nav" position="static" color={'primary'} enableColorOnDark>
      <Toolbar sx={{ height: '100px', alignItems: 'center' }}>
        {/* <Box sx={logoBlobStyle} display={{ xs: 'none', md: 'block' }} /> */}
        <Link to="/" style={navTextStyle} aria-label="Home">
          <Box
            component="img"
            position="relative"
            alt="CODE PDX logo"
            src={'/assets/codePdx/code-pdx-rose-logo-white.svg'}
            sx={{
              width: '75px',
              mr: { xs: '0px', md: '30px' },
              ml: { xs: '0px', md: '30px' }
            }}
          />
        </Link>
        <Typography component="h1" variant="h4" display={{ xs: 'none', sm: 'block' }} pl={'10px'}>
          <Link to="/" style={navTextStyle} aria-label="CODE PDX">
            CODE PDX
          </Link>
        </Typography>

        {/* Display for larger viewports */}
        <Typography
          variant="body1"
          ml={'auto'}
          display={{ xs: 'none', sm: 'block' }}
          marginRight={2}
          sx={navTextStyle}
        >
          <Link to="/" style={{ ...navTextStyle, fontWeight: 600 }} aria-label="Home">
            Home
          </Link>
        </Typography>
        <Typography
          variant="body1"
          // ml={'auto'}
          display={{ xs: 'none', sm: 'block' }}
          marginRight={2}
          sx={navTextStyle}
        >
          <Link
            to="/projects"
            style={{ ...navTextStyle, fontWeight: 600 }}
            aria-label="Our Projects"
          >
            Projects
          </Link>
        </Typography>
        <Typography
          variant="body1"
          display={{ xs: 'none', sm: 'block' }}
          marginRight={2}
          sx={navTextStyle}
        >
          <Link
            to="/volunteer"
            style={{ ...navTextStyle, fontWeight: 600 }}
            aria-label="Volunteer for CODE PDX"
          >
            Volunteer
          </Link>
        </Typography>

        {/* Hamburger menu for smaller viewports */}
        <Hidden smUp>
          <IconButton
            sx={{ ml: 'auto', mr: 3, fill: 'white' }}
            edge="end"
            aria-label="menu"
            onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Popover
          classes={{ paper: 'navPopoverPaper' }}
          sx={{
            '& .navPopoverPaper': {
              width: '100%',
              maxWidth: '100%',
              ml: '-16px',
              borderRadius: '0'
            }
          }}
          TransitionComponent={Grow}
          open={menuOpen}
          anchorEl={anchorRef.current}
          onClose={handleClose}
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
        {/* dark mode toggle */}
        <FormControlLabel
          control={<DarkModeToggle checked={darkMode} onChange={handleThemeChange} />}
        />
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  handleThemeChange: PropTypes.func.isRequired
};

export default NavBar;
