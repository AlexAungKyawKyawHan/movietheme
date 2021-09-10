import { Swiper, SwiperSlide } from "swiper/react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from "@material-ui/core";

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

const useStyles = makeStyles({
 
 // carouselHeight: {
 //   height:210,

   
 // }

});
const Carousel = ({topratemoviesforcarousel}) => {
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

 {topratemoviesforcarousel.map((topratemovieforcarousel)=>(
      <SwiperSlide key={topratemovieforcarousel.poster_path}>
        
        <Card >
        
        
          <CardMedia
            component="img"
            src={`https://image.tmdb.org/t/p/original${topratemovieforcarousel.backdrop_path}`}
          />
        
      </Card>
      
      </SwiperSlide>
      ))}
</Swiper>
 
)
}
export default Carousel;