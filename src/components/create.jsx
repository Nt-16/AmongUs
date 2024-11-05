
import  { useState } from 'react';
import { TextField, Button, Typography, MenuItem, Box, AppBar, Toolbar} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function CreatePage({ addCrewmate }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const[mph, setMph] = useState()


  const handleSubmit = (e) => {
    e.preventDefault();
    const newCrewmate = { id: Date.now(), name, color,mph };
    addCrewmate(newCrewmate);
    navigate('/gallery');
  };

  return (
    <Box height="100vh" width="100vw" bgcolor='#58d68d'>
      <AppBar position="static" color="#F08080">
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

      <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
      <Typography variant="h2" margin={10}gutterBottom>Create a New Crewmate</Typography>
      <img src='./public/spaceship.png' alt='spaceship image'  className="front_page_img"/>

      </Box>

      
      <Box margin='5px'  display='flex' alignItems='center' justifyContent='center'>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)}  required fullWidth />
          
          <TextField lable="mph" value={mph} placeholder='mph' onChange={(e)=> setMph(e.target.value)} 
            style={{ marginTop: '1rem' }}
            fullWidth required  />
          <TextField
            label="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            select
            fullWidth
            required
            style={{ marginTop: '1rem' }}
          >
            <MenuItem value="red">Red</MenuItem>
            <MenuItem value="blue">Blue</MenuItem>
            <MenuItem value="green">Green</MenuItem>
            <MenuItem value="purple">Purple</MenuItem>
            <MenuItem value="yellow">Yellow</MenuItem>
            <MenuItem value="pink">Pink</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
            Add Crewmate
          </Button>
        </form>
      </Box>
    </Box>
  );
}

CreatePage.propTypes = {
  addCrewmate: PropTypes.func.isRequired,
};

export default CreatePage;
