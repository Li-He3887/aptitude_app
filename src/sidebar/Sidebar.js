import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    CssBaseline,
    Link
} 
from '@material-ui/core';
import ResponsiveImage from '../components/ResponsiveImage'
import MenuIcon from '@material-ui/icons/Menu';
import PeopleIcon from '@mui/icons-material/People';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    // Toolbar
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      color: '#000'
    },
    appBar: {
      backgroundColor: '#fff'
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
        marginLeft: theme.spacing(2),
      },
  }));

function Sidebar() {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.root}>
                <CssBaseline />
                <Drawer
                    className={classes.drawer}
                    variant='permanent'
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                >
                    {/* Toolbar */}
                    <AppBar 
                        position='fixed' 
                        className={classes.appBar}
                        // color='white'
                        >
                        <Toolbar>
                          <IconButton
                              edge='start'
                              className={classes.logo}
                              // color='dark'
                              aria-label='open drawer'
                          >
                              <MenuIcon />
                          </IconButton>
                          <ResponsiveImage
                              variant='h6'
                              className={classes.image}
                              width='30px'
                              alt='Forward School'
                              src={require('../../public/forward-school-logo-blue.png')}
                          />
                        </Toolbar>
                    </AppBar>

                    {/* SideBar */}
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <h5>Main</h5>
                        <div>
                            <Link 
                                href='/admin_panel/dashboard' 
                                color='inherit'
                                display='block'>
                                <a display='inline'>
                                    <OtherHousesIcon />
                                    Dashboard
                                </a>
                            </Link>
                            <Link 
                                href='/admin_panel/admins' 
                                color='inherit'
                                display='block'>
                                <a>
                                    <PeopleIcon />
                                    Admins
                                </a>
                            </Link>
                        </div>
                            
                    </div>
                </Drawer>
            </div>

        </div>
    )
    
}

export default Sidebar