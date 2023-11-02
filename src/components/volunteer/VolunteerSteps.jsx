// Material UI Imports
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Component Imports
import Step from './Step.jsx';

const VolunteerSteps = () => {
  return (
    <Stack direction="row" minWidth="100%" spacing={4} my={8}>
      {/* left column */}
      <Stack maxWidth="33%">
        <Step title="Step 1: Self Onboarding & Initial Contact">
          <Typography variant="h6">Get familiar with CODE PDX</Typography>
          <ol>
            <li>
              Read our <a>Code of Conduct</a>
            </li>
            <li>
              Complete our <a>onboarding form</a>
            </li>
            <li>
              Review our <a>current projects</a>
            </li>
            <li>
              Read the <a>ADA Compliance Guide</a>, all CODE PDX projects are inclusive by design
            </li>
            <li>
              Join a project demo night & onboarding session listed on <a>meetup</a> and the{' '}
              <a>events calendar</a>
            </li>
          </ol>
        </Step>
        <Step title="Step 3: Choose a Role & Adopt Our Standards">
          <ul>
            <li>
              After seeing what we are up to, reach out to members of a project to connect with the
              team to let them know how you would like to contribute. You can find active members by
              seeing who recently contributed to a repository or the recent discord chat history of
              a project.
            </li>
            <li>
              The GitHub repository is a good place to see whats going on and active within CODE PDX
              and contains a writeup of our contribution guidelines that we follow to standardize
              our workflow.
            </li>
          </ul>
        </Step>
        <Step title="Additional Onboarding Info">
          <ul>
            <li>All of these steps can be completed remotely or at an in person event.</li>
            <li>
              We invite people to contribute to CODE PDX regardless of skill set or skill level.
            </li>
            <li>
              When in doubt, proactively reach out in the Discord text channels. They are frequently
              checked by members and will likely yield a swift response.
            </li>
          </ul>
        </Step>
      </Stack>

      {/* middle column */}
      <svg
        width="330"
        height="1613"
        viewBox="0 0 330 1613"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M164 0.367595C156.636 0.367595 150.667 6.33713 150.667 13.7009C150.667 21.0647 156.636 27.0343 164 27.0343C171.364 27.0343 177.333 21.0647 177.333 13.7009C177.333 6.33713 171.364 0.367595 164 0.367595ZM164 1585.56C156.636 1585.56 150.667 1591.53 150.667 1598.89C150.667 1606.25 156.636 1612.22 164 1612.22C171.364 1612.22 177.333 1606.25 177.333 1598.89C177.333 1591.53 171.364 1585.56 164 1585.56ZM161.5 13.7009L161.5 1598.89H166.5L166.5 13.7009H161.5Z"
          fill="#499195"
        />
        <path
          d="M27.3333 143C27.3333 135.636 21.3638 129.667 14 129.667C6.6362 129.667 0.666672 135.636 0.666672 143C0.666672 150.364 6.6362 156.333 14 156.333C21.3638 156.333 27.3333 150.364 27.3333 143ZM164 140.5L14 140.5V145.5L164 145.5V140.5Z"
          fill="#499195"
        />
        <path
          d="M329.333 1076C329.333 1068.64 323.364 1062.67 316 1062.67C308.636 1062.67 302.667 1068.64 302.667 1076C302.667 1083.36 308.636 1089.33 316 1089.33C323.364 1089.33 329.333 1083.36 329.333 1076ZM316 1073.5H166V1078.5H316V1073.5Z"
          fill="#499195"
        />
        <path
          d="M27.3333 777C27.3333 769.636 21.3638 763.667 14 763.667C6.6362 763.667 0.666672 769.636 0.666672 777C0.666672 784.364 6.6362 790.333 14 790.333C21.3638 790.333 27.3333 784.364 27.3333 777ZM164 774.5H14V779.5H164V774.5Z"
          fill="#499195"
        />
        <path
          d="M27.3333 1366C27.3333 1358.64 21.3638 1352.67 14 1352.67C6.6362 1352.67 0.666672 1358.64 0.666672 1366C0.666672 1373.36 6.6362 1379.33 14 1379.33C21.3638 1379.33 27.3333 1373.36 27.3333 1366ZM164 1363.5H14V1368.5H164V1363.5Z"
          fill="#499195"
        />
        <path
          d="M329.333 397C329.333 389.636 323.364 383.667 316 383.667C308.636 383.667 302.667 389.636 302.667 397C302.667 404.364 308.636 410.333 316 410.333C323.364 410.333 329.333 404.364 329.333 397ZM316 394.5L166 394.501L166 399.501L316 399.5L316 394.5Z"
          fill="#499195"
        />
      </svg>

      {/* right column */}
      <Stack maxWidth="33%" spacing={6}>
        <Step title="Step 2: Connect on Discord and Request Access">
          <Typography variant="h6">CODE PDX uses Discord for a communication hub.</Typography>
          <ol>
            <li>
              Join the <a>CODE PDX Discord server</a> and self assign roles. These roles will
              display project channels and help others identify the roles you intend to fulfill.{' '}
            </li>
            <li>
              Introduce yourself in the <code>#introductions</code> channel, this is a good way to
              network with current members.
            </li>
            <li>
              Request GitHub access in the <code>#github-access-request</code> channel.
            </li>
            <li>Request project specific access to Google Drive and other project content.</li>
          </ol>
          <Typography>
            If you are new to discord, they have a beginners users guide on their website{' '}
            <a
              href="https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord"
              target="_blank"
              rel="noreferrer"
            >
              HERE
            </a>
          </Typography>
        </Step>
        <Step title="Step 4: Contribute!">
          <ul>
            <li>
              Find your first issue to work on from the GitHub repo of the project of your choice.
              Check out our <a>Wiki</a> for guidance on picking your first issue.
            </li>
            <li>Create a branch for your issue or feature and collaborate with other members.</li>
            <li>
              Create a pull request off of our GitHub template, and submit fore review. Pull
              requests require at least one other person to review & approve before merging.
            </li>
          </ul>
        </Step>
      </Stack>
    </Stack>
  );
};

export default VolunteerSteps;
