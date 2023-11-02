// React Imports
import { useState } from 'react';
// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Self Onboarding & Initial Contact',
    description: (
      <>
        <Typography variant="h6">Get familiar with CODE PDX</Typography>
        <ol>
          <li>
            Read our{' '}
            <a
              href="https://github.com/codeforpdx/codeofconduct"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Code of Conduct
            </a>
          </li>
          <li>
            Complete our{' '}
            <a
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              onboarding form
            </a>
          </li>
          <li>
            Review our{' '}
            <a
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              current projects
            </a>
          </li>
          <li>
            Read the{' '}
            <a
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              ADA Compliance Guide
            </a>
            , all CODE PDX projects are inclusive by design
          </li>
          <li>
            Join a project demo night & onboarding session listed on{' '}
            <a
              href="https://www.meetup.com/code-for-pdx/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              meetup
            </a>{' '}
            and the{' '}
            <a
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              events calendar
            </a>
          </li>
        </ol>
      </>
    )
  },
  {
    label: 'Connect on Discord & Request Access',
    description: (
      <>
        <Typography variant="h6">CODE PDX uses Discord for communication</Typography>
        <ol>
          <li>
            Join the{' '}
            <a
              href="https://discord.gg/qQ2sNXMagU"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              CODE PDX Discord server
            </a>{' '}
            and self assign roles. These roles will display project channels and help others
            identify the roles you intend to fulfill.{' '}
          </li>
          <li>
            Introduce yourself in the{' '}
            <a
              href="https://discord.com/channels/1068260532806766733/1075286322530484256"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              #introductions
            </a>{' '}
            channel, this is a good way to network with current members.
          </li>
          <li>
            Request GitHub access in the{' '}
            <a
              href="https://discord.com/channels/1068260532806766733/1078124139983945858"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              #github-access-request
            </a>{' '}
            channel.
          </li>
          <li>Request project specific access to Google Drive and other project content.</li>
        </ol>
        <Typography>
          If you are new to discord, there is a beginners user guide available{' '}
          <a
            href="https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#56B6A1',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            HERE
          </a>
        </Typography>
      </>
    )
  },
  {
    label: 'Choose a Role & Adopt Our Standards',
    description: (
      <>
        <ul>
          <li>
            After seeing what we are up to, reach out to team members of a project to connect &amp;
            let them know how you would like to contribute. You can find active members by seeing
            who recently contributed to a repository or the recent discord chat history of a
            project.
          </li>
          <li>
            The GitHub repository is a good place to see what&apos;s active within CODE PDX and
            contains a writeup of our contribution guidelines that we follow to standardize our
            workflow.
          </li>
        </ul>
      </>
    )
  },
  {
    label: 'Contribute',
    description: (
      <>
        <ul>
          <li>
            Find your first issue to work on from the GitHub repo of the project of your choice.
            Check out our{' '}
            <a
              style={{
                color: '#56B6A1',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Wiki
            </a>{' '}
            for guidance on picking your first issue.
          </li>
          <li>Create a branch for your issue or feature and collaborate with other members.</li>
          <li>
            Create a pull request off of our GitHub template, and submit for review. Pull requests
            require at least one other person to review & approve before merging.
          </li>
        </ul>
      </>
    )
  },
  {
    label: 'Additional Onboarding Info',
    description: (
      <>
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
      </>
    )
  }
];

const VolunteerStepsMobile = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
            // optional={index === 4 ? <Typography variant="caption">Last step</Typography> : null}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default VolunteerStepsMobile;
