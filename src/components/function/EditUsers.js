import React,{ useState } from 'react'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  TextField,
  Button,
  MenuItem,
  Box,
  Modal,
  FormControl,
  Select,
  InputLabel
} from '@mui/material'

import AdminLayout from '../../layouts/admin-layout'
import { getAdminsId } from '../../api/v2/admins'
import { useMutation } from 'react-query'
import Loader from '../../components/loader'

import { editAdmin } from '../../api/v2/admins'

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
  },
  selectContainer: {
    width: '100%',
     marginRight: '0.8rem',
     marginBottom: '1rem',
     
   },
   select: {
     '& .MuiInputBase-input': {
       borderColor: '#1853A0'
     }
   }
})

function EditUser({ open, handleClose, data }) {
  const classes = useStyles()
  const [form, setForm] = useState({
    name: data.name,
    email: data.email,
    role: data. role,
    organisation: data.organisation,
    phone: data.phone,
    id: data._id
  })

  const [filters, setFilters] = useState({
    organisation: data.organisation,
    role: data.role,
  })

  const mutation = useMutation(form => editAdmin(form))

  const onChangeHandler = e => {
    const id = e.target.id
    const value = e.target.value
    setForm({
      ...form,
      [id]: value
    })
  }

  const onSubmitHandler = () => {
    mutation.mutate(form)
  }
  
  if (mutation.error) {
    enqueueSnackbar('Failed to edit admin', {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
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
            Edit Admins
          </Typography>
        
          <div>
            <TextField
              id='name'
              label='Name'
              variant='outlined'
              fullWidth
              margin='normal'
              onChange={(e) => onChangeHandler(e)}
              defaultValue={data.name}
            />

            <TextField
              id='email'
              label='Email'
              variant='outlined'
              fullWidth
              margin='normal'
              onChange={(e) => onChangeHandler(e)}
              defaultValue={data.email}
            />

            <TextField
              id='phone'
              label='Phone Number'
              variant='outlined'
              fullWidth
              margin='normal'
              onChange={(e) => onChangeHandler(e)}
              defaultValue={data.phone}
            />

            <FormControl
              variant='outlined'
              className={classes.selectContainer}
              size='large'
              margin='normal'
            >
              <InputLabel id='organisation-select-label'>Organisation</InputLabel>
              <Select
                labelId='organisation-select-label'
                id='organisation-select-filled'
                className={classes.select}
                value={filters.organisation}
                defaultValue={data.organisation}
                onChange={e =>
                  setForm(prev => ({
                    ...prev,
                    organisation: e.target.value
                  }))
                }
              >
                {/* TODO: This list will be fetched from API */}
                <MenuItem value={"FORWARDSCHOOL"}>Forward School</MenuItem>
                <MenuItem value={"DELL"}>Dell</MenuItem>
                <MenuItem value={"EXPERIOR"}>Experior</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              variant='outlined'
              className={classes.selectContainer}
              size='large'
              margin='normal'
            >
              <InputLabel id='role-select-label'>Role</InputLabel>
              <Select
                labelId='role-select-label'
                id='role-select-filled'
                className={classes.select}
                value={filters.role}
                defaultValue={data.role}
                onChange={e =>
                  setForm(prev => ({
                    ...prev,
                    role: e.target.value
                  }))
                }
              >
                {/* TODO: This list will be fetched from API */}
                <MenuItem value={"SUPER_ADMIN"}>Super Admin</MenuItem>
                <MenuItem value={"ADMIN"}>Admin</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={classes.save_btn}>
            <Button 
            onClick={() => onSubmitHandler()}
            variant='contained' 
            size='medium'>
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default EditUser

EditUser.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
}