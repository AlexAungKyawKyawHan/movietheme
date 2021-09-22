import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 10
  },
  cardWidth: {
    maxWidth: 170,
    height: 180

  },
  media: {
    height: 140,
  },
  image: {
    height: 120,
    width: 100
  }
});

const TopRatedMovies = ({ topratedmovies }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* <Grid container> */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log('swiper')}
      >
        {topratedmovies.map((topratedmovie) => (
          <SwiperSlide key={topratedmovie.poster_path}>
            <Link to={`/movies/${topratedmovie.id}`}>
              <Card className={classes.cardWidth}>
                <CardActionArea >
                  <CardMedia
                    component="img"
                    className={classes.media}
                    src={`https://image.tmdb.org/t/p/original${topratedmovie.poster_path}`}
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
export default TopRatedMovies;