import React from 'react'
import { makeStyles } from '@material-ui/styles'

import AdminLayout from '../../../layouts/admin-layout'
import EditSetting from '../../../components/function/EditSetting'

const useStyles = makeStyles({})

function Settings() {
  const classes = useStyles()

  return (
    <AdminLayout>
      <h1 className={classes.head1}>Settings</h1>

      <EditSetting />
    </AdminLayout>
  )
}

export default Settings
