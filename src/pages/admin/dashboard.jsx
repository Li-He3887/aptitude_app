import React, { useState } from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles'
import {
  Toolbar,
  InputBase,
  Button,
  TextField,
  MenuItem
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'

import AdminLayout from '../../layouts/admin-layout'
import PieChart from '../../components/charts/pie-chart'
import Table from '../../components/table'

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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  filters: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  }
}))

function Dashboard() {
  const classes = useStyles()

  // status List
  const statuses = [
    {
      value: 'All',
      label: 'All'
    },
    {
      value: 'Pass',
      label: 'Pass'
    },
    {
      value: 'Fail',
      label: 'Fail'
    }
  ]

  const [status, setStatus] = useState('All')

  const statusOnChange = event => {
    setStatus(event.target.value)
  }

  return (
    <AdminLayout>
      <Toolbar />
      <h1>Overview</h1>
      <div className={classes.overviewContainer}>
        <PieChart />
      </div>
      <div className={classes.filterContainer}>
        <h3 className={classes.head1}>Applicants</h3>

        <div className={classes.filters}>
          <Button
            variant='outlined'
            color='primary'
            size='small'
            className={classes.button}
            endIcon={<CalendarTodayIcon />}
          >
            Start Date
          </Button>

          <Button
            variant='outlined'
            color='primary'
            size='small'
            className={classes.button}
            endIcon={<CalendarTodayIcon />}
          >
            End Date
          </Button>

          <TextField
            id='outlined-select-currency'
            select
            size='small'
            required
            margin='normal'
            variant='outlined'
            label='Status'
            value={status}
            onChange={statusOnChange}
          >
            {statuses.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
      </div>

      <Table />
    </AdminLayout>
  )
}

export default Dashboard
