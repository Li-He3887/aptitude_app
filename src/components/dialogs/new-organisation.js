import React, { useState } from 'react'
import { useMutation } from 'react-query'
import PropTypes from 'prop-types'
import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useSnackbar } from 'notistack'

import { createOrganisation } from '../../api/v2/organisation'

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
  },
  password: {
    fontSize: '1.2rem',
    color: '#1853A0'
  }
})

const NewOrganisation = ({ open, onClose, refetchOrganisation }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const [showUser, setShowUser] = useState(null)

  const mutation = useMutation(data => createOrganisation(data), {
    onSuccess: data => {
      setShowUser(data.data.user)

      enqueueSnackbar('Organisation created successfully', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
      onClose()
      refetchOrganisation()
    },
    onError: () => {
      enqueueSnackbar('Failed to add organisation', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
    }
  })

  const [form, setForm] = useState({
    organisation: '',
    tag: ''
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

  return (
    <Dialog open={open} fullWidth maxWidth='xs' onClose={onClose}>
      <DialogTitle>
        <h1 className={classes.head1}>
          {showUser ? 'Organisation Created' : 'Create Organisation'}
        </h1>
      </DialogTitle>

      <DialogContent>
          <div className={classes.form}>
            <TextField
              label='Organisation Name'
              variant='outlined'
              size='large'
              value={form.name}
              className={classes.input}
              onChange={e => onChangeHandler(e.target.value, 'name')}
            />

            <TextField
              label='Tag'
              variant='outlined'
              size='large'
              value={form.tag}
              className={classes.input}
              onChange={e => onChangeHandler(e.target.value, 'tag')}
            />

            <Button
              disabled={mutation.isLoading}
              variant='contained'
              color='primary'
              size='large'
              onClick={onSubmitHandler}
            >
              {mutation.isLoading ? 'Saving...' : 'Create'}
            </Button>
          </div>
      </DialogContent>
    </Dialog>
  )
}

NewOrganisation.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  refetchOrganisation: PropTypes.func
}

export default NewOrganisation
