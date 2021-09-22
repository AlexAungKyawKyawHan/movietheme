import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    boxShadow: 0,
    border: 0

  },
  tabcontainer: {
    backgroundColor: '#ffffff',

  },
  tabtext: {
    color: '#000000',

  },
  tabpanel: {
    color: '#000000',

  },
  label: {
    boxShadow: '0'
  },
}));

export default function TabBar({ overview }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar classes={{ label: classes.label }} className={classes.tabcontainer} position="static">
        <Tabs classes={{ label: classes.label }} className={classes.tabcontainer} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.tabtext} label="Overview" {...a11yProps(0)} />
          <Tab className={classes.tabtext} label="You May Also Like" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tabpanel} value={value} index={0}>
        {overview}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>

    </div>
  );
}
