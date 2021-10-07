import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinesEllipsis from 'react-lines-ellipsis'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';

const MoviePopular = () => {
 const [items, setItems] = useState([]);
 const [noMore, setNoMore] = useState(true);
 const [page, setPage] = useState(2)


 useEffect(() => {
  const getData = async () => {
   const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1&limit=20`
   );
   const data = await res.json();
   console.log(data, 'this is data')
   setItems(data.results);
   console.log(data.results)

  }
  getData();
 }, []);

 const fetchdats = async () => {
  const res = await fetch(
   `https://api.themoviedb.org/3/movie/popular?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=${page}&limit=20`
  );
  const data = await res.json();

  return data.results

 }

 const fetchData = async () => {
  const server = await fetchdats();

  setItems([...items, ...server])
  if (server.length === 0 || server.length < 20){
   setNoMore(false);
  }
  setPage(page + 1)

 }

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
 const classes = useStyles()
 
 return (
  <div style={{ width: '100%' }}>
   <InfiniteScroll
    dataLength={items.length} //This is important field to render the next data
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
     {items.map((popularmovie) => (
      <Link style={{ textDecoration: 'none' }} to={`/movies/${popularmovie.id}`}>
       <Grid container key={popularmovie.poster_path}>
        <Grid item xs={4}>
         <Box sx={{
          p: 0
         }}>
          <Card className={classes.cardWidth} >
           <CardActionArea >
            <CardMedia
             component="img"
             src={`https://image.tmdb.org/t/p/original${popularmovie.poster_path}`}
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
           {popularmovie.original_title}
          </Typography>
          <LinesEllipsis
           text={popularmovie.overview}
           maxLine='3'
           ellipsis='...'>
          </LinesEllipsis>
          <Typography variant="caption" >
           {popularmovie.release_date}
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
export default MoviePopular;