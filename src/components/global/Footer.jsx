// Material UI Imports
import Box from '@mui/material/Box';
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
      padding: '25px',
      '&:hover': {
        color: 'primary.main'
      }
    }}
  >
    {icon}
  </Link>
));

const socialBlobStyle = (theme) => ({
  backgroundImage: 'url(/assets/socialsBlob.svg)',
  // backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'visible',
  minWidth: '55%',
  minHeight: '200px',
  ml: '-200px',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: 'none',
    ml: '0'
  }
});

// const logoBlobStyle = {
//   backgroundImage: 'url(/assets/logoBlob.svg)',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   overflow: 'visible',
//   minHeight: '200px'
//   // position: 'absolute',
//   // ml: '30px'
// };

const Footer = () => {
  const theme = useTheme();

  // maps legalLinks used for placement in stack below
  const renderLegalLinks = legalLinks.map((link, index) => (
    <Box key={link.title + index}>
      <Typography
        key={link.title}
        variant="body2"
        color="tertiary.main"
        mr={{ sm: '10px' }}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          [theme.breakpoints.down('sm')]: {
            p: '10px'
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
    <Stack
      direction="row"
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column'
        }
      }}
    >
      {/* logoBlob box*/}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          backgroundImage: 'url(/assets/logoBlob.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left bottom',
          zIndex: '-1',
          [theme.breakpoints.down('sm')]: {
            backgroundImage: 'none'
          }
        }}
      ></Box>
      <Box
        sx={{
          display: 'flex'
        }}
      >
        {/* roseLogo box */}
        <Box
          sx={{
            width: '75px',
            height: '75px',
            ml: '30px',
            [theme.breakpoints.down('sm')]: {
              justifyContent: 'space-around',
              alignContent: 'center',
              ml: '0px'
            }
          }}
          component="img"
          alt="CODE PDX logo"
          src={'/assets/rose_logo.png'}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography sx={{ ml: '100px' }} variant="h5">
            CODE PDX
          </Typography>
        </Box>
      </Box>

      {/* this box and stack contain the social icons and blob with a hook to add padding on viewport scale down */}
      <Box sx={socialBlobStyle}>{renderSocialLinks}</Box>
      {/* this stack contains the legal links and hook to add padding on viewport scale down */}
      <Box
        sx={{
          [theme.breakpoints.down('sm')]: {
            p: '8px'
          }
        }}
      >
        {renderLegalLinks}
      </Box>
    </Stack>
  );
};

export default Footer;
