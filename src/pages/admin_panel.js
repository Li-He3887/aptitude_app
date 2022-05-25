import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Drawer,
    CssBaseline,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} 
from '@material-ui/core';
import ResponsiveImage from '../components/ResponsiveImage'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import PeopleIcon from '@mui/icons-material/People';
// import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { alpha, makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    // Toolbar
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      color: "#000"
    },
    appBar: {
      backgroundColor: "#fff"
    },
    image: {
      flexGrow: 0.1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      maxHeight: '50px',
      maxWidth: '100px'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },

    // Sidebar
    root: {
        display: 'flex',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: 'auto',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
  }));

function AdminPanel() {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.root}>
                <CssBaseline />
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                    {/* Toolbar */}
                    <AppBar 
                        position="fixed" 
                        className={classes.appBar}
                        // color="white"
                        >
                        <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.logo}
                            // color="dark"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <ResponsiveImage
                            variant="h6"
                            className={classes.image}
                            width='30px'
                            alt='Forward School'
                            src={require('../../public/forward-school-logo-blue.png')}
                        />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                            </div>
                            <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        </Toolbar>
                    </AppBar>

                    {/* SideBar */}
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                    <h5>Main</h5>
                    <List>
                        {['Dashboard', 'Admins'].map((text, index) => (
                        <ListItem button key={text}>
                            {/* <ListItemIcon>{index % 2 === 0 ? <OtherHousesIcon /> : <PeopleIcon />}</ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <Toolbar />
                    <h1>Overview</h1>
                </main>
            </div>

        </div>
    )
    
}

export default AdminPanel;