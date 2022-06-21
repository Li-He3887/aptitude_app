import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    Typography,
    TextField,
    Button,
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
    p: 4,
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

function EditSetting() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const classes = useStyles()

    const onSubmitHandler = () => {
        
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="contained">Change Password</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Change Password
                    </Typography>

                    <div>
                        <TextField 
                            id="new_password" 
                            label="New Password" 
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type="password"
                            autoComplete="current-password" 
                        />

                        <TextField 
                            id="confirm_password" 
                            label="Confirm Password" 
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type="password"
                            autoComplete="current-password" 
                        />
                    </div>

                    <div className={classes.save_btn}>
                        <Button variant="contained" size="medium" onClick={() => onSubmitHandler()}>Save</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default EditSetting