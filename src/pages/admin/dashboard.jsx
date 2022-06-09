import React, { useState } from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles'
import { Toolbar, TextField, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'

import AdminLayout from '../../layouts/admin-layout'
import PieChart from '../../components/charts/pie-chart'
import Table from '../../components/table/result'
import Select from '../../components/select'

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
  }
}))

function Dashboard() {
  const classes = useStyles()

  const [status, setStatus] = useState('All')

  return (
    <AdminLayout>
      <Toolbar />
      <h1>Overview</h1>
      <div className={classes.overviewContainer}>
        <PieChart />
      </div>
      <h3 className={classes.head1}>Applicants</h3>
      <div className={classes.filterContainer}>
        <div className={classes.filters}>
          <TextField
            label='Start Date'
            variant='outlined'
            className={classes.filter}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <CalendarTodayIcon />
                </InputAdornment>
              )
            }}
          />
          <TextField
            label='End Date'
            variant='outlined'
            className={classes.filter}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <CalendarTodayIcon />
                </InputAdornment>
              )
            }}
          />

          <Select
            variant='outlined'
            label='Status'
            value={status}
            setValue={setStatus}
          />

          <TextField
            label='Search'
            variant='outlined'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </div>
      </div>

      <Table />
    </AdminLayout>
  )
}

export default Dashboard
