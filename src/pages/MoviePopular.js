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
// import InfiniteLoading from '../components/FetchData/InfiniteLoading'
import { useEffect, useState, useRef } from 'react';

const TOTAL_PAGES = 500;
const MoviePopular = () => {
 const [loading, setLoading] = useState(true);
 const [allData, setAllData] = useState([]);
 const [pageNum, setPageNum] = useState(1);
 const [lastElement, setLastElement] = useState(null);

 const observer = useRef(
  new IntersectionObserver((entries) => {
   const first = entries[0];
   if (first.isIntersecting) {
    setPageNum((no) => no + 1);
   }
  })
 );

 const callData = () => {
   fetch(`https://api.themoviedb.org/3/movie/popular?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=${pageNum}`)
   .then(res =>{
    console.log(res)
    return res.json();
   }).then(data => {
     let all = new Set([...allData,...data.results])
     setAllData([...all])
   })
 }
 useEffect(() => {
		if (pageNum <= TOTAL_PAGES) {
			callData();
		}
	}, [pageNum]);

 useEffect(() => {
		const currentElement = lastElement;
		const currentObserver = observer.current;

		if (currentElement) {
			currentObserver.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement);
			}
		};
	}, [lastElement]);
 
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
 // const { allData: popularmovies , pageNum: pageNumber } = InfiniteLoading(`https://api.themoviedb.org/3/movie/popular?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=${pageNumber}`)
 return (
  <div style={{ width: '100%' }}>
   <Box
    sx={{
     display: 'flex',
     flexDirection: 'column',
     p: 1
    }}
   >
    {allData.map((popularmovie) => (
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
   {loading && <p className='text-center'>loading...</p>}

  </div>
 )
}
export default MoviePopular;