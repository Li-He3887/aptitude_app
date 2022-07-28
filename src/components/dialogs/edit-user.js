/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import PropTypes from 'prop-types'
import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useSnackbar } from 'notistack'
import { useQuery } from 'react-query'

import {getOrganisation} from '../../api/v2/organisation'
import { editAdmin } from '../../api/v2/admins'

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
  selectContainer: {
    width: '100%',
    marginRight: '0.8rem',
    marginBottom: '1rem'
  },
  select: {
    '& .MuiInputBase-input': {
      borderColor: '#1853A0'
    }
  }
})

const EditUser = ({ open, onClose, user }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const mutation = useMutation(data => editAdmin(data), {
    onSuccess: () => {
      enqueueSnackbar('Admin edited successfully', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
      onClose()
    }
  })

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    role: 'ADMIN',
    ...user,
    id: user._id
  })

  const onChangeHandler = (val, name) => {
    setForm(prev => ({
      ...prev,
      [name]: val
    }))
  }

  const onSubmitHandler = () => {
    console.log(form)
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

  const { isLoading, data } = useQuery(
    'organisation',
    () => getOrganisation(),
    {
      onError: () => {
        enqueueSnackbar('Could not fetch data', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    }
  )

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
            value={form.name}
            className={classes.input}
            onChange={e => onChangeHandler(e.target.value, 'name')}
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

          <FormControl
            variant='outlined'
            className={classes.selectContainer}
            size='large'
          >
            {/* <InputLabel id='organisation-select-label'>Organisation</InputLabel>
            <Select
              labelId='organisation-select-label'
              id='organisation-select-filled'
              className={classes.select}
              value={form.organisation}
              onChange={e =>
                setForm(prev => ({
                  ...prev,
                  organisation: e.target.value
                }))
              }
            >
              TODO: This list will be fetched from API
              <MenuItem value='FS'>Forward School</MenuItem>
              <MenuItem value='DELL'>Dell</MenuItem>
              <MenuItem value='EXPERION'>Experion</MenuItem>
            </Select> */}
            { isLoading ?
              <></>
                :
              <>
                <InputLabel id='organisation-select-label'>
                  Organisation
                </InputLabel>
                <Select
                  labelId='organisation-select-label'
                  id='organisation-select-filled'
                  className={classes.select}
                  label='Organisation'
                  value={form.organisation}
                  onChange={e =>
                    setForm(prev => ({
                      ...prev,
                      organisation: e.target.value
                    }))
                  }
                >
                  {data.map(org => {
                    return(
                      <MenuItem key={org.id} value={org.tag}>{org.name}</MenuItem>
                    )
                  })}
                </Select>
              </>
            }
          </FormControl>
          <Button
            disabled={mutation.isLoading}
            variant='contained'
            color='primary'
            size='large'
            onClick={onSubmitHandler}
          >
            {mutation.isLoading ? 'Saving...' : 'Edit'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

EditUser.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  user: {
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    organisation: PropTypes.string,
    role: PropTypes.string
  }
}

export default EditUser
