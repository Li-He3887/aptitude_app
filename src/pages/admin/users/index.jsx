import React, { useState } from 'react'
import {
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  InputAdornment
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search'

import AdminLayout from '../../../layouts/admin-layout'
import Table from '../../../components/table/user'
import { USER_ROLES } from '../../../constants'

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
  tableContainer: {
    marginTop: '1.4rem'
  },
  filters: {
    marginTop: '4rem',
    marginBottom: '1rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  selectContainer: {
    minWidth: '20%',
    marginRight: '0.8rem'
  },
  select: {
    '& .MuiInputBase-input': {
      borderColor: '#1853A0'
    }
  }
})

const Admins = () => {
  const classes = useStyles()

  const [organisation, setOrganisation] = useState('')
  const [role, setRole] = useState('')

  // TODO: Make API call here, listen for query params - pagination, filters

  return (
    <AdminLayout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1 className={classes.head1}>Admins</h1>
          <Button
            variant='contained'
            color='primary'
            size='large'
            href='/admin/users/new'
          >
            Create Admin
          </Button>
        </div>

        <div className={classes.tableContainer}>
          <div className={classes.filters}>
            <FormControl
              variant='outlined'
              className={classes.selectContainer}
              size='small'
            >
              <InputLabel id='role-select-label'>Organisation</InputLabel>
              <Select
                labelId='role-select-label'
                id='role-select-filled'
                className={classes.select}
                value={role}
                onChange={e => setRole(e.target.value)}
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

            <FormControl
              variant='outlined'
              className={classes.selectContainer}
              size='small'
            >
              <InputLabel id='organisation-select-label'>Role</InputLabel>
              <Select
                labelId='organisation-select-label'
                id='organisation-select-filled'
                className={classes.select}
                value={organisation}
                onChange={e => setOrganisation(e.target.value)}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {Object.values(USER_ROLES).map(role => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label='Search'
              variant='outlined'
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon fontSize='small' />
                  </InputAdornment>
                )
              }}
            />
          </div>
          {/* TODO: Pass in custom table data */}
          <Table />
        </div>
      </div>
    </AdminLayout>
  )
}

export default Admins
