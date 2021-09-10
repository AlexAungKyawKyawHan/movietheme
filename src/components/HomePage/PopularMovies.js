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
import Container from '@material-ui/core/Container';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";


const useStyles = makeStyles({
  root:{
    flexGrow:1,
    padding:10
  },
  cardWidth: {
    maxWidth: 170,
    height:180
    
  },
  media: {
    height: 140,
  },
  image:{
    height:220,
    width:200
  }
});

const PopularMovies = ({movies})=>{
  const classes = useStyles()
 return(
  <div className={classes.root}>
   {/* <Grid container> */}
    <Swiper
    spaceBetween={20}
    slidesPerView={3}
    onSlideChange={()=> console.log('slide change')}
    onSwiper={swiper => console.log('swiper')}
    >
      {movies.map((movie)=>(
      <SwiperSlide key={movie.poster_path}>
        <Link to={`/movies/${movie.id}`}>
        <Card className={classes.cardWidth} >
        <CardActionArea >
          <CardMedia
            component="img"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
        </CardActionArea>
      </Card>
      </Link>
      </SwiperSlide>
      ))}
    </Swiper>
    {/* </Grid> */}
  </div>
  
   
     // <div className="movielist" key={movie.imdbID}>
     //  <Link to={`/movies/${movie.Title}`}>
     //  <h2>{movie.Title}</h2>
     //  </Link>
     // </div>
   
     
 

 )
}
export default PopularMovies;