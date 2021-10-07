import { useParams } from "react-router-dom";
import FetchDetail from "../../components/FetchData/Detail";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TabBar from '../../components/UI/TabBar/index'
import Typography from '@material-ui/core/Typography';
import Similar from '../../components/FetchData/Similar'
import LoadingSkeleton from "../../components/UI/LoadingMovieDetail/index";

const TVShowsDetail = () => {
 const useStyles = makeStyles({
  root: {
   flexGrow: 1,

  },
  cardWidth: {
   maxWidth: 130,
   height: 162

  },
  media: {
   marginTop: -50,
   height: 140,
   width: 100

  },

  image: {
   height: 120,
   width: 100
  },
  textmargin: {
   marginBottom: 30
  },
  text2margin: {
   marginBottom: 20,
   marginTop: -20,
   color: '#1652ED'
  }

 });
 const classes = useStyles()
 const { id } = useParams()
 const { detailData: tvshow, detailLoading } = FetchDetail(`https://api.themoviedb.org/3/tv/${id}?api_key=80bddf828c664838885d3d70a11fb1af`)
 const {similarData: similarTVShows} = Similar(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=80bddf828c664838885d3d70a11fb1af`)

 return (
  <div>
   {detailLoading && <LoadingSkeleton></LoadingSkeleton>}
   {detailLoading === false && <Grid className={classes.root} container>
    <Grid item xs={12}>
     <Card>
      <CardMedia
       component="img"
       src={`https://image.tmdb.org/t/p/original${tvshow.backdrop_path}`}
      />
     </Card>
    </Grid>
    <Grid item xs={12}>
     <Grid container justifyContent="center" spacing={2}>
      <Card className={classes.media} >
       <CardMedia
        component="img"
        src={`https://image.tmdb.org/t/p/original${tvshow.poster_path}`}
       />

      </Card>
     </Grid>
    </Grid>

    <Grid item xs={12} >
     <Grid container justifyContent="center" spacing={2}>
      {tvshow && (
       <article>
        <h4>{tvshow.name}</h4>
       </article>
      )}
     </Grid>
     <Grid container justifyContent="center" spacing={2}>
      <Typography className={classes.textmargin} variant="body2" gutterBottom>{tvshow.first_air_date}</Typography>
     </Grid>
     <Grid container justifyContent="center" spacing={2}>
      {tvshow.genres.map((genres) => (
       <Typography className={classes.text2margin} key={genres.id} variant="caption" gutterBottom>
        {genres.name},
       </Typography>
      ))}
     </Grid>
    </Grid>
    <Grid item xs={12}>
     <TabBar overview={tvshow.overview} similarTVShows={similarTVShows}></TabBar>
    </Grid>
   </Grid>}
  </div>
 )
}
export default TVShowsDetail;