/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
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
import { useSnackbar } from 'notistack'

import { getAdmins } from '../../../api/v2/admins'

import AdminLayout from '../../../layouts/admin-layout'
import Table from '../../../components/tables/user'
import NewUser from '../../../components/dialogs/new-user'
import { USER_ROLES } from '../../../constants'
import Loader from '../../../components/loader'

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
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.replace('auth/sign-in')
    }
  }, [])

  const { isLoading, error, data } = useQuery('admins', getAdmins)

  const [modalOpen, setModalOpen] = useState(false)

  const [filters, setFilters] = useState({
    organisation: '',
    role: '',
    search: ''
  })

  if (isLoading) {
    return (
      <AdminLayout>
        <Loader loading={isLoading} />
      </AdminLayout>
    )
  }

  if (error) {
    enqueueSnackbar('Could not fetch data', {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
  }

  const data2 = data.data
  const me = JSON.parse(localStorage.getItem('admin'))

  // TODO: Make API call here, listen for query params - pagination, filters

  return (
    <AdminLayout admin={me}>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1 className={classes.head1}>Admins</h1>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() => setModalOpen(true)}
          >
            Create Admin
          </Button>
        </div>

        <NewUser open={modalOpen} onClose={() => setModalOpen(false)} />

        <div className={classes.tableContainer}>
          <div className={classes.filters}>
            <FormControl
              variant='outlined'
              className={classes.selectContainer}
              size='small'
            >
              <InputLabel id='organisation-select-label'>
                Organisation
              </InputLabel>
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

            <FormControl
              variant='outlined'
              className={classes.selectContainer}
              size='small'
            >
              <InputLabel id='role-select-label'>Role</InputLabel>
              <Select
                labelId='role-select-label'
                id='role-select-filled'
                className={classes.select}
                value={filters.role}
                onChange={e =>
                  setFilters(prev => ({
                    ...prev,
                    role: e.target.value
                  }))
                }
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
              value={filters.search}
              onChange={e =>
                setFilters(prev => ({
                  ...prev,
                  search: e.target.value
                }))
              }
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
          <Table rows={data2 || []} />
        </div>
      </div>
    </AdminLayout>
  )
}

export default Admins
