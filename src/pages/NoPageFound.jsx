// React Router Imports
import { useNavigate } from 'react-router-dom';
// Material UI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NoPageFound = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height={`calc(100vh - 200px)`}>
      <Card sx={{ maxWidth: { xs: 250, sm: 350, md: 4525 } }} align="center">
        <CardMedia
          image="./assets/notfound.webp"
          title="Page Not Found"
          sx={{ height: { xs: 150, sm: 250, md: 350 } }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            404: Page Not Found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sorry, but this page cannot be found. Click the button below to go back.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          {/* takes to previous page in browser history
          OR
          HOME.JSX if no previous browser history */}
          <Button size="large" variant="contained" onClick={() => navigate(-1) || navigate('/')}>
            Go Back
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default NoPageFound;
