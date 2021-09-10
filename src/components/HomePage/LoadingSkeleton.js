import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    
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
      <Grid item xs={4}>
      <Skeleton variant="rect" width={165} height={180} />
      </Grid>
      <Grid item xs={4}>
      <Skeleton variant="rect" width={165} height={180} />
      </Grid>
      <Grid item xs={4}>
      <Skeleton variant="rect" width={165} height={180} />
      </Grid>
      <Grid item xs={4}>
      <Skeleton variant="rect" width={165} height={180} />
      </Grid>
      <Grid item xs={4}>
      <Skeleton variant="rect" width={165} height={180} />
      </Grid>
      <Grid item xs={4}>
      <Skeleton variant="rect" width={165} height={180} />
      </Grid>
     </Grid>  
    </div>
    
  );
}