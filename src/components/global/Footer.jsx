// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
import LogoDevIcon from "@mui/icons-material/LogoDev";
// import SvgIcon from "@mui/material/SvgIcon";
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
    icon: <LogoDevIcon />,
    target: "_blank",
    rel: "noopenner",
  },
  {
    href: "https://www.linkedin.com/company/code-pdx/",
    icon: <LogoDevIcon fontSize="large" />,
    target: "_blank",
    rel: "noopenner",
  },
  {
    href: "https://www.meetup.com/Code-for-PDX/",
    icon: <LogoDevIcon fontSize="large" />,
    target: "_blank",
    rel: "noopenner",
  },
  {
    href: "https://discord.gg/x6b573et",
    icon: <LogoDevIcon fontSize="large" />,
    target: "_blank",
    rel: "noopenner",
  },
];

const Footer = () => {
  const theme = useTheme();

  <Box
    component="footer"
    py={5}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "sticky",
      top: "100%",
      textAlign: "center",
      bgcolor: "primary.main",
    }}
  >
    <Container>
      <Stack
        alignItems="center"
        direction={"column"}
        spacing={1}
        divider={
          <Divider
            orientation={"horizontal"}
            flexItem={null}
            color={theme.palette.tertiary.main}
            sx={{ height: "3px", width: 3 / 4 }}
          />
        }
      >
        {legalLinks.map((link) => (
          <Typography key={link.title} variant="body2" color="tertiary.main">
            {link.text ?? null}
            <Link
              href={link.href}
              underline="none"
              // color="tertiary.main"
              target={link.target ?? null}
              rel={link.rel ?? null}
              ml={link.ml ?? null}
            >
              {link.title}
            </Link>
          </Typography>
        ))}
        <Stack direction="row" spacing={3} alignItems="center">
          {socialMediaLinks.map(({ href, icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener"
              color="#fff"
            >
              {icon}
            </Link>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>;
};

export default Footer;
