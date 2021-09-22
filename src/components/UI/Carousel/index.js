import { Swiper, SwiperSlide } from "swiper/react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import "swiper/swiper.min.css";

import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const useStyles = makeStyles({
  // carouselHeight: {
  //   height:210,
  // }
});
const Carousel = ({ carouselmovies }) => {
  const classes = useStyles()
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        "delay": 8000,
        "disableOnInteraction": false
      }}
      pagination={{
        "clickable": true
      }}
      navigation={true}
      className="mySwiper">

      {carouselmovies.map((carouselmovie) => (
        <SwiperSlide key={carouselmovie.poster_path}>
          <Card >
            <CardMedia
              component="img"
              src={`https://image.tmdb.org/t/p/original${carouselmovie.backdrop_path}`}
            />
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Carousel;