import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <Box height="100vh" width="100vw" bgcolor='#909497'>
      {/* Navigation Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Crewmate App
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/create">Create</Button>
          {/* <Button color="inherit" component={Link} to="/crewmates">Crewmates</Button> */}
          <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box display="flex" height="calc(100vh - 64px)" alignItems="center" justifyContent="center" flexDirection="column" gap={10}>
        <Typography variant="h2" gutterBottom>Welcome to the Crewmate</Typography>
        <Typography variant="h6" gutterBottom>
          Here is where you can create your very own set of crewmates before sending them off to Jupiter!
        </Typography>
        <img src="./public/amongus.png" alt="Crewmate" className="front_page_img" />
        <Box display="flex" gap={2}>
          <Button variant="contained" color="primary" component={Link} to="/gallery">
            View Crewmate Gallery
          </Button>
          <Button variant="contained" color="secondary" component={Link} to="/create">
            Add New Crewmate
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
