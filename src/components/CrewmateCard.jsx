import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button, Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function CrewmateCard({ id, name, mph, color, onDelete }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/crewmate/${id}`);
  };

  return (
    <Box>
      <Box>
        <Card 
          margin="8px" 
          style={{ backgroundColor: color, marginBottom: '1rem' }} 
            // Handle click on card to navigate
        >
          <CardContent>
            <img 
              src="./public/crew.png" 
              alt={`${name}`} 
              style={{ width: '50%', height: 'auto' }} 
              onClick={handleCardClick}
            />
            <Typography variant="h5">Name: {name}</Typography>
            <Typography variant="h5">Color: {color}</Typography>
            <Typography variant="h5">Speed: {mph} mph</Typography>
            <Stack spacing={3} marginTop={1}>
              <Button variant="contained" color="primary" component={Link} to="/edit">
                Edit
              </Button>
              <Button variant="contained" color="secondary" onClick={onDelete}>
                Delete
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

// Prop validation
CrewmateCard.propTypes = {
  id: PropTypes.number.isRequired, 
  name: PropTypes.string.isRequired,
  mph: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CrewmateCard;

// import PropTypes from 'prop-types';
// import { Card, CardContent, Typography, Button, Box, Stack } from '@mui/material';



// function CrewmateCard({ name, mph, color, onDelete, onUpdate}) {
//   return (
//     <Box>
        
//         <Box >
            
//             <Card margin="8px" style={{ backgroundColor: color, marginBottom: '1rem',  }}>
//                 <CardContent>
//                     <img src="./public/crew.png" alt={`${name}`} style={{ width: '50%', height: 'auto' }} />
//                     <Typography variant="h5">Name: {name}</Typography>
//                     <Typography variant="h5">Color: {color}</Typography>
//                     <Typography variant="h5">Speed: {mph} mph</Typography>
//                     <Stack spacing={3} marginTop={1}>
//                     <Button variant="contained" color="primary" onClick={onUpdate}>
//                     Update
//                     </Button>
//                     <Button variant="contained" color="secondary" onClick={onDelete}>
//                     Delete
//                     </Button>

//                     </Stack>
                    
//                 </CardContent>
//             </Card>

//         </Box>
//     </Box>
//   );
// }

// // Prop validation
// CrewmateCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   mph: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default CrewmateCard;
