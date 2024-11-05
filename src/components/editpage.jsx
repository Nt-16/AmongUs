import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../supabase';
import { Button, TextField, Box } from '@mui/material';
import PropTypes from 'prop-types';

const EditPage = ({ crewmates, updateCrewmate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    // If crewmates prop is passed, find the crewmate from it
    const foundCrewmate = crewmates.find(c => c.id === parseInt(id));
    if (foundCrewmate) {
      setCrewmate(foundCrewmate);
    } else {
      const fetchCrewmate = async () => {
        const { data, error } = await supabase
          .from('crewmate')
          .select('*')
          .eq('id', id)
          .single();
        if (error) console.error('Error fetching crewmate:', error);
        else setCrewmate(data);
      };

      fetchCrewmate();
    }
  }, [id, crewmates]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrewmate({ ...crewmate, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCrewmate(id, crewmate);
    navigate(`/crewmate/${id}`);
  };

  if (!crewmate) return <div>Loading...</div>;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        name="name"
        label="Name"
        value={crewmate.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="color"
        label="Color"
        value={crewmate.color}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="mph"
        label="Speed (mph)"
        type="number"
        value={crewmate.mph}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Update CrewMate
      </Button>
    </Box>
  );
};

// Prop validation
EditPage.propTypes = {
  crewmates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      mph: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateCrewmate: PropTypes.func.isRequired,
};

export default EditPage;



// // EditPage.jsx
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import supabase from '../supabase';
// import { Button, TextField, Box } from '@mui/material';
// import PropTypes from 'prop-types';

// const EditPage = ({  updateCrewmate }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [crewmate, setCrewmate] = useState(null);

//   useEffect(() => {
//     const fetchCrewmate = async () => {
//       const { data, error } = await supabase
//         .from('crewmate')
//         .select('*')
//         .eq('id', id)
//         .single();
//       if (error) console.error('Error fetching crewmate:', error);
//       else setCrewmate(data);
//     };

//     fetchCrewmate();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCrewmate({ ...crewmate, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await updateCrewmate(id, crewmate);
//     navigate(`/crewmate/${id}`);
//   };

//   if (!crewmate) return <div>Loading...</div>;

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//       <TextField
//         name="name"
//         label="Name"
//         value={crewmate.name}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         name="color"
//         label="Color"
//         value={crewmate.color}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         name="mph"
//         label="Speed (mph)"
//         type="number"
//         value={crewmate.mph}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <Button type="submit" variant="contained" color="primary">
//         Update CrewMate
//       </Button>
//     </Box>
//   );
// };

// // Prop validation
// EditPage.propTypes = {
//   crewmates: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       color: PropTypes.string.isRequired,
//       mph: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   updateCrewmate: PropTypes.func.isRequired,
// };

// export default EditPage;
