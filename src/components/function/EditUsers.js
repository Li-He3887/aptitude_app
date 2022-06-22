import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  TextField,
  Button,
  IconButton,
  Box,
  Modal
} from '@mui/material'
import BrushIcon from '@mui/icons-material/Brush'

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

function EditUser() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const classes = useStyles()

  return (
    <div>
      <IconButton aria-label='delete' onClick={handleOpen} size='medium'>
        <BrushIcon />
      </IconButton>
      {/* <Button onClick={handleOpen} variant="contained">Change Passsword</Button> */}
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
              id='name'
              label='Name'
              variant='outlined'
              fullWidth
              margin='normal'
              defaultValue='Chris Evans'
            />

            <TextField
              id='email'
              label='Email'
              variant='outlined'
              fullWidth
              margin='normal'
              defaultValue='chris@avengers.com'
            />

            <TextField
              id='phone'
              label='Phone Number'
              variant='outlined'
              fullWidth
              margin='normal'
              defaultValue='010-1111111'
            />

            <TextField
              id='organisation'
              label='Organisation'
              variant='outlined'
              fullWidth
              margin='normal'
              defaultValue='Forward School'
            />

            <TextField
              id='role'
              label='Role'
              variant='outlined'
              fullWidth
              margin='normal'
              defaultValue='Admin'
            />
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

export default EditUser
