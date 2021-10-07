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

const TopRatedTVShows = () => {
 const [topRatedTVShows, setTopRatedTVShows] = useState([]);
 const [noMore, setNoMore] = useState(true);
 const [page, setPage] = useState(2)
 const classes = useStyles()

 useEffect(() => {
  const getData = async () => {
   const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1&limit=20`
   );
   const data = await res.json();
   console.log(data, 'this is data')
   setTopRatedTVShows(data.results);
   console.log(data.results)
  }
  getData();
 }, []);

 const callNextPage = async () => {
  const res = await fetch(
   `https://api.themoviedb.org/3/tv/top_rated?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=${page}&limit=20`
  );
  const data = await res.json();
  return data.results
 }

 const fetchData = async () => {
  const nextTopRatedTVShows = await callNextPage();
  setTopRatedTVShows([...topRatedTVShows, ...nextTopRatedTVShows])
  if (nextTopRatedTVShows.length === 0 || nextTopRatedTVShows.length < 20) {
   setNoMore(false);
  }
  setPage(page + 1)

 }
 // const { topRatedTVShowsData: topratedtvshows } = FetchTopRatedTVShows('https://api.themoviedb.org/3/tv/top_rated?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
 return (
  <div>
   <InfiniteScroll
    dataLength={topRatedTVShows.length}
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
     {topRatedTVShows.map((topratedtvshow) => (
      <Link style={{ textDecoration: 'none' }} to={`/tvshow/${topratedtvshow.id}`}>
       <Grid container key={topratedtvshow.poster_path}>
        <Grid item xs={4}>
         <Box sx={{
          p: 0
         }}>
          <Card className={classes.cardWidth} >
           <CardActionArea >
            <CardMedia
             component="img"
             src={`https://image.tmdb.org/t/p/original${topratedtvshow.poster_path}`}
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
           {topratedtvshow.name}
          </Typography>
          <LinesEllipsis
           text={topratedtvshow.overview}
           maxLine='3'
           ellipsis='...'>
          </LinesEllipsis>
          <Typography variant="caption" >
           {topratedtvshow.first_air_date}
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
export default TopRatedTVShows