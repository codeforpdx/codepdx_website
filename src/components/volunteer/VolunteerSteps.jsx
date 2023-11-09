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

const VolunteerSteps = () => {
  const theme = useTheme();
  const isSingleColumn = useMediaQuery('(max-width:1169px)');

  const volunteerStepsData = [
    {
      title: 'Self-Onboarding & Initial Contact',
      subtitle: 'Get familiar with CODE PDX',
      icon: <BsFill1CircleFill />,
      listItems: [
        {
          preText: 'Read our ',
          link: 'https://github.com/codeforpdx/codeofconduct',
          linkText: 'Code of Conduct',
          postText: '.',
          numbered: true
        },
        {
          preText: 'Complete our ',
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSfu4u9FB00RXd2TncbMLws_Ckot-vYqPK0oUHr81uLDjThE7Q/viewform',
          linkText: 'onboarding form',
          postText: '.',
          numbered: true
        },
        {
          preText: 'Review our ',
          link: 'https://github.com/codeforpdx',
          linkText: 'current projects',
          postText: '.',
          numbered: true
        },
        {
          preText: 'Read the ',
          link: 'https://github.com/codeforpdx',
          linkText: 'ADA Compliance Guide',
          postText: ', all CODE PDX projects are inclusive by design.',
          numbered: true
        },
        {
          preText: 'Join a project demo night & onboarding session listed on ',
          link: 'https://www.meetup.com/code-for-pdx/',
          linkText: 'Meetup',
          postText: '.',
          numbered: true
        }
      ]
    },
    {
      title: 'Connect on Discord & Request Access',
      icon: <BsFill2CircleFill />,
      listItems: [
        {
          preText: 'Join the ',
          link: 'https://discord.gg/qQ2sNXMagU',
          linkText: 'CODE PDX Discord server',
          postText:
            ' and self assign roles. These roles will display project channels and help others identify the roles you intend to fulfill.',
          numbered: true
        },
        {
          preText: 'Introduce yourself in the ',
          link: 'https://discord.com/channels/1068260532806766733/1075286322530484256',
          linkText: '#introductions',
          postText: ' channel, this is a good way to network with current members.',
          numbered: true
        },
        {
          preText: 'Request GitHub access in the ',
          link: 'https://discord.com/channels/1068260532806766733/1078124139983945858',
          linkText: '#github-access-request',
          postText: ' channel.',
          numbered: true
        },
        {
          preText: 'Request project specific access to Google Drive and other project content.',
          link: '',
          linkText: '',
          postText: '',
          numbered: true
        }
      ],
      extraText: {
        preText: 'If you are new to discord, there is a beginners user guide available ',
        link: 'https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord',
        linkText: 'HERE',
        postText: '.'
      }
    },
    {
      title: 'Choose a Role & Adopt Our Standards',
      icon: <BsFill3CircleFill />,
      listItems: [
        {
          preText:
            '- After seeing what we are up to, reach out to team members of a project to connect & let them know how you would like to contribute. You can find active members by seeing who recently contributed to a repository or the recent discord chat history of a project.'
        },
        {
          preText:
            "- The GitHub repository is a good place to see what's active within CODE PDX and contains a writeup of our contribution guidelines that we follow to standardize our workflow."
        }
      ]
    },
    {
      title: 'Contribute',
      icon: <BsFill4CircleFill />,
      listItems: [
        {
          preText:
            'Find your first issue to work on from the GitHub repo of the project of your choice. Check out our ',
          link: 'https://github.com/codeforpdx',
          linkText: 'Wiki',
          postText: ' for guidance on picking your first issue.',
          numbered: true
        },
        {
          preText: 'Create a branch for your issue or feature and collaborate with other members.',
          numbered: true
        },
        {
          preText:
            'Create a pull request off of our GitHub template, and submit for review. Pull requests require at least one other person to review & approve before merging.',
          numbered: true
        }
      ]
    },
    {
      title: 'Additional Onboarding Info',
      icon: <BsFill5CircleFill />,
      listItems: [
        {
          preText: '- All of these steps can be completed remotely or at an in-person event.'
        },
        {
          preText:
            '- We invite people to contribute to CODE PDX regardless of skill set or skill level.'
        },
        {
          preText:
            '- When in doubt, proactively reach out in the Discord text channels. They are frequently checked by members and will likely yield a swift response.'
        }
      ]
    }
  ];

  const getBackgroundStyle = (isSingleColumn, index) => {
    if (isSingleColumn) {
      return 'linear-gradient(0deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
    } else if (index % 2 === 0) {
      return 'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
    } else {
      return 'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
    }
  };

  return (
    <VerticalTimeline animate lineColor={theme.palette.secondary.main}>
      {volunteerStepsData.map(({ title, subtitle, icon, listItems, extraText }, index) => (
        <VerticalTimelineElement
          key={title}
          contentStyle={{ background: getBackgroundStyle(isSingleColumn, index) }}
          contentArrowStyle={{ borderRight: '7px solid rgba(217, 217, 217, 0.4)' }}
          iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
          icon={icon}
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
            {title}
          </Typography>
          {subtitle && <Typography variant="h6">{subtitle}</Typography>}
          <List sx={{ listStyle: 'decimal', pl: 4 }}>
            {listItems.map(({ preText, link, linkText, postText, numbered }) => (
              <ListItem key={preText} sx={{ display: numbered ? 'list-item' : '' }}>
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
            ))}
            {extraText && (
              <Typography key={extraText.preText}>
                {extraText.preText}{' '}
                {extraText.link && (
                  <a
                    href={extraText.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: theme.palette.primary.main,
                      textDecoration: 'none',
                      fontWeight: 600
                    }}
                  >
                    {extraText.linkText}
                  </a>
                )}
                {extraText.postText}
              </Typography>
            )}
          </List>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default VolunteerSteps;
