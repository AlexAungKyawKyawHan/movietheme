import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinesEllipsis from 'react-lines-ellipsis';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  cardWidth: {
    maxWidth: 130,
    height: 162,
    marginTop: 10

  },
  divider: {
    marginTop: 10
  },

});

const MovieTopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [noMore, setNoMore] = useState(true);
  const [page, setPage] = useState(2)
  const classes = useStyles()

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1&limit=20`
      );
      const data = await res.json();
      console.log(data, 'this is data')
      setTopRatedMovies(data.results);
      console.log(data.results)

    }
    getData();
  }, []);

  const callNextPage = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=${page}&limit=20`
    );
    const data = await res.json();
    return data.results
  }

  const fetchData = async () => {
    const nextTopRatedMovies = await callNextPage();
    setTopRatedMovies([...topRatedMovies, ...nextTopRatedMovies])
    if (nextTopRatedMovies.length === 0 || nextTopRatedMovies.length < 20) {
      setNoMore(false);
    }
    setPage(page + 1)

  }

  return (
    <div>
      <InfiniteScroll
        dataLength={topRatedMovies.length} 
        next={fetchData}
        hasMore={noMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 1
          }}
        >
          {topRatedMovies.map((topratedmovie) => (
            <Link style={{ textDecoration: 'none' }} to={`/movies/${topratedmovie.id}`}>
              <Grid container key={topratedmovie.poster_path}>
                <Grid item xs={4}>
                  <Box sx={{
                    p: 0
                  }}>
                    <Card className={classes.cardWidth} >
                      <CardActionArea >
                        <CardMedia
                          component="img"
                          src={`https://image.tmdb.org/t/p/original${topratedmovie.poster_path}`}
                        />
                      </CardActionArea>

                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box sx={{
                    p: 1
                  }}>
                    <Typography variant="h6">
                      {topratedmovie.original_title}
                    </Typography>
                    <LinesEllipsis
                      text={topratedmovie.overview}
                      maxLine='3'
                      ellipsis='...'>
                    </LinesEllipsis>
                    <Typography variant="caption" >
                      {topratedmovie.release_date}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Divider className={classes.divider} />
            </Link>
          ))}

        </Box>
      </InfiniteScroll>
    </div>
  )

}
export default MovieTopRated;