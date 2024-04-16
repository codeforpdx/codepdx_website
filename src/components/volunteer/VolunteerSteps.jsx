// Material UI Imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';
// React Vertical Timeline Imports
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// Component Imports
import volunteerStepsData from './volunteerStepsData';

const getBackgroundStyle = (isSingleColumn, index, theme) => {
  if (theme.palette.mode === 'dark') {
    return theme.palette.primary.main;
  }
  // gradient only for light mode
  if (isSingleColumn) {
    return 'linear-gradient(0deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
  } else if (index % 2 === 0) {
    return 'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
  } else {
    return 'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';
  }
};
const getTimelineColor = (theme) => {
  if (theme.palette.mode === 'dark') {
    return {
      color: '#eee',
      boxShadow: `0 0 0 4px ${theme.palette.primary.boxOutline},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`
    };
  } else
    return {
      color: '#fff',
      boxShadow: `0 0 0 4px ${theme.palette.primary.boxOutline},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`
    };
};

const VolunteerSteps = () => {
  const theme = useTheme();
  const isSingleColumn = useMediaQuery('(max-width:1169px)');
  return (
    <VerticalTimeline animate lineColor={theme.palette.primary.boxOutline}>
      {volunteerStepsData.map(({ title, subtitle, icon, listItems, extraText }, index) => (
        <VerticalTimelineElement
          key={title}
          contentStyle={{
            boxShadow: theme.palette.mode === 'dark' ? 'none' : '0 3px #ddd',
            border:
              theme.palette.mode === 'dark' && `1px ${theme.palette.primary.boxOutline} solid`,
            background: getBackgroundStyle(isSingleColumn, index, theme)
          }}
          contentArrowStyle={{
            borderRight: `7px solid ${
              theme.palette.mode === 'dark'
                ? theme.palette.primary.boxOutline
                : 'rgba(217, 217, 217, 0.4)'
            }`
          }}
          iconStyle={{ background: theme.palette.primary.main, ...getTimelineColor(theme) }}
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
                        color: theme.palette.primary.contrastText,
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
                      color: theme.palette.primary.contrastText,
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
