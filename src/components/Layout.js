import { classExpression } from "@babel/types";
import { makeStyles } from "@material-ui/styles";
import Drawer from '@material-ui/core/Drawer'
import { Typography } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
const drawerWidth = 240
const useStyles = makeStyles({
 page:{
  background:'#ffffff',
  width:'100%'
 },
//  drawer:{
//   width:drawerWidth
//  },
//  drawerPaper:{
//   width:drawerWidth
//  },
 root:{
  display:'flex'
 },
//  appbar:{
//   width:`calc(100% - ${drawerWidth}px)`
//  }
})

const Layout = ({children}) => {
 const classes = useStyles()
 return (
  <div className={classes.root}>
   <AppBar>
    <Toolbar>
      <IconButton color="inherit">
        <MenuIcon />
      </IconButton>
     <Typography>
      MovieTHEME
     </Typography>
    </Toolbar>
   </AppBar>
   {/* <Drawer
   className={classes.drawer}
   variant="permanent"
   anchor="left"
   classes={{paper:classes.drawerPaper}}
   >
    <div>
     <Typography variant="h5">
      MovieTheme
     </Typography>
    </div>
    <List>
     <ListItem>
       <ListItemText primary="gello" />
     </ListItem>
     <ListItem>
       <ListItemText primary="gello" />
     </ListItem>
     <ListItem>
       <ListItemText primary="gello" />
     </ListItem>
    </List>
   </Drawer> */}
   <div className={classes.page}>
    {children}
   </div>
  </div>
 )
}

export default Layout;