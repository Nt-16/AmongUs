
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function CrewmateDetail({ crewmates, updateCrewmate }) {
  const { id } = useParams();
  const crewmate = crewmates.find(c => c.id === id);
  const [name, setName] = useState(crewmate ? crewmate.name : '');
  const [color, setColor] = useState(crewmate ? crewmate.color : '');
  const navigate = useNavigate();

  const handleUpdate = () => {
    updateCrewmate(id, { name, color });
    navigate('/gallery');
  };

  if (!crewmate) return <Typography variant="h6">Crewmate not found!</Typography>;

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>Edit Crewmate</Typography>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
      <TextField label="Color" value={color} onChange={(e) => setColor(e.target.value)} fullWidth style={{ marginTop: '1rem' }} />
      <Button variant="contained" color="primary" onClick={handleUpdate} style={{ marginTop: '1rem' }}>Update Crewmate</Button>
    </Container>
  );
}


CrewmateDetail.propTypes = {
    crewmates: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
    updateCrewmate: PropTypes.func.isRequired,
  };

export default CrewmateDetail;
