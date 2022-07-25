import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, TextField, Button, Box, Modal } from '@mui/material'

import { editOrganisation } from '../../api/v2/organisation'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const useStyles = makeStyles({
  save_btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px'
  }
})

function EditOrganisation({ organisation }) {
  const [open, setOpen] = React.useState(false)
  const [password, setPassword] = React.useState({})
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const classes = useStyles()

  const onChangeHandler = e => {
    const id = e.target.id
    const value = e.target.value
    setPassword({
      ...password,
      [id]: value
    })
  }

  const onSubmitHandler = () => {
    editOrganisation(
      {
        newName: organisation.name,
        newTag: organisation.tag
      },
    )
      .then(response => {
        console.log(response)
        handleClose()
        return response
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <Button onClick={handleOpen} variant='contained'>
        Change Organisation Name
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Change Organisation Name
          </Typography>

          <div>
            <TextField
              id='new_name'
              label='New name'
              variant='outlined'
              fullWidth
              onChange={e => onChangeHandler(e)}
              margin='normal'
              autoComplete='current-name'
            />

            <TextField
              id='new_tag'
              label='New Tag'
              variant='outlined'
              fullWidth
              onChange={e => onChangeHandler(e)}
              margin='normal'
              autoComplete='current-tag'
            />
          </div>

          <div className={classes.save_btn}>
            <Button
              variant='contained'
              size='medium'
              onClick={() => onSubmitHandler()}
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default EditOrganisation

EditOrganisation.propTypes = {
  organisation: PropTypes.any
}