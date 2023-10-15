// Material UI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Other Library Imports
import dayjs from 'dayjs';
import { FaDiscord, FaGithub, FaLinkedin, FaMeetup } from 'react-icons/fa6';
// Image Imports
import roseLogo from '/assets/rose_logo.png';

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
    target: '_blank',
    rel: 'noopener',
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
    target: '_blank',
    rel: 'noopener'
  },
  {
    href: 'https://www.linkedin.com/company/code-pdx/',
    icon: <FaLinkedin size={45} />,
    target: '_blank',
    rel: 'noopener'
  },
  {
    href: 'https://www.meetup.com/Code-for-PDX/',
    icon: <FaMeetup size={45} />,
    target: '_blank',
    rel: 'noopener'
  },
  {
    href: 'https://discord.gg/x6b573et',
    icon: <FaDiscord size={45} />,
    target: '_blank',
    rel: 'noopener'
  }
];

// maps legalLinks used for placement in stack below
const renderLegalLinks = legalLinks.map((link) => (
  <Typography
    key={link.title}
    variant="body2"
    color="tertiary.main"
    sx={{ display: 'flex', justifyContent: 'flex-end' }}
  >
    {link.text ?? null}
    <Link
      href={link.href}
      underline="none"
      color="#000"
      target={link.target ?? null}
      rel={link.rel ?? null}
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
));

// renders socialMediaLinks for placement in stack below
const renderSocialLinks = socialMediaLinks.map(({ href, icon }) => (
  <Link
    key={href}
    href={href}
    target="_blank"
    rel="noopener"
    color="#000"
    sx={{
      '&:hover': {
        color: 'secondary.main'
      }
    }}
  >
    {icon}
  </Link>
));

const socialBlobStyle = {
  backgroundImage: 'url(/assets/socialsBlob.svg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  overflow: 'visible',
  minWidth: '42%',
  minHeight: '175px'
};

const logoBlobStyle = {
  backgroundImage: 'url(/assets/logoBlob.svg)',
  backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'left',
  overflow: 'visible'
  // minWidth: '100vh',
  // minHeight: '100vh'
};

const Footer = () => {
  return (
    // this box contains the entire footer
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        background: 'lightgray'
      }}
    >
      <Stack direction="row" alignItems="center">
        <Box
          component="img"
          sx={{
            marginRight: 2,
            backgroundImage: 'url(/assets/logoBlob.svg)'
          }}
          alt="CODE PDX logo"
          src={roseLogo}
        />
        <Typography variant="h5">CODE PDX</Typography>
      </Stack>
      {/* <Box sx={{ flexGrow: 1 }} /> */}
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        sx={{ ml: '50px', mr: '50px', socialBlobStyle }}
      >
        {renderSocialLinks}
      </Stack>
      {/* <Box sx={{ flexGrow: 2 }} /> */}
      <Stack>{renderLegalLinks}</Stack>
    </Box>
  );
};

export default Footer;
