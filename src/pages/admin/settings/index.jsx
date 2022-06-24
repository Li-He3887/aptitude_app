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
    <AdminLayout admin={me}>
      <h1 className={classes.head1}>Settings</h1>

      {renderItem('Name', me.name)}
      {renderItem('Email', me.email)}
      {renderItem('Role', me.role === 'SUPER_ADMIN' ? 'Super Admin' : 'Admin')}
      {renderItem('Organisation', me.organisation || '-')}
      {renderPasswordItem()}

      <ChangePasswordDialog
        open={open}
        onClose={() => setOpen(false)}
        email={me.email}
        id={me._id}
      />
    </AdminLayout>
  )
}

export default Settings
