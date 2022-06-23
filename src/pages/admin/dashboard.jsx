/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { alpha, makeStyles } from '@material-ui/core/styles'
import {
  TextField,
  InputAdornment,
  MenuItem,
  FormControl,
  Select,
  InputLabel
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import { useSnackbar } from 'notistack'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

// import getTest from '../../api/v2/tests'
// import * as Sentry from '@sentry/browser'

import AdminLayout from '../../layouts/admin-layout'
import PieChart from '../../components/charts/pie-chart'
import ApplicantsTable from '../../components/tables/result'
import { useQuery } from 'react-query'
import { getAllTests } from '../../api/v2/tests'
import Loader from '../../components/loader'

const useStyles = makeStyles(theme => ({
  head1: {
    fontSize: '1.4rem',
    color: '#1853A0'
  },
  filterContainer: {
    marginTop: '2rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  search: {
    position: 'relative',
    borderRadius: '6px',
    border: '1px solid #1853A0',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: '0.4rem',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  filters: {
    marginTop: '0.4rem',
    marginBottom: '1rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  filter: {
    marginRight: '0.8rem'
  },
  overviewContainer: {
    maxWidth: '100%',
    overflowX: 'hidden',
    width: '100%',
    marginBottom: '4rem'
  },
  container: {
    display: 'flex',
    // overflowX: 'hidden',
    flexDirection: 'column',
    maxWidth: '100%'
  },
  selectContainer: {
    minWidth: '20%',
    marginRight: '0.8rem'
  }
}))

function Dashboard() {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  // const { isLoading, error, data } = useQuery('tests', getAllTests(filters))
  const [, setAdmin] = useState({})
  const [me, setMe] = useState({})
  const router = useRouter()
  const [now, setNow] = useState(Date.now())

  const [filters, setFilters] = useState({
    startDate: Date.parse("10 Jan 2000"),
    endDate: now,
    search: "ALL",
    status: "ALL"
  })

  const { isLoading, error, data } = useQuery(['tests'], getAllTests(filters))

  const handleFilterChange = (value, name) =>
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.replace('./auth/sign-in')
    } else {
      setAdmin({
        admin: localStorage.getItem('admin'),
        token: localStorage.getItem('token')
      })
      setMe(JSON.parse(localStorage.getItem('admin')))
    }
  }, [])

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

  // console.log(data)

  return (
    <AdminLayout admin={me}>
      <div className={classes.container}>
        <h1 className={classes.head1}>Overview</h1>
        <div className={classes.overviewContainer}>
          {/* FIXME: Styling issues for pie charts container */}
          <PieChart />
        </div>
        <h3 className={classes.head1}>Applicants</h3>
        <div className={classes.filterContainer}>
          <div className={classes.filters}>
            <MobileDatePicker
              label='Start Date'
              inputFormat='MM/dd/yyyy'
              value={filters.startDate}
              onChange={val =>
                setFilters(prev => ({
                  ...prev,
                  startDate: Date.parse(val)
                }))
              }
              renderInput={params => (
                <TextField
                  {...params}
                  size='small'
                  variant='outlined'
                  className={classes.filter}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <CalendarTodayIcon fontSize='small' />
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
            <MobileDatePicker
              label='End Date'
              inputFormat='MM/dd/yyyy'
              value={filters.endDate}
              onChange={val =>
                setFilters(prev => ({
                  ...prev,
                  endDate: Date.parse(val)
                }))
              }
              renderInput={params => (
                <TextField
                  {...params}
                  size='small'
                  variant='outlined'
                  className={classes.filter}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <CalendarTodayIcon fontSize='small' />
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />

            <FormControl
              variant='outlined'
              className={classes.selectContainer}
              size='small'
            >
              <InputLabel id='status-select-label'>Status</InputLabel>
              <Select
                labelId='status-select-label'
                id='status-select'
                className={classes.select}
                value={filters.status}
                onChange={e => handleFilterChange(e.target.value, 'status')}
              >
                <MenuItem value='PASS'>Pass</MenuItem>
                <MenuItem value='FAIL'>Fail</MenuItem>
                <MenuItem value='EXCELLENT'>Excellent</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label='Search'
              variant='outlined'
              size='small'
              onChange={
                (e) => handleFilterChange(e.target.value, 'search') 
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
        </div>

        <ApplicantsTable rows={data || []} />
      </div>
    </AdminLayout>
  )
}

export default Dashboard
