// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Divider from "@mui/material/Divider";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaMeetup,
} from "react-icons/fa";
import Link from "@mui/material/Link";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
// Other Library Imports
import dayjs from "dayjs";

// Legal links
const legalLinks = [
  {
    href: "https://www.codepdx.org/",
    title: "About",
  },
  {
    href: "https://www.codepdx.org/",
    title: "Code of Conduct",
  },
  {
    href: "https://www.codepdx.org/",
    title: "Contact Us",
  },
  {
    href: "https://www.codepdx.org/",
    target: "_blank",
    rel: "noopenner",
    ml: 0.5,
    text: `©${dayjs().year()}`,
    title: "CODE PDX",
  },
];

// Social media links
const socialMediaLinks = [
  {
    href: "https://github.com/codeforpdx/",
    icon: <FaGithub fontSize="large" />,
    target: "_blank",
    rel: "noopenner",
  },
  {
    href: "https://www.linkedin.com/company/code-pdx/",
    icon: <FaLinkedin fontSize="large" />,
    target: "_blank",
    rel: "noopenner",
  },
  {
    href: "https://www.meetup.com/Code-for-PDX/",
    icon: <FaMeetup fontSize="large" />,
    target: "_blank",
    rel: "noopenner",
  },
  {
    href: "https://discord.gg/x6b573et",
    icon: <FaDiscord fontSize="large" />,
    target: "_blank",
    rel: "noopenner",
  },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      py={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: "100%",
        textAlign: "center",
        bgcolor: "primary.main",
        flexDirection: "column",
        // minHeight: "100vh",
      }}
    >
      <Container
      // maxWidth={"lg"}
      // maxWidth={false}
      // disableGutters
      >
        <Stack
          alignItems="center"
          direction={"row"}
          spacing={1}
          // divider={
          //   <Divider
          //     // orientation={"horizontal"}
          //     flexItem={null}
          //     color={theme.palette.tertiary.main}
          //     sx={{ height: "2px", width: 3 / 4 }}
          //   />
          // }
        >
          <Stack direction="row" alignItems="center">
            <LogoDevIcon
              fontSize="large"
              // color="primary.main"
            />
            <Typography>CODE PDX</Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={3} alignItems="center">
            {socialMediaLinks.map(({ href, icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener"
                color="#000"
              >
                {icon}
              </Link>
            ))}
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Stack>
            {legalLinks.map((link) => (
              <Typography
                key={link.title}
                variant="body2"
                color="tertiary.main"
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
