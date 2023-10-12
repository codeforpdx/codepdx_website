// Material UI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import {
  // FaChalkboardUser,
  // FaChartLine,
  FaChartPie,
  // FaCode,
  // FaCubesStacked,
  FaDatabase,
  // FaDesktop,
  // FaDiagramProject,
  // FaDiagramSuccessor,
  // FaEarthAmericas,
  FaHandHoldingHeart,
  // FaLightbulb,
  // FaLanguage,
  FaLaptopCode,
  // FaLayerGroup,
  // FaFolderTree,
  // FaHardDrive,
  // FaHandshake,
  FaHandshakeSimple,
  // FaNetworkWired,
  FaPenRuler,
  FaPeopleLine,
  // FaRegHandshake,
  // FaRegLightbulb,
  // FaRulerCombined,
  // FaServer,
  // FaSitemap,
  FaUser
  // FaUsers,
  // FaUsersLine,
  // FaUsersRectangle
  // HiOutlineSpeakerphone,
  // IoServerOutline,
  // MdDeveloperMode,
  // MdOutlineDesignServices,
  // RiPresentationFill,
  // RxAvatar,
  // HiOutlineSpeakerphone,
} from 'react-icons/fa6';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// https://react-icons.github.io/react-icons/icons?name=fa6

const volunteerGrid = [
  {
    icon: <FaLaptopCode size={45} />,
    label: 'Developers',
    alt: 'Laptop with code'
  },
  {
    icon: <FaDatabase size={45} />,
    label: 'Data Scientists',
    alt: 'Database'
  },
  {
    icon: <FaPenRuler size={45} />,
    label: 'Designers',
    alt: 'Pen and ruler'
  },
  {
    icon: <FaPeopleLine size={45} />,
    label: 'Project Managers',
    alt: 'People in a line'
  },
  {
    icon: <FaChartPie size={45} />,
    label: 'Product Managers',
    alt: 'Pie chart'
  },
  {
    icon: <FaHandshakeSimple size={45} />,
    label: 'Social Workers',
    alt: 'Handshake'
  },
  {
    icon: <FaHandHoldingHeart size={45} />,
    label: 'Community Organizers',
    alt: 'Hand holding heart'
  },
  {
    icon: <FaUser size={45} />,
    label: 'Anyone!',
    alt: 'User avatar'
  }
];

const Steps = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        // position: 'sticky',
        textAlign: 'center',
        // bgcolor: 'primary.main',
        // flexDirection: 'column',
        // width: '100vw',
        // minHeight: '10vh',
        backgroundColor: 'black'
        // height: '500px',
        // width: '500px'
      }}
    >
      <Box sx={{ backgroundColor: 'white' }}>
        <Typography variant="h4">Volunteer with Us</Typography>
        <Card sx={{ backgroundColor: 'grey', ml: 10, mr: 10 }}>
          <Typography>
            Looking to use your skills for the greater good or build your resume?
          </Typography>
          <Stack>
            {volunteerGrid.map(({ icon, label, alt }) => (
              // <Grid></Grid>
              <Typography
                key={alt}
                // variant="body2"
                // color="tertiary.main"
                sx={{
                  display: 'flex',
                  backgroundColor: 'green',
                  width: 100,
                  height: 50
                  // justifyContent: 'flex-end'
                }}
              >
                {/* {link.text ?? null} */}
                {icon} {label}
              </Typography>
            ))}
            {/* {socialMediaLinks.map(({ href, icon }) => (
              <Link key={href} href={href} target="_blank" rel="noopener" color="#000">
                {icon}
              </Link>
            ))} */}
          </Stack>
        </Card>
        {/* <FaRegHandshake size={45} />
        ...
        <FaRegLightbulb size={45} />
        ...
        <FaServer size={45} />
        ...
        <FaUser size={45} />
        ...
        <FaPeopleLine size={45} />
        ...
        <FaLayerGroup size={45} />
        ...
        <FaLightbulb size={45} />
        ...
        <FaUsersLine size={45} />
        ...
        <FaLaptopCode size={45} />
        ...
        <FaLanguage size={45} />
        ...
        <FaHardDrive size={45} />
        ...
        <FaHandshake size={45} />
        ...
        <FaHandshakeSimple size={45} />
        ...
        <FaFolderTree size={45} />
        ...
        <FaDiagramSuccessor size={45} />
        ...
        <FaDesktop size={45} />
        ...
        <FaDiagramProject size={45} />
        ...
        <FaCode size={45} />
        ...
        <FaChalkboardUser size={45} />
        ...
        <FaSitemap size={45} /> ...
        <FaRulerCombined size={45} /> ...
        <FaCubesStacked size={45} /> ...
        <FaUsersRectangle size={45} /> ...
        <FaUsers size={45} /> ...
        <FaNetworkWired size={45} /> ...
        <FaEarthAmericas size={45} />
        ...
        <FaChartLine size={45} /> */}
      </Box>
    </Container>
  );
};

export default Steps;
