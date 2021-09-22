import { useParams } from "react-router-dom";
import FetchMovieDetail from "../components/FetchData/MovieDetail";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TabBar from '../components/UI/TabBar/index'
import Typography from '@material-ui/core/Typography';
import LoadingSkeletonMoiveDetail from '../components/UI/LoadingMovieDetail/index'

const MovieDetails = () => {
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
  const { dataMovieDetail: movie, movieDetailLoading } = FetchMovieDetail(`https://api.themoviedb.org/3/movie/${id}?api_key=80bddf828c664838885d3d70a11fb1af`)
  let movieruntime = Math.floor(movie.runtime / 60)

  return (
    <div>
      {movieDetailLoading && <LoadingSkeletonMoiveDetail></LoadingSkeletonMoiveDetail>}
      {movieDetailLoading === false && <Grid className={classes.root} container>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component="img"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Card className={classes.media} >
              <CardMedia
                component="img"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />

            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12} >
          <Grid container justifyContent="center" spacing={2}>
            {movie && (
              <article>
                <h4>{movie.original_title}</h4>
              </article>
            )}
          </Grid>
          <Grid container justifyContent="center" spacing={2}>
            <Typography className={classes.textmargin} variant="body2" gutterBottom>{movie.release_date} {movieruntime}hrs</Typography>
          </Grid>
          <Grid container justifyContent="center" spacing={2}>
            {movie.genres.map((genres) => (
              <Typography className={classes.text2margin} key={genres.id} variant="caption" gutterBottom>
                {genres.name},
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TabBar overview={movie.overview}></TabBar>
        </Grid>
      </Grid>}
    </div>
  )
}
export default MovieDetails;