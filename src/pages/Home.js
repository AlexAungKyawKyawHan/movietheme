import PopularMovies from "../components/HomePage/PopularMovies";
import useFetch from "../components/HomePage/useFetch";
import Grid from '@material-ui/core/Grid'
import useTopRatedMoviesFetch from "../components/HomePage/useTopRatedMoviesFetch";
import TopRatedMovies from "../components/HomePage/TopRatedMovies";
import UpComingMovies from "../components/HomePage/UpComingMovies";
import useUpComingMoviesFetch from "../components/HomePage/useUpComingMoviesFetch";
import Carousel from "../components/HomePage/Carousel"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LoadingSkeleton from "../components/HomePage/LoadingSkeleton";


const useStyles = makeStyles({
 
  textPadding:{
    padding:12
  }
 
 });
const Home = ()=>{
  
   const classes = useStyles()
 const {data: movies, isLoading, error} = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
 const {topRatedMoviesData :topratedmovies, topRatedMovieLoading, topRatedMovieError} = useTopRatedMoviesFetch('https://api.themoviedb.org/3/movie/top_rated?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
 const {dataUpComingMovies: upcomingmovies, UpComingMoviesLoading, UpComingMoviesError} = useUpComingMoviesFetch('https://api.themoviedb.org/3/movie/upcoming?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
 return(
  <div className="home">
   {error &&<div className="error">
    {error}
   </div>}

   {isLoading &&<div className="is-loading">
     <LoadingSkeleton></LoadingSkeleton>
   </div>}
  <Grid container>
    <Grid item>
      {topratedmovies && <Carousel topratemoviesforcarousel={upcomingmovies} />}
    </Grid>
    <Grid item>
      {isLoading === false &&<Typography className={classes.textPadding} variant="subtitle2">
        WHAT'S POPULAR
      </Typography>}
      {movies && <PopularMovies movies={movies} />}
    </Grid>
    <Grid item>
      {isLoading === false &&<Typography className={classes.textPadding} variant="subtitle2">
        FREE TO WATCH
      </Typography>}
      {topratedmovies && <TopRatedMovies topratedmovies={topratedmovies} />}
    </Grid>
    <Grid item>
      {isLoading === false &&<Typography className={classes.textPadding} variant="subtitle2">
        TRENDING
      </Typography>}
      {upcomingmovies && <UpComingMovies upcomingmovies={upcomingmovies} />}
    </Grid>
   </Grid>
  </div>
 )
}
export default Home;
// testing for another api
// useFetch('https://www.omdbapi.com/?s=superman&apikey=34893b65')