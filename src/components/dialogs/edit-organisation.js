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

import { editOrganisation } from '../../api/v2/organisation'

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

const EditOrganisation = ({ open, onClose, organisationId, refetch }) => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const mutation = useMutation(data => editOrganisation(data), {
    onSuccess: () => {
      enqueueSnackbar('Organisation edited successfully', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
      onClose()
      refetch()
    }
  })

  const [form, setForm] = useState({
    name: '',
    tag: '',
    testCode: '',
    id: organisationId
  })
  // console.log(form)

  const onChangeHandler = (val, name) => {
    setForm(prev => ({
      ...prev,
      [name]: val
    }))
  }

  const onSubmitHandler = () => {
    // console.log(form)
    mutation.mutate(form)
  }

  if (mutation.error) {
    enqueueSnackbar('Failed to add Organisation', {
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
        <h1 className={classes.head1}>Create Organisation</h1>
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

          <TextField
            label='Test Code'
            variant='outlined'
            size='large'
            value={form.testCode}
            className={classes.input}
            onChange={e => onChangeHandler(e.target.value, 'testCode')}
          />

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

EditOrganisation.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  organisation: {
    id: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string
  }
}

export default EditOrganisation
