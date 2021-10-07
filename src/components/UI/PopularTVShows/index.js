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
    height: 220,
    width: 200
  }
});

const PopularTVShows = ({ populartvshows }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log('swiper')}
      >
        {populartvshows.map((populartvshow) => (
          <SwiperSlide key={populartvshow.poster_path}>
            <Link to={`/tvshow/${populartvshow.id}`}>
              <Card className={classes.cardWidth} >
                <CardActionArea >
                  <CardMedia
                    component="img"
                    src={`https://image.tmdb.org/t/p/original${populartvshow.poster_path}`}
                  />
                </CardActionArea>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default PopularTVShows;