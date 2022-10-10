import SearchAppBar from './components/SearchAppBar'
import TourPage from './components/TourPage'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './App.css';
import tourData from './data.json';

function App() {
  return (
    <div className="App">
      <SearchAppBar brandName="Tour-Info" />
      <Container minWidth="sm">
        {tourData.map((tour) => (
          <>
            <Typography variant="h4" component="h6" marginY={3}>Top {tour.name} Tours</Typography>
            <Grid container spacing={5}>
              {tour.tours.map((item) => (
                <TourPage item={item} />
              ))}
              
            </Grid>
          </>
        ))}
      </Container>
      
    </div>
  );
}

export default App;
