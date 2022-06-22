import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Sidebar from '../components/sidebar'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: '250px'
  }
}))

const AdminLayout = ({ children, admin }) => {
  const classes = useStyles()

  return (
    <div>
      <Sidebar admin={admin} />
      <main className={classes.content}>
        {' '}
        <Toolbar />
        {children}
      </main>
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.any
}

export default AdminLayout
