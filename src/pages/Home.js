import Grid from '@material-ui/core/Grid'
import FetchPopularMovies from "../components/FetchData/PopularMovies";
import FetchTopRatedMovies from "../components/FetchData/TopRatedMovies";
import FetchUpComingMovies from "../components/FetchData/UpComingMovies";
import PopularMovies from "../components/UI/PopularMovies/index";
import TopRatedMovies from "../components/UI/TopRatedMovies/index";
import UpComingMovies from "../components/UI/UpComingMovies/index";
import Carousel from "../components/UI/Carousel/index"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LoadingSkeleton from "../components/UI/LoadingHome/index";


const useStyles = makeStyles({

  textPadding: {
    padding: 12
  }

});
const Home = () => {

  const classes = useStyles()
  const { data: popularmovies, isLoading, error } = FetchPopularMovies('https://api.themoviedb.org/3/movie/popular?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
  const { topRatedMoviesData: topratedmovies } = FetchTopRatedMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
  const { dataUpComingMovies: upcomingmovies } = FetchUpComingMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
  return (
    <div className="home">
      {error && <div className="error">
        {error}
      </div>}

      {isLoading && <div className="is-loading">
        <LoadingSkeleton></LoadingSkeleton>
      </div>}
      <Grid container>
        <Grid item>
          {topratedmovies && <Carousel carouselmovies={upcomingmovies} />}
        </Grid>
        <Grid item>
          {isLoading === false && <Typography className={classes.textPadding} variant="subtitle2">
            WHAT'S POPULAR
          </Typography>}
          {popularmovies && <PopularMovies popularmovies={popularmovies} />}
        </Grid>
        <Grid item>
          {isLoading === false && <Typography className={classes.textPadding} variant="subtitle2">
            FREE TO WATCH
          </Typography>}
          {topratedmovies && <TopRatedMovies topratedmovies={topratedmovies} />}
        </Grid>
        <Grid item>
          {isLoading === false && <Typography className={classes.textPadding} variant="subtitle2">
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