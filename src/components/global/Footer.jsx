// React Router Imports
import { Link as ReactRouterLink } from 'react-router-dom';
// Material UI Imports
import Box from '@mui/material/Box';
import Container from '@mui/system/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

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
    icon: <FaGithub size={45} />,
    ariaLabel: 'Github'
  },
  {
    href: 'https://www.linkedin.com/company/code-pdx/',
    icon: <FaLinkedin size={45} />,
    ariaLabel: 'Linked In'
  },
  {
    href: 'https://www.meetup.com/Code-for-PDX/',
    icon: <FaMeetup size={45} />,
    ariaLabel: 'Meetup.com'
  },
  {
    href: 'https://discord.gg/x6b573et',
    icon: <FaDiscord size={45} />,
    ariaLabel: 'Discord'
  }
];

// renders socialMediaLinks for placement in stack below
const renderSocialLinks = socialMediaLinks.map(({ ariaLabel, href, icon }) => (
  <Link
    component={ReactRouterLink}
    key={href}
    href={href}
    aria-label={`Check us out on ${ariaLabel}`}
    target="_blank"
    rel="noopener"
    sx={{
      color: '#000',
      display: 'flex',
      py: '25px',
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
        aria-label={`${link.title}`}
        ml={link.ml ?? null}
        sx={{
          color: '#000',
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

const footerContainerStyle = (theme) => ({
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  height: { xs: 'auto', sm: '200px' },
  '&::before': {
    content: '""',
    backgroundImage: 'url(/assets/socialsBlob.svg)',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    justifyContent: 'center',
    minHeight: '200px',
    position: 'absolute',
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
});

const logoBlobStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  backgroundSize: 'cover',
  backgroundImage: { md: 'url(/assets/logoBlob.svg)', sm: 'none' },
  backgroundRepeat: 'no-repeat',
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
    <Container component="footer" maxWidth="100%" sx={footerContainerStyle}>
      {/* this box contains the blob behind the roseLogo */}
      <Box sx={logoBlobStyle}></Box>
      <Stack direction={{ xs: 'row', sm: 'column', lg: 'row' }} flex={1}>
        {/* roseLogo box */}
        <Box
          component="img"
          alt="CODE PDX logo"
          aria-label="Code pdx"
          src={'/assets/rose_logo.png'}
          sx={{
            width: '75px',
            mt: '25px',
            ml: { xs: '0px', sm: '40px', lg: '35px' }
          }}
        />
        <Typography ml={{ xs: '10px', lg: '80px' }} mt="35px" variant="h5">
          CODE PDX
        </Typography>
      </Stack>
      {/* this box contains social links*/}
      <Stack direction="row" spacing={{ xs: 2, sm: 3 }}>
        {renderSocialLinks}
      </Stack>
      {/* this box contains the legal links and hook to add padding on viewport scale down */}
      <Box
        sx={{
          flex: '1',
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
