// Material UI Imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';
// React Vertical Timeline Imports
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// Custom Imports
import volunteerStepsData from './volunteerStepsData';

const getBackgroundStyle = (isSingleColumn, index) => {
  if (isSingleColumn) {
    return 'linear-gradient(0deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
  } else if (index % 2 === 0) {
    return 'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
  } else {
    return 'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
  }
};

const VolunteerSteps = () => {
  const theme = useTheme();
  const isSingleColumn = useMediaQuery('(max-width:1169px)');

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
