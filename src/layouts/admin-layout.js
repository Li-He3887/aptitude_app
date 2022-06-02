import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Sidebar from '../components/sidebar'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: '250px'
  }
}))

const AdminLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div>
      <Sidebar />
      <div>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.any
}

export default AdminLayout
