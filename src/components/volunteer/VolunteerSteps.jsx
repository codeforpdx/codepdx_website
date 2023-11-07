// Material UI Imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
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
  return (
    <VerticalTimeline animate lineColor={theme.palette.secondary.main}>
      <VerticalTimelineElement
        contentStyle={{
          background:
            'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
        }}
        contentArrowStyle={{ borderRight: '7px solid rgba(217, 217, 217, 0.4)' }}
        date="Self-Onboarding & Initial Contact"
        iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
        icon={<BsFill1CircleFill />}
      >
        <Typography variant="h6">Get familiar with CODE PDX</Typography>
        <List>
          <ListItem>
            <ListItemText>
              1. Read our{' '}
              <a
                href="https://github.com/codeforpdx/codeofconduct"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                Code of Conduct
              </a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              2. Complete our{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfu4u9FB00RXd2TncbMLws_Ckot-vYqPK0oUHr81uLDjThE7Q/viewform"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                onboarding form
              </a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              3. Review our{' '}
              <a
                href="https://github.com/codeforpdx"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                current projects
              </a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              4. Read the{' '}
              <a
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                ADA Compliance Guide
              </a>
              , all CODE PDX projects are inclusive by design
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              5. Join a project demo night & onboarding session listed on{' '}
              <a
                href="https://www.meetup.com/code-for-pdx/"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                meetup
              </a>{' '}
              and the{' '}
              <a
                href="/#events"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                events calendar
              </a>
            </ListItemText>
          </ListItem>
        </List>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{
          background:
            'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
        }}
        contentArrowStyle={{ borderRight: '7px solid rgba(217, 217, 217, 0.4)' }}
        date="Connect on Discord & Request Access"
        iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
        icon={<BsFill2CircleFill />}
      >
        <List>
          <ListItem>
            <ListItemText>
              Join the{' '}
              <a
                href="https://discord.gg/qQ2sNXMagU"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                CODE PDX Discord server
              </a>{' '}
              and self assign roles. These roles will display project channels and help others
              identify the roles you intend to fulfill.{' '}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Introduce yourself in the{' '}
              <a
                href="https://discord.com/channels/1068260532806766733/1075286322530484256"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                #introductions
              </a>{' '}
              channel, this is a good way to network with current members.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Request GitHub access in the{' '}
              <a
                href="https://discord.com/channels/1068260532806766733/1078124139983945858"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                #github-access-request
              </a>{' '}
              channel.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Request project specific access to Google Drive and other project content.
            </ListItemText>
          </ListItem>
          <Typography>
            If you are new to discord, there is a beginners user guide available{' '}
            <a
              href="https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord"
              target="_blank"
              rel="noreferrer"
              style={{ color: theme.palette.primary.main, textDecoration: 'none', fontWeight: 600 }}
            >
              HERE
            </a>
          </Typography>
        </List>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{
          background:
            'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
        }}
        contentArrowStyle={{ borderRight: '7px solid rgba(217, 217, 217, 0.4)' }}
        date="Choose a Role & Adopt Our Standards"
        iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
        icon={<BsFill3CircleFill />}
      >
        <List>
          <ListItem>
            <ListItemText>
              After seeing what we are up to, reach out to team members of a project to connect
              &amp; let them know how you would like to contribute. You can find active members by
              seeing who recently contributed to a repository or the recent discord chat history of
              a project.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              The GitHub repository is a good place to see what&apos;s active within CODE PDX and
              contains a writeup of our contribution guidelines that we follow to standardize our
              workflow.
            </ListItemText>
          </ListItem>
        </List>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{
          background:
            'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
        }}
        contentArrowStyle={{ borderRight: '7px solid rgba(217, 217, 217, 0.4)' }}
        date="Contribute"
        iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
        icon={<BsFill4CircleFill />}
      >
        <List>
          <ListItem>
            <ListItemText>
              Find your first issue to work on from the GitHub repo of the project of your choice.
              Check out our{' '}
              <a
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                Wiki
              </a>{' '}
              for guidance on picking your first issue.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Create a branch for your issue or feature and collaborate with other members.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Create a pull request off of our GitHub template, and submit for review. Pull requests
              require at least one other person to review & approve before merging.
            </ListItemText>
          </ListItem>
        </List>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{
          background:
            'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
        }}
        contentArrowStyle={{ borderRight: '7px solid rgba(217, 217, 217, 0.4)' }}
        date="Additional Onboarding Info"
        iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
        icon={<BsFill5CircleFill />}
      >
        <List>
          <ListItem>
            <ListItemText>
              All of these steps can be completed remotely or at an in-person event.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              We invite people to contribute to CODE PDX regardless of skill set or skill level.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              When in doubt, proactively reach out in the Discord text channels. They are frequently
              checked by members and will likely yield a swift response.
            </ListItemText>
          </ListItem>
        </List>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default VolunteerSteps;
