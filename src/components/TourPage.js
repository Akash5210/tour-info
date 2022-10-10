import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


function TourPage(props){
    return (
        <Grid item xs={3}>
                <Paper >
                    <img src={props.item.image} className="paper-img" />
                    <Box paddingX={1}>
                        <Typography variant="body2">
                            {props.item.name}
                        </Typography>
                        <Typography variant="caption">
                            {props.item.duration} hours
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <Rating name="read-only" value={props.item.rating} precision={0.5} readOnly />
                            <Typography variant="caption" >{props.item.rating} ({props.item.numberOfReviews} reviews)</Typography>
                        </Box>
                        <Typography variant="h6" component="h6" marginY={3}>From  ${props.item.price}</Typography>
                    </Box>
                </Paper>
                
        </Grid>
        
    );
}

export default TourPage;