import {Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
  },
  media: {
    height: 140,
  },
});

const StarWarMovies = ({movies})=>{
  const classes = useStyles()
 return(
  
    <Grid container>
     {movies.map((movie)=>(
     <Grid item key={movie.imdbID} xs={6} lg={2}>
      
        <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={movie.Poster}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h2">
              {movie.Title}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        
      </Card>
       
   </Grid>
   ))}
   
  </Grid>
  
   
     // <div className="movielist" key={movie.imdbID}>
     //  <Link to={`/movies/${movie.Title}`}>
     //  <h2>{movie.Title}</h2>
     //  </Link>
     // </div>
   
     
 

 )
}
export default StarWarMovies;