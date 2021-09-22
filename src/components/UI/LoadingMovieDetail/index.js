import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    margin: {
      marginTop: -50
    }

  }),
);

export default function LoadingSkeleton() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Skeleton variant="rect" width={500} height={250} />
        </Grid>
        <Grid item xs={12}>
          <Grid className={classes.margin} container justifyContent="center">
            <Skeleton variant="rect" width={170} height={180} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rect" width={500} height={250} />
        </Grid>
      </Grid>
    </div>

  );
}