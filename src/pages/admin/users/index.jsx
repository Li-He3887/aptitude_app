/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import PropTypes from 'prop-types';
import {
  Button,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Tabs,
  Tab,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useSnackbar } from 'notistack'

import { getAdmins } from '../../../api/v2/admins'
import {getOrganisation} from '../../../api/v2/organisation'

import AdminLayout from '../../../layouts/admin-layout'
import AdminTable from '../../../components/tables/user'
import OrganisationTable from '../../../components/tables/organisation';
import NewUser from '../../../components/dialogs/new-user'
import NewOrganisation from '../../../components/dialogs/new-organisation'
import { USER_ROLES } from '../../../constants'
import Loader from '../../../components/loader'

const StyledTabs = withStyles(theme => ({
  indicator: {
    background: '#1853A0',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14,
  }
}))(Tabs)

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
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Admins = () => {
  const classes = useStyles()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.replace('auth/sign-in')
    }
  }, [])

  const [adminFilters, setAdminFilters] = useState({
    organisation: 'ALL',
    role: 'ALL',
    search: 'ALL'
  })

  const { isLoading, data, refetch } = useQuery(
    ['admins', adminFilters, page],
    () =>
      getAdmins({
        organisation: adminFilters.organisation,
        role: adminFilters.role,
        search: adminFilters.search,
        page: page
      }),
    {
      onError: () => {
        enqueueSnackbar('Could not fetch data', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    }
  )

  const { isLoading: isLoading2, data: data2, refetch: refetch2 } = useQuery(
    ['organisation'],
    () =>
      getOrganisation(),
    {
      onError: () => {
        enqueueSnackbar('Could not fetch data', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    }
  )
  

  const [modalOpen, setModalOpen] = useState(false)

  const onChangeHandler = value => {
    setSearch(value)
  }

  const handleFilterChange = (value, name) => {
    setAdminFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmitAdmin = (e) => {
    e.preventDefault()
    setAdminFilters(prev => ({
      ...prev,
      search: search
    }))
  }

  const onResetAdmin = () => {
    setAdminFilters({
      organisation: 'ALL',
      role: 'ALL',
      search: 'ALL'
    })
    setSearch("")
  }

  if (isLoading ) {
    return (
      <AdminLayout>
        <Loader loading={isLoading} />
      </AdminLayout>
    )
  }

  const me = JSON.parse(localStorage.getItem('admin'))

  // TODO: Make API call here, listen for query params - pagination, filters

  return (
    <AdminLayout admin={me}>
      <div className={classes.container}>
        <div className={classes.headerContainer}>

          <StyledTabs
            value={value}
            onChange={handleChange}
            textColor='primary'
          >
            <Tab {...a11yProps(0)} label="Admin" />
            <Tab {...a11yProps(1)} label="Organisation" />
          </StyledTabs>
        </div>

        {/* Admin */}
        <TabPanel value={value} index={0}>
          <Button
            className={classes.btn}
            variant='contained'
            color='primary'
            size='large'
            onClick={() => setModalOpen(true)}
          >
            Create Admin
          </Button>

          <NewUser
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            refetchAdmins={refetch}
          />

          <div className={classes.tableContainer}>
            <div className={classes.filters}>
              <FormControl
                variant='outlined'
                className={classes.selectContainer}
                size='small'
              >
                { isLoading2 ?
                  <></>
                  :
                  <>
                    <InputLabel id='organisation-select-label'>
                      Organisation
                    </InputLabel>
                    <Select
                      labelId='organisation-select-label'
                      id='organisation-select-filled'
                      className={classes.select}
                      value={adminFilters.organisation}
                      onChange={e => handleFilterChange(e.target.value, 'organisation')}
                    >
                      {data2.map(org => {
                        return(
                          <MenuItem key={org.id} value={org.tag}>{org.name}</MenuItem>
                        )
                      })}
                    </Select>
                  </>
                }
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
                  value={adminFilters.role}
                  onChange={e =>
                    setAdminFilters(prev => ({
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

              <form onSubmit={onSubmitAdmin}>
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

              <IconButton 
                aria-label="reset"
                onClick={onResetAdmin}
                >
                <RestartAltIcon />
              </IconButton>

            </div>
            {/* TODO: Pass in custom table data */}
            <AdminTable
              rows={data.admins || []}
              page={page}
              setPage={setPage}
              count={data.count}
            />
            
          </div>
        </TabPanel>

        {/* Organisation */}
        <TabPanel value={value} index={1}>
          <Button
            className={classes.btn}
            variant='contained'
            color='primary'
            size='large'
            onClick={() => setModalOpen(true)}
          >
            Create Organisation
          </Button>

          <NewOrganisation
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            refetchOrganisation={refetch2}
          />

          <div className={classes.tableContainer}>
            <OrganisationTable
              rows={ data2 || []}
            />
          </div>
        </TabPanel>
      </div>
    </AdminLayout>
  )
}

export default Admins
