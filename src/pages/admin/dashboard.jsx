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
  InputLabel,
  IconButton
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useSnackbar } from 'notistack'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

import { getOrganisation } from '../../api/v2/organisation'

import AdminLayout from '../../layouts/admin-layout'
import ApplicantsTable from '../../components/tables/result'
import DashboardStats from '../../components/dashboard-stats'
import { useQuery } from 'react-query'
import { getAllTests } from '../../api/v2/tests'

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
  const [, setAdmin] = useState({})
  const [me, setMe] = useState({})
  const router = useRouter()
  const [now] = useState(Date.now())
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState()
  const [date1, setDate1] = useState({
    startDate: null,
    endDate: null
  })

  const [filters, setFilters] = useState({
    startDate: Date.parse('10 Jan 2000'),
    endDate: now,
    search: 'ALL',
    status: 'ALL',
    organisation: 'ALL'
  })

  const { isLoading, error, data } = useQuery(
    ['tests', filters, page],
    getAllTests({
      startDate: filters.startDate,
      endDate: filters.endDate,
      search: filters.search,
      organisation: filters.organisation,
      page: page
    }),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  )

  const { isLoading: orgLoading, data: orgData } = useQuery(
    'organisation',
    () => getOrganisation(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  )

  const handleFilterChange = (value, name) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onChangeHandler = value => {
    setSearch(value)
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    setFilters(prev => ({
      ...prev,
      search: search
    }))
  }

  const onResetHandler = () => {
    setFilters({
      startDate: Date.parse('10 Jan 2000'),
      endDate: now,
      search: 'ALL',
      status: 'ALL',
      organisation: 'ALL'
    })
    setDate1({ startDate: null, endDate: null })
    setSearch('')
  }

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

  if (error) {
    enqueueSnackbar('Could not fetch data', {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
  }

  return (
    <AdminLayout admin={me}>
      <div className={classes.container}>
        <h1 className={classes.head1}>Overview</h1>
        <DashboardStats />
        <h3 className={classes.head1}>Applicants</h3>
        <div className={classes.filterContainer}>
          <div className={classes.filters}>
            <MobileDatePicker
              label='Start Date'
              inputFormat='MM/dd/yyyy'
              value={date1.startDate}
              onChange={val => {
                setFilters(prev => ({
                  ...prev,
                  startDate: Date.parse(val)
                }))
                setDate1(prev => ({
                  ...prev,
                  startDate: Date.parse(val)
                }))
              }}
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
              value={date1.endDate}
              onChange={val => {
                setFilters(prev => ({
                  ...prev,
                  endDate: Date.parse(val)
                }))
                setDate1(prev => ({
                  ...prev,
                  endDate: Date.parse(val)
                }))
              }}
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
              {/* TODO: This list will be fetched from API */}
              {orgLoading ? (
                <></>
              ) : (
                <>
                  <InputLabel id='organisation-select-label'>
                    Organisation
                  </InputLabel>
                  <Select
                    labelId='organisation-select-label'
                    id='organisation-select-filled'
                    className={classes.select}
                    value={filters.organisation}
                    onChange={e =>
                      handleFilterChange(e.target.value, 'organisation')
                    }
                  >
                    {orgData.map(org => {
                      return (
                        <MenuItem key={org.id} value={org.tag}>
                          {org.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                </>
              )}
            </FormControl>

            <form onSubmit={onSubmitHandler}>
              <TextField
                label='Search'
                variant='outlined'
                size='small'
                value={search}
                onChange={e => {
                  onChangeHandler(e.target.value, 'search')
                  setSearch(e.target.value)
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon fontSize='small' />
                    </InputAdornment>
                  )
                }}
              />
            </form>

            <IconButton aria-label='reset' onClick={onResetHandler}>
              <RestartAltIcon />
            </IconButton>
          </div>
        </div>

        <ApplicantsTable
          rows={data?.test || []}
          page={page}
          setPage={setPage}
          count={data?.count || 0}
          isLoading={isLoading}
        />
      </div>
    </AdminLayout>
  )
}

export default Dashboard
