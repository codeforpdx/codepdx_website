// Material UI Imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';
// React Vertical Timeline Imports
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// React Icons Imports
import {
  BsFill1CircleFill,
  BsFill2CircleFill,
  BsFill3CircleFill,
  BsFill4CircleFill,
  BsFill5CircleFill
} from 'react-icons/bs';

const VolunteerSteps2 = () => {
  const theme = useTheme();
  const isSingleColumn = useMediaQuery('(max-width:1169px)');

  const createListItem = (preText, link, linkText, postText, numbered) => (
    <ListItem sx={{ display: numbered ? 'list-item' : '' }}>
      <ListItemText>
        {preText}{' '}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: theme.palette.primary.main,
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            {linkText}
          </a>
        )}
        {postText}
      </ListItemText>
    </ListItem>
  );

  const createExtraText = (preText, link, linkText, postText) => (
    <Typography>
      {preText}{' '}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{ color: theme.palette.primary.main, textDecoration: 'none', fontWeight: 600 }}
        >
          {linkText}
        </a>
      )}
      {postText}
    </Typography>
  );

  const volunteerStepsData = [
    {
      title: 'Self-Onboarding & Initial Contact',
      subtitle: 'Get familiar with CODE PDX',
      icon: <BsFill1CircleFill />,
      listItems: [
        createListItem(
          'Read our ',
          'https://github.com/codeforpdx/codeofconduct',
          'Code of Conduct',
          '.',
          true
        ),
        createListItem(
          'Complete our ',
          'https://docs.google.com/forms/d/e/1FAIpQLSfu4u9FB00RXd2TncbMLws_Ckot-vYqPK0oUHr81uLDjThE7Q/viewform',
          'onboarding form',
          '.',
          true
        ),
        createListItem(
          'Review our ',
          'https://github.com/codeforpdx',
          'current projects',
          '.',
          true
        ),
        createListItem(
          'Read the ',
          'https://github.com/codeforpdx',
          'ADA Compliance Guide',
          ', all CODE PDX projects are inclusive by design.',
          true
        ),
        createListItem(
          'Join a project demo night & onboarding session listed on ',
          'https://www.meetup.com/code-for-pdx/',
          'Meetup',
          '.',
          true
        )
      ]
    },
    {
      title: 'Connect on Discord & Request Access',
      icon: <BsFill2CircleFill />,
      listItems: [
        createListItem(
          'Join the ',
          'https://discord.gg/qQ2sNXMagU',
          'CODE PDX Discord server',
          ' and self assign roles. These roles will display project channels and help others identify the roles you intend to fulfill.',
          true
        ),
        createListItem(
          'Introduce yourself in the ',
          'https://discord.com/channels/1068260532806766733/1075286322530484256',
          '#introductions',
          ' channel, this is a good way to network with current members.',
          true
        ),
        createListItem(
          'Request GitHub access in the ',
          'https://discord.com/channels/1068260532806766733/1078124139983945858',
          '#github-access-request',
          ' channel.',
          true
        ),
        createListItem(
          'Request project specific access to Google Drive and other project content.',
          '',
          '',
          '',
          true
        )
        // createListItem(
        //   "If you are new to discord, there is a beginner's user guide available ",
        //   'https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord',
        //   'HERE'
        // )
      ],
      extraText: [
        createExtraText(
          'If you are new to discord, there is a beginners user guide available ',
          'https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord',
          'HERE',
          '.'
        )
      ]
    },
    {
      title: 'Choose a Role & Adopt Our Standards',
      icon: <BsFill3CircleFill />,
      listItems: [
        createListItem(
          '- After seeing what we are up to, reach out to team members of a project to connect & let them know how you would like to contribute. You can find active members by seeing who recently contributed to a repository or the recent discord chat history of a project.'
        ),
        createListItem(
          "- The GitHub repository is a good place to see what's active within CODE PDX and contains a writeup of our contribution guidelines that we follow to standardize our workflow."
        )
      ]
    },
    {
      title: 'Contribute',
      icon: <BsFill4CircleFill />,
      listItems: [
        createListItem(
          'Find your first issue to work on from the GitHub repo of the project of your choice. Check out our ',
          'https://github.com/codeforpdx',
          'Wiki',
          ' for guidance on picking your first issue.',
          true
        ),
        createListItem(
          'Create a branch for your issue or feature and collaborate with other members.',
          '',
          '',
          '',
          true
        ),
        createListItem(
          'Create a pull request off of our GitHub template, and submit for review. Pull requests require at least one other person to review & approve before merging.',
          '',
          '',
          '',
          true
        )
      ]
    },
    {
      title: 'Additional Onboarding Info',
      icon: <BsFill5CircleFill />,
      listItems: [
        createListItem('- All of these steps can be completed remotely or at an in-person event.'),
        createListItem(
          '- We invite people to contribute to CODE PDX regardless of skill set or skill level.'
        ),
        createListItem(
          '- When in doubt, proactively reach out in the Discord text channels. They are frequently checked by members and will likely yield a swift response.'
        )
      ]
    }
  ];

  const getBackgroundStyle = (isSingleColumn, index) => {
    if (isSingleColumn) {
      return 'linear-gradient(180deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
    } else if (index % 2 === 0) {
      return 'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
    } else {
      return 'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
    }
  };

  return (
    <VerticalTimeline animate lineColor={theme.palette.secondary.main}>
      {volunteerStepsData.map((item, index) => (
        <VerticalTimelineElement
          key={item.title}
          contentStyle={{ background: getBackgroundStyle(isSingleColumn, index) }}
          contentArrowStyle={{ borderRight: '7px solid rgba(217, 217, 217, 0.4)' }}
          iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
          icon={item.icon}
        >
          <Typography
            variant="h5"
            mb={4}
            sx={{
              textDecoration: 'underline',
              textDecorationColor: theme.palette.primary.main,
              textDecorationThickness: '3px'
            }}
          >
            {item.title}
          </Typography>
          {item.subtitle && <Typography variant="h6">{item.subtitle}</Typography>}
          <List sx={{ listStyle: 'decimal', pl: 4 }}>
            {item.listItems}
            {item.extraText}
          </List>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default VolunteerSteps2;
