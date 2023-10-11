// Material UI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FaDiscord, FaGithub, FaLinkedin, FaMeetup } from 'react-icons/fa6';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Other Library Imports
import dayjs from 'dayjs';

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

const Footer = () => {
  return (
    <Box
      component="footer"
      py={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        textAlign: 'center',
        bgcolor: 'primary.main',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '10vh'
      }}
    >
      <Container maxWidth={false}>
        <Stack alignItems="center" direction={'row'} spacing={1}>
          <Stack direction="row" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 56,
                width: 88,
                marginRight: 2
              }}
              alt="CODE PDX logo"
              src="/assets/rose_logo.png"
            />
            <Typography variant="h5">CODE PDX</Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={3} alignItems="center" sx={{ ml: '50px', mr: '50px' }}>
            {socialMediaLinks.map(({ href, icon }) => (
              <Link key={href} href={href} target="_blank" rel="noopener" color="#000">
                {icon}
              </Link>
            ))}
          </Stack>
          <Box sx={{ flexGrow: 1.5 }} />
          <Stack>
            {legalLinks.map((link) => (
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
                >
                  {link.title}
                </Link>
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
