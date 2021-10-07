import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NavbarList from './NavbarList';
import Popover from '@material-ui/core/Popover';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { ReactSearchAutocomplete } from "react-search-autocomplete";


const drawerWidth = 240;

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=80bddf828c664838885d3d70a11fb1af&query="

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    cardWidth: {
      maxWidth: 40,
      height: 62,


    },
    divider: {
      marginTop: 10
    },
    textWidth: {
      marginTop: 30
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,

    },

  }),
);

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchData, setSearchData] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setAnchorEl(event.currentTarget);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {

    event.preventDefault();
    if (searchTerm) {
      
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {

          setSearchData(data.results)

          console.log(data.results, 'this is search')
        })
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openn = Boolean(anchorEl);
  const id = openn ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            MoiveTheme
          </Typography>
          <form onChange={handleClick}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                className="search"
                type="search"
                placeholder="search..."
                value={searchTerm}
                onChange={handleChange}
                id="outlined-basic"
                label="Search..."
                variant="outlined"
                size="small"
                color="white"
              />
              <SearchIcon
                aria-describedby={id}
                variant="contained"
                onClick={handleClick} />
            </Box>
          </form>

          <Popover
            id={id}
            open={openn}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >

            {searchData.map((value) =>
              <Link style={{ textDecoration: 'none' }} to={`/movies/${value.id}`}>
                <Grid container key={value.id}>
                  <Grid item xs={2}>
                    <Box sx={{
                      p: 1
                    }}>
                      <Card className={classes.cardWidth} >
                        <CardActionArea >
                          <CardMedia
                            component="img"
                            src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                          />
                        </CardActionArea>
                      </Card>
                    </Box>
                  </Grid>
                  <Grid item xs={10}>
                    <Box sx={{
                      p: 0
                    }}>
                      <Typography className={classes.textWidth} variant="body1">
                        {value.original_title}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Divider className={classes.divider} />
              </Link>
            )}

          </Popover>

        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="tempory"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <NavbarList></NavbarList>
        <Divider />
      </Drawer>

    </div>
  );
}




