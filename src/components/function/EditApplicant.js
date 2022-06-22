import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  TextField,
  Button,
  MenuItem,
  Box,
  Modal
} from '@mui/material'

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

function EditApplicant({ open, handleClose }) {
  const classes = useStyles()

  const programList = [
    {
      value: 'ND',
      label: 'NitroDegree'
    },
    {
      value: 'DS',
      label: 'Data Science'
    },
    {
      value: 'BEW',
      label: 'Web Development'
    },
    {
      value: 'MOB',
      label: 'Mobile Development'
    }
  ]

  const [program, setProgram] = useState('ND')

  const programOnChange = event => {
    setProgram(event.target.value)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Edit Users
          </Typography>

          <div>
            <TextField
              id='programme'
              label='Programme'
              variant='outlined'
              fullWidth
              margin='normal'
              select
              value={program}
              onChange={programOnChange}
            >
              {programList.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className={classes.save_btn}>
            <Button variant='contained' size='medium'>
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default EditApplicant

EditApplicant.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
}
