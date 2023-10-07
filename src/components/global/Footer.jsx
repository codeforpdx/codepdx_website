// Material UI Imports
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
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
              target={link.target ?? null}
              rel={link.rel ?? null}
              ml={link.ml ?? null}
            >
              {link.title}
            </Link>
          </Typography>
        ))}
      </Stack>
    </Container>
  </Box>;
};

export default Footer;
