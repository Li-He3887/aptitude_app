import React, { useState } from 'react'
import { useMutation } from 'react-query'
import PropTypes from 'prop-types'
import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
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

const NewUser = ({ open, onClose }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const mutation = useMutation(data => 
    createAdmin(data),
    {
      onSuccess: data2 => {

        const message =  "Email: "+data2.data.admin.email+", \nPassword: "+data2.data.password 

        enqueueSnackbar(message, {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          autoHideDuration: 10000
        })
      }
  })

  const [form, setForm] = useState({
    name: '',
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

  const [filters, setFilters] = useState({
    organisation: '',
  })

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
              <InputLabel id='organisation-select-label'>Organisation</InputLabel>
              <Select
                labelId='organisation-select-label'
                id='organisation-select-filled'
                className={classes.select}
                value={filters.organisation}
                onChange={e =>
                  setFilters(prev => ({
                    ...prev,
                    organisation: e.target.value
                  }))
                }
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {/* TODO: This list will be fetched from API */}
                <MenuItem value={10}>Forward School</MenuItem>
                <MenuItem value={20}>Dell</MenuItem>
                <MenuItem value={30}>Experion</MenuItem>
              </Select>
            </FormControl>
          <Button
            disabled={mutation.isLoading}
            variant='contained'
            color='primary'
            size='large'
            onClick={() => onSubmitHandler()}
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
