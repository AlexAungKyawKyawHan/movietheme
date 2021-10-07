import Grid from '@material-ui/core/Grid'
import FetchPopularMovies from "../components/FetchData/PopularMovies";
import FetchPopularTVShows from '../components/FetchData/FetchPopularTVShows';
import FetchTopRatedMovies from "../components/FetchData/TopRatedMovies";
import FetchTopRatedTVShows from '../components/FetchData/FetchTopRatedTVShows'
import FetchUpComingMovies from "../components/FetchData/UpComingMovies";
import FetchOnAirTVShows from '../components/FetchData/FetchOnAirTVShows'
import PopularMovies from "../components/UI/PopularMovies/index";
import PopularTVShows from '../components/UI/PopularTVShows/index';
import TopRatedMovies from "../components/UI/TopRatedMovies/index";
import TopRatedTVShows from '../components/UI/TopRatedTVShows/index';
import UpComingMovies from "../components/UI/UpComingMovies/index";
import OnAirTVShows from '../components/UI/OnAirTVShows/index';
import Carousel from "../components/UI/Carousel/index"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LoadingSkeleton from "../components/UI/LoadingHome/index";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';

import { useState } from 'react';

const useStyles = makeStyles({

  textPadding: {
    padding: 12
  }

});
const Home = () => {
  const [selectPopularValue, setSelectPopularValue] = useState(1)
  const [selectTopRatedValue, setSelectTopRatedValue] = useState(1)
  const [selectUpComingValue, setSelectUpComingValue] = useState(1)
  const classes = useStyles()

  const { data: popularmovies, isLoading, error } = FetchPopularMovies('https://api.themoviedb.org/3/movie/popular?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
  const { popularTVShowsData: populartvshows } = FetchPopularTVShows('https://api.themoviedb.org/3/tv/popular?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1&limit=20')
  const { topRatedMoviesData: topratedmovies } = FetchTopRatedMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
  const { topRatedTVShowsData: topratedtvshows } = FetchTopRatedTVShows('https://api.themoviedb.org/3/tv/top_rated?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1&limit=20')
  const { dataUpComingMovies: upcomingmovies } = FetchUpComingMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
  const {onAirTVShowsData: onairtvshows} = FetchOnAirTVShows('https://api.themoviedb.org/3/tv/on_the_air?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1&limit=20')

  const popularHandleChange = (event) => {
    setSelectPopularValue(event.target.value);
  };
  const topRatedHandleChange = (event) => {
    setSelectTopRatedValue(event.target.value);
  };
  const upComingHandleChange = (event) => {
    setSelectUpComingValue(event.target.value);
  };
  return (
    <div className="home">
      {error && <div className="error">
        {error}
      </div>}

      {isLoading && <div className="is-loading">
        <LoadingSkeleton></LoadingSkeleton>
      </div>}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1

        }}
      >
        <Grid container>
          <Grid item>
            {topratedmovies && <Carousel carouselmovies={upcomingmovies} />}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 0
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{
              p: 0
            }}>
              {isLoading === false && <Typography className={classes.textPadding} variant="subtitle2">
                WHAT'S POPULAR
              </Typography>}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              p: 1
            }}>
              <Select
                value={selectPopularValue}
                onChange={popularHandleChange}
                label="Age"
                id="demo-multiple-name"
              >
                <MenuItem value={1}>Movies</MenuItem>
                <MenuItem value={2}>TVShows</MenuItem>
              </Select>

            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1

        }}
      >
        <Grid container>
          <Grid item>
            <Box sx={{
              p: 0
            }}>
              {selectPopularValue === 1 && popularmovies && <PopularMovies popularmovies={popularmovies} />}
              {selectPopularValue === 2 && populartvshows && <PopularTVShows populartvshows={populartvshows} />}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 0
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{
              p: 0
            }}>
              {isLoading === false && <Typography className={classes.textPadding} variant="subtitle2">
                TOP RATED
              </Typography>}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              p: 1
            }}>
              <Select
                value={selectTopRatedValue}
                onChange={topRatedHandleChange}
                label="Age"
                id="demo-multiple-name"
              >
                <MenuItem value={1}>Movies</MenuItem>
                <MenuItem value={2}>TVShows</MenuItem>
              </Select>

            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1

        }}
      >
        <Grid container>
          <Grid item>
            <Box sx={{
              p: 0
            }}>
              {selectTopRatedValue === 1 && topratedmovies && <TopRatedMovies topratedmovies={topratedmovies} />}
              {selectTopRatedValue === 2 && topratedtvshows && <TopRatedTVShows topratedtvshows={topratedtvshows} />}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 0
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{
              p: 0
            }}>
              {isLoading === false && <Typography className={classes.textPadding} variant="subtitle2">
                UPCOMING
              </Typography>}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              p: 1
            }}>
              <Select
                value={selectUpComingValue}
                onChange={upComingHandleChange}
                label="Age"
                id="demo-multiple-name"
              >
                <MenuItem value={1}>Movies</MenuItem>
                <MenuItem value={2}>TVShows</MenuItem>
              </Select>

            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1

        }}
      >
        <Grid container>
          <Grid item>
            <Box sx={{
              p: 0
            }}>
              {selectUpComingValue === 1 && upcomingmovies && <UpComingMovies upcomingmovies={upcomingmovies} />}
              {selectUpComingValue === 2 && onairtvshows && <OnAirTVShows onairtvshows={onairtvshows} />}
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Grid container>
        <Grid item>
          {topratedmovies && <Carousel carouselmovies={upcomingmovies} />}
        </Grid>
        <Grid item>
          {isLoading === false && <Typography className={classes.textPadding} variant="subtitle2">
            WHAT'S POPULAR
          </Typography>}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={selectValue}
              onChange={handleChange}
              label="Age"
              id="demo-multiple-name"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          {selectValue === 10 && popularmovies && <PopularMovies popularmovies={popularmovies} />}

          {selectValue === 20 && upcomingmovies && <UpComingMovies upcomingmovies={upcomingmovies} />}

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
      </Grid> */}
    </div>
  )
}
export default Home;
// testing for another api
// useFetch('https://www.omdbapi.com/?s=superman&apikey=34893b65')