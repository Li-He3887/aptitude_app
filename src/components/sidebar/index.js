import React, { useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Hidden,
  CssBaseline,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'

import PeopleIcon from '@mui/icons-material/People'
import MoreVertIcon from '@mui/icons-material/MoreVert'
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
    display: 'block',
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
    width: drawerWidth,
    paddingTop: '1rem'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  list: {
    height: '100%',
    marginTop: '1.4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  link: {
    width: '100%',

    '&:hover': {
      textDecoration: 'none'
    }
  },
  lastLink: {
    width: '100%',
    marginTop: 'auto',

    '&:hover': {
      textDecoration: 'none'
    }
  },
  adminContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  adminName: {
    color: '#000',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  adminRole: {
    color: '#000',
    fontSize: '0.8rem'
  }
}))

function Sidebar(props) {
  const { window, admin } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const router = useRouter()
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const isSuperAdmin = admin => {
    if (!admin) {
      return false
    } else {
      const role = admin.role
      if (role !== 'SUPER_ADMIN') {
        return false
      } else {
        return true
      }
    }
  }

  const logOut = () => {
    localStorage.removeItem('admin')
    localStorage.removeItem('token')
    router.replace('auth/sign-in')
  }

  const drawer = (
    <>
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
      <List className={classes.list}>
        <Link href='/admin/dashboard' color='inherit' className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <OtherHousesIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
        </Link>

        {isSuperAdmin(admin) ? (
          <Link href='/admin/users' color='inherit' className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary='Admins' />
            </ListItem>
          </Link>
        ) : (
          <></>
        )}

        <Link
          href='/admin/settings'
          color='inherit'
          className={classes.lastLink}
        >
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </Link>
      </List>
    </>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex' }}>
            {!!admin && (
              <div className={classes.adminContainer}>
                <div className={classes.adminName}>{admin?.name}</div>
                <div className={classes.adminRole}>
                  {admin?.organisation?.tag} / {admin?.role === 'ADMIN' ? 'Admin' : 'Super-admin'}
                </div>
              </div>
            )}
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              <MenuItem onClick={() => logOut()}>
                <Typography textAlign='center'>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
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
  window: PropTypes.any,
  admin: PropTypes.any 
}

export default Sidebar
