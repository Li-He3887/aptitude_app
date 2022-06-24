/* eslint-disable react/jsx-curly-newline */
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

import { changePass } from '../../api/v2/admins'

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
  },
  errorMessage: {
    color: 'red',
    fontSize: '0.8rem',
    marginBottom: '0.6rem'
  }
})

const ChangePasswordDialog = ({ open, onClose, email, id }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const mutation = useMutation(data => changePass(data), {
    onSuccess: () => {
      enqueueSnackbar('Password updated successfully', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
      onClose()
    },
    onError: (err) => {
      console.log(err)

      enqueueSnackbar('Failed to change password', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
    }
  })

  const [form, setForm] = useState({
    newPassword: '',
    confirmPassword: ''
  })

  const onChangeHandler = (val, name) => {
    setForm(prev => ({
      ...prev,
      [name]: val
    }))
  }

  const onSubmitHandler = () => {
    mutation.mutate({
      password: form.newPassword,
      confirmPassword: form.confirmPassword,
      email,
      id
    })
  }

  return (
    <Dialog open={open} fullWidth maxWidth='xs' onClose={onClose}>
      <DialogTitle>
        <h1 className={classes.head1}>Change Password</h1>
      </DialogTitle>

      <DialogContent>
        <div className={classes.form}>
          <TextField
            label='New Password'
            variant='outlined'
            size='large'
            value={form.newPassword}
            className={classes.input}
            type='password'
            onChange={e => onChangeHandler(e.target.value, 'newPassword')}
          />

          <TextField
            label='Confirm Password'
            variant='outlined'
            size='large'
            value={form.confirmPassword}
            className={classes.input}
            type='password'
            onChange={e => onChangeHandler(e.target.value, 'confirmPassword')}
          />

          {form.newPassword !== form.confirmPassword &&
            !!form.confirmPassword.length &&
            !!form.newPassword.length && (
              <div className={classes.errorMessage}>Password do not match</div>
            )}

          <Button
            disabled={
              mutation.isLoading ||
              form.newPassword !== form.confirmPassword ||
              (!form.newPassword && !form.confirmPassword)
            }
            variant='contained'
            color='primary'
            size='large'
            onClick={() => onSubmitHandler()}
          >
            {mutation.isLoading ? 'Saving...' : 'Confirm'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

ChangePasswordDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  email: PropTypes.string,
  id: PropTypes.string
}

export default ChangePasswordDialog
