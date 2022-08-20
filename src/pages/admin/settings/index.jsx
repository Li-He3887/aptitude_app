import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

import AdminLayout from '../../../layouts/admin-layout'
import ChangePasswordDialog from '../../../components/dialogs/change-password'

const useStyles = makeStyles({
  head1: {
    fontSize: '1.4rem',
    color: '#1853A0'
  },
  item: {
    width: '100%',
    display: 'flex',
    marginBottom: '0.8rem'
  },
  key: {
    width: '20%',
    fontSize: '1rem',
    fontWeight: 'bold',
    paddingRight: '0.4rem'
  },
  value: {
    fontSize: '0.9rem'
  },
  subheader: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    marginBottom: '0.8rem'
  }
})

function Settings() {
  const classes = useStyles()
  const router = useRouter()
  const [ loading, setLoading] = useState(true)

  const [me, setMe] = useState({})
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.replace('auth/sign-in')
    } else {
      setMe(JSON.parse(localStorage.getItem('admin')))
    }
    setLoading(false)
  }, [])

  // console.log(me)

  function renderItem(key, value) {
    return (
      <div className={classes.item}>
        <div className={classes.key}>{key}</div>
        <div className={classes.value}>{value}</div>
      </div>
    )
  }

  function renderPasswordItem() {
    return (
      <div className={classes.item}>
        <div className={classes.key}>Password</div>
        <Button
          size='small'
          onClick={() => setOpen(true)}
          variant='contained'
          color='primary'
        >
          Change Password
        </Button>
      </div>
    )
  }

  return (
    <AdminLayout admin={me}>
      <h1 className={classes.head1}>Settings</h1>
      {
        loading 
        ? 
          <></>
        :
          <>
            {renderItem('Name', me.name)}
            {renderItem('Email', me.email)}
            {renderItem('Role', me.role === 'SUPER_ADMIN' ? 'Super Admin' : 'Admin')}
            {renderItem('Organisation', me.organisation.tag || '-')}
            {renderPasswordItem()}
          </>
      }

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
