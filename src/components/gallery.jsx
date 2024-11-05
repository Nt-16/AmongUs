
import PropTypes from 'prop-types';
import { Grid, Box, AppBar, Toolbar, Typography, Button} from '@mui/material';
import CrewmateCard from './CrewmateCard';
import { Link } from 'react-router-dom';
function GalleryPage({ crewmates, deleteCrewmate, updateCrewmate }) {
  return (
    <Box height='100vh' width='100vw'>
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

      <Box display='flex' alignItems='center' justifyContent='center' margin={9}>
      <Typography variant='h2'> Your CrewMate Gallery!!</Typography>

      </Box>
      

      <Grid container spacing={2} marginTop={10}>
        {crewmates.map((crewmate) => (
          <Grid item xs={12} sm={6} md={4} key={crewmate.id}>
            <CrewmateCard
              id={crewmate.id}           // Pass the id
              name={crewmate.name}       // Pass the name
              mph={crewmate.mph}         // Pass the mph
              color={crewmate.color}     // Pass the color
              onDelete={() => deleteCrewmate(crewmate.id)} // Pass delete function
              onUpdate={() => updateCrewmate(crewmate.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// Prop validation
GalleryPage.propTypes = {
  crewmates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      mph: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteCrewmate: PropTypes.func.isRequired,
  updateCrewmate: PropTypes.func.isRequired
};

export default GalleryPage;


// import { Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// function GalleryPage({ crewmates, deleteCrewmate }) {
//   return (
//     <Container style={{ marginTop: '2rem' }}>
//       <Typography variant="h4" gutterBottom>Crewmate Gallery</Typography>
//       {crewmates.map((crewmate) => (
//         <Card key={crewmate.id} style={{ margin: '1rem 0' }}>
//           <CardContent>
//             <img src='/public/crew.png'/>
//             <Typography variant="h6">{crewmate.name}</Typography>
//             <Typography variant="h6" color="textSecondary">Mph: {crewmate.mph}</Typography>
//             <Typography variant="h6" color="textSecondary">Color: {crewmate.color}</Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small" component={Link} to={`/crewmate/${crewmate.id}`}>View</Button>
//             <Button size="small" color="secondary" onClick={() => deleteCrewmate(crewmate.id)}>Delete</Button>
//           </CardActions>
//         </Card>
//       ))}
//     </Container>
//   );
// }


// export default GalleryPage;
