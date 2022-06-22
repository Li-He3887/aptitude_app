import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/styles'

import AdminLayout from '../../../layouts/admin-layout'
import EditSetting from '../../../components/function/EditSetting'

const useStyles = makeStyles({})

function Settings() {
  const classes = useStyles()
  const router = useRouter()
  const [me, setMe] = useState({})


  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.replace('auth/sign-in')
    } else {
      setMe(JSON.parse(localStorage.getItem('admin')))
    }
  }, [])

  return (
<<<<<<< HEAD
    <AdminLayout>
      <h1 className={classes.head1}>Settings</h1>

      <EditSetting />
=======
    <AdminLayout admin={me}>
      <h1 className={classes.head1}>Settings</h1>

      <EditSetting admin={me}/>
>>>>>>> a1d0b664d2ea986b3af630a76e5ff356cf1bab94
    </AdminLayout>
  )
}

export default Settings
