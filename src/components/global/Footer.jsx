// Material UI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
// Other Library Imports
import dayjs from 'dayjs';
import { FaDiscord, FaGithub, FaLinkedin, FaMeetup } from 'react-icons/fa6';
// Image Imports
import roseLogo from '/assets/rose_logo.png';
import logoBlob from '/assets/logoBlob.svg';

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
    key={href}
    href={href}
    target="_blank"
    rel="noopener"
    color="#000"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
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
  minWidth: '55%',
  minHeight: '150px'
};

const logoBlobStyle = {
  backgroundImage: 'url(/assets/logoBlob.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  overflow: 'visible'
};

const Footer = () => {
  const theme = useTheme();

  // maps legalLinks used for placement in stack below
  const renderLegalLinks = legalLinks.map((link, index) => (
    <Box key={link.title + index}>
      <Typography
        key={link.title}
        variant="body2"
        color="tertiary.main"
        mr={'10px'}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          [theme.breakpoints.down('sm')]: {
            p: '20px'
          }
        }}
      >
        {link.text ?? null}
        <Link
          href={link.href}
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

  return (
    // this box contains the entire footer
    <Box
      component="footer"
      sx={{
        display: 'inline-flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        mb: '15px',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column'
        }
      }}
    >
      {/* this stack holds logo, blob and brand text */}
      <Stack direction="row" alignItems="center">
        <Box sx={logoBlobStyle}>
          <Box
            sx={{
              marginRight: 2,
              ml: '10px',
              // background: 'url(/assets/logoBlob.svg)',
              [theme.breakpoints.down('sm')]: {
                p: '40px'
              }
            }}
            component="img"
            alt="CODE PDX logo"
            src={roseLogo}
          />
        </Box>
        <Box>
          <Typography variant="h5">CODE PDX</Typography>
        </Box>
      </Stack>
      {/* this stack contains the social icons and blob with a hook to add padding on viewport scale down */}
      <Box sx={socialBlobStyle}>
        <Stack
          direction="row"
          spacing={3}
          // display={'flex'}
          alignItems="center"
          sx={{
            direction: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            [theme.breakpoints.down('sm')]: {
              p: '40px'
            }
          }}
        >
          {renderSocialLinks}
        </Stack>
      </Box>
      {/* this stack contains the legal links and hook to add padding on viewport scale down */}
      <Stack
        sx={{
          [theme.breakpoints.down('sm')]: {
            p: '8px'
          }
        }}
      >
        {renderLegalLinks}
      </Stack>
    </Box>
  );
};

export default Footer;
