import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Hidden,
  CssBaseline,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import PeopleIcon from '@mui/icons-material/People'
import OtherHousesIcon from '@mui/icons-material/OtherHouses'
import SettingsIcon from '@mui/icons-material/Settings'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import ResponsiveImage from '../responsive-image'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  navbarTitle: {
    marginLeft: '0.8rem'
  },
  image: {
    flexGrow: 0.1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    maxHeight: '100px',
    maxWidth: '150px'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 1
    }
  },
  appBar: {
    backgroundColor: '#fff',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.4rem',
    paddingTop: '1rem',
    marginBottom: '0.8rem'
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

function Sidebar(props) {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <ResponsiveImage
          noWrap
          variant='h6'
          className={classes.image}
          width='200px'
          alt='Forward School'
          src={require('../../../public/forward-school-logo-blue.png')}
        />
      </div>
      <h3 className={classes.navbarTitle}>Main</h3>
      <div>
        <Link href='/admin/dashboard' color='inherit'>
          <ListItem button>
            <ListItemIcon>
              <OtherHousesIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
        </Link>

        <Link href='/admin/users' color='inherit'>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Admins' />
          </ListItem>
        </Link>

        <Link href='/admin/setting' color='inherit'>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Setting' />
          </ListItem>
        </Link>
      </div>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

Sidebar.propTypes = {
  window: PropTypes.any
}

export default Sidebar
