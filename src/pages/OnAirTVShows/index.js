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
import FetchOnAirTVShows from '../../components/FetchData/FetchOnAirTVShows';

const OnAirTVShows = () => {
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
 const { onAirTVShowsData: onairtvshows } = FetchOnAirTVShows('https://api.themoviedb.org/3/tv/on_the_air?api_key=80bddf828c664838885d3d70a11fb1af&language=en-US&page=1')
 return (
  <div>
   <Box
    sx={{
     display: 'flex',
     flexDirection: 'column',
     p: 1
    }}
   >
    {onairtvshows.map((onairtvshow) => (
     <Link style={{ textDecoration: 'none' }} to={`/movies/${onairtvshow.id}`}>
      <Grid container key={onairtvshow.poster_path}>
       <Grid item xs={4}>
        <Box sx={{
         p: 0
        }}>
         <Card className={classes.cardWidth} >
          <CardActionArea >
           <CardMedia
            component="img"
            src={`https://image.tmdb.org/t/p/original${onairtvshow.poster_path}`}
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
          {onairtvshow.name}
         </Typography>
         <LinesEllipsis
          text={onairtvshow.overview}
          maxLine='3'
          ellipsis='...'>
         </LinesEllipsis>
         <Typography variant="caption" >
          {onairtvshow.first_air_date}
         </Typography>
        </Box>
       </Grid>
      </Grid>
      <Divider className={classes.divider} />
     </Link>
    ))}
   </Box>
  </div>
 )
}
export default OnAirTVShows