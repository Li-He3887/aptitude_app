import React, { useState, useEffect } from 'react'
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

import AdminLayout from '../../layouts/admin-layout'
import PieChart from '../../components/charts/pie-chart'
import Table from '../../components/table/result'

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

// const [data, setData] = useState({})

// useEffect(() => {
//   TESTS_API()
//     .getAllTests()
//     .then(response => {
//       setData(response.data)
//     })
//     .catch(error => {
//       Sentry.captureException(error)

//       const errorMessage = getErrorMessage(error)

//       enqueueSnackbar(errorMessage.message, {
//         variant: errorMessage.type,
//         anchorOrigin: {
//           vertical: 'bottom',
//           horizontal: 'left'
//         }
//       })   
//     })
// }, [])

function Dashboard() {
  const classes = useStyles()
  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    search: null,
    status: null
  })

  const handleFilterChange = (value, name) =>
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))

  return (
    <AdminLayout>
      <div className={classes.container}>
        <h1 className={classes.head1}>Overview</h1>
        <div className={classes.overviewContainer}>
          {/* FIXME: Styling issues for pie charts container */}
          <PieChart />
        </div>
        <h3 className={classes.head1}>Applicants</h3>
        <div className={classes.filterContainer}>
          <div className={classes.filters}>
            <TextField
              label='Start Date'
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
            <TextField
              label='End Date'
              variant='outlined'
              size='small'
              className={classes.filter}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <CalendarTodayIcon fontSize='small' />
                  </InputAdornment>
                )
              }}
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
                <MenuItem value='pass'>Pass</MenuItem>
                <MenuItem value='fail'>Fail</MenuItem>
                <MenuItem value='excellent'>Excellent</MenuItem>
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
        </div>

        <Table />
      </div>
    </AdminLayout>
  )
}

export default Dashboard
