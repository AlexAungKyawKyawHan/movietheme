import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function NavbarList() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Movies">
        <Link style={{ textDecoration: 'none' }} to={`/popularmovies`}>
          <TreeItem nodeId="2" label="Popular" />
        </Link>
        <Link style={{ textDecoration: 'none' }} to={`/topratedmoives`}>
          <TreeItem nodeId="3" label="TopRated" />
        </Link>
        <Link style={{ textDecoration: 'none' }} to={`/upcomingmoives`}>
          <TreeItem nodeId="4" label="Upcoming" />
        </Link>
      </TreeItem>
      <TreeItem nodeId="5" label="TV Shows">
        <Link style={{ textDecoration: 'none' }} to={`/populartvshows`}>
          <TreeItem nodeId="10" label="Popular" />
        </Link>
        <Link style={{ textDecoration: 'none' }} to={`/topratedtvshows`}>
          <TreeItem nodeId="6" label="TopRated" />
        </Link>
        <Link style={{ textDecoration: 'none' }} to={`/onairtvshows`}>
          <TreeItem nodeId="6" label="OnTv" />
        </Link>


      </TreeItem>
    </TreeView>
  );
}