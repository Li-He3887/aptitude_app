import React, { useState } from 'react'
import { useMutation } from 'react-query'
import PropTypes from 'prop-types'
import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useSnackbar } from 'notistack'

import { createAdmin } from '../../api/v2/admins'

const useStyles = makeStyles({
  container: {
    marginTop: '2rem'
  },
  head1: {
    fontSize: '1.4rem',
    color: '#1853A0'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '1rem'
  },
  input: {
    marginBottom: '1rem'
  }
})

const NewUser = ({ open, onClose }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const mutation = useMutation(data => createAdmin(data))

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    role: 'ADMIN'
  })

  const onChangeHandler = (val, name) => {
    setForm(prev => ({
      ...prev,
      [name]: val
    }))
  }

  const onSubmitHandler = () => {
    mutation.mutate(form)
  }

  if (mutation.error) {
    enqueueSnackbar('Failed to add admin', {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
  }

  return (
    <Dialog open={open} fullWidth maxWidth='xs' onClose={onClose}>
      <DialogTitle>
        <h1 className={classes.head1}>Create Admin</h1>
      </DialogTitle>

      <DialogContent>
        <div className={classes.form}>
          <TextField
            label='Full Name'
            variant='outlined'
            size='large'
            value={form.fullName}
            className={classes.input}
            onChange={e => onChangeHandler(e.target.value, 'fullName')}
          />

          <TextField
            label='Email'
            variant='outlined'
            size='large'
            value={form.email}
            className={classes.input}
            onChange={e => onChangeHandler(e.target.value, 'email')}
          />

          <TextField
            label='Phone'
            variant='outlined'
            size='large'
            value={form.phone}
            className={classes.input}
            onChange={e => onChangeHandler(e.target.value, 'phone')}
          />

          <TextField
            label='Organisation'
            variant='outlined'
            size='large'
            value={form.organisation}
            className={classes.input}
            onChange={e => onChangeHandler(e.target.value, 'organisation')}
          />
          <Button
            disabled={mutation.isLoading}
            variant='contained'
            color='primary'
            size='large'
            onClick={onSubmitHandler}
          >
            {mutation.isLoading ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

NewUser.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default NewUser
