// React Router Imports
import { Link as ReactRouterLink } from 'react-router-dom';
// Material UI Imports
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/system/Container';

// Other Library Imports
import dayjs from 'dayjs';
import { FaDiscord, FaGithub, FaLinkedin, FaMeetup } from 'react-icons/fa6';

// Legal links
const legalLinks = [
  {
    href: 'https://www.codepdx.org/',
    title: 'About'
  },
  {
    href: 'https://www.codepdx.org/',
    title: 'Code of Conduct'
  },
  {
    href: 'https://www.codepdx.org/',
    title: 'Contact Us'
  },
  {
    href: 'https://www.codepdx.org/',
    ml: 0.5,
    text: `©${dayjs().year()}`,
    title: 'CODE PDX'
  }
];

// Social media links
const socialMediaLinks = [
  {
    href: 'https://github.com/codeforpdx/',
    icon: <FaGithub size={45} />
  },
  {
    href: 'https://www.linkedin.com/company/code-pdx/',
    icon: <FaLinkedin size={45} />
  },
  {
    href: 'https://www.meetup.com/Code-for-PDX/',
    icon: <FaMeetup size={45} />
  },
  {
    href: 'https://discord.gg/x6b573et',
    icon: <FaDiscord size={45} />
  }
];

// renders socialMediaLinks for placement in stack below
const renderSocialLinks = socialMediaLinks.map(({ href, icon }) => (
  <Link
    component={ReactRouterLink}
    key={href}
    href={href}
    target="_blank"
    rel="noopener"
    color="#000"
    sx={{
      display: 'flex',
      alignItems: 'center',
      padding: '25px',
      '&:hover': {
        color: 'secondary.main'
      }
    }}
  >
    {icon}
  </Link>
));

// maps legalLinks used for placement in stack below
const renderLegalLinks = legalLinks.map((link, index) => (
  <Box key={link.title + index}>
    <Typography
      key={link.title}
      variant="body1"
      color="tertiary.main"
      mr={{ sm: '10px' }}
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', sm: 'flex-end' },
        p: { xs: '10px', sm: '5px' }
      }}
    >
      {link.text ?? null}
      <Link
        component={ReactRouterLink}
        to={link.href}
        underline="none"
        color="#000"
        ml={link.ml ?? null}
        sx={{
          '&:hover': {
            color: 'primary.main'
          }
        }}
      >
        {link.title}
      </Link>
    </Typography>
  </Box>
));

// const socialBlobStyle = (theme) => ({
//   backgroundImage: 'url(/assets/socialsBlob.svg)',
//   backgroundSize: 'auto',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   display: 'flex',
//   flexGrow: 1,
//   justifyContent: 'center',
//   minHeight: '200px',
//   zIndex: '-1',
//   [theme.breakpoints.down('sm')]: {
//     backgroundImage: 'none',
//     ml: '0',
//     minHeight: '150px'
//   }
// });

const logoBlobStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  backgroundSize: 'cover',
  backgroundImage: { md: 'url(/assets/logoBlob.svg)', sm: 'none' },
  backgroundRepeat: 'no-repeat',
  // display: 'flex',
  // backgroundPosition: 'left bottom',
  zIndex: '-1',
  display: {
    lg: 'flex',
    xs: 'none'
  },
  maxWidth: '200px'
};

const Footer = () => {
  const theme = useTheme();

  return (
    // this container contains the entire footer
    <Container
      component="footer"
      maxWidth="100vw"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        // position: 'fixed',
        // bottom: 0,
        // width: '100%',
        // maxWidth: '100vw',
        height: { xs: 'auto', sm: '200px' },
        '&::before': {
          content: '""',
          backgroundImage: 'url(/assets/socialsBlob.svg)',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
          minHeight: '200px',
          position: 'absolute', // Required to position ::before
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          [theme.breakpoints.down('sm')]: {
            backgroundImage: 'none',
            left: '0',
            minHeight: '150px'
          }
        }
      }}
    >
      <Box sx={logoBlobStyle}></Box>
      <Stack direction={{ xs: 'row', sm: 'column', lg: 'row' }}>
        {/* roseLogo box */}
        <Box
          component="img"
          alt="CODE PDX logo"
          src={'/assets/rose_logo.png'}
          sx={{
            width: '75px',
            mt: '25px',
            ml: { xs: '0px', sm: '40px', lg: '50px' }
          }}
        />
        {/* {logoBlobStyle} */}
        <Typography ml={{ xs: '10px', lg: '60px' }} mt="35px" variant="h5">
          CODE PDX
        </Typography>
      </Stack>

      {/* this box and stack contain the social icons and blob*/}
      {/* <Box
        sx={{
          position: 'absolute', // Absolute positioning
          left: '50%', // Centering
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          minWidth: '1000px',
          zIndex: -1,
          [theme.breakpoints.down('sm')]: {
            position: 'static', // Remove absolute positioning
            transform: 'none' // Reset transform
          }
        }}
      > */}
      <Box
        sx={{
          display: 'flex'
        }}
      >
        {renderSocialLinks}
      </Box>
      {/* </Box> */}
      {/* this stack contains the legal links and hook to add padding on viewport scale down */}
      <Box
        sx={{
          [theme.breakpoints.down('sm')]: {
            p: '8px',
            pb: '40px'
          }
        }}
      >
        {renderLegalLinks}
      </Box>
    </Container>
  );
};

export default Footer;
