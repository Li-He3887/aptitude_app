import React, { useState } from 'react'
import Sidebar from '../../sidebar/Sidebar'
import { alpha, makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  MenuItem,
  InputBase
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: '250px'
  },
  table: {
    minWidth: 600,
    marginTop: '10px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
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
  }
}))

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#1853A0',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {}
}))(TableRow)

function createData(name, email, phone, organisation, role) {
  return { name, email, phone, organisation, role }
}

const rows = [
  createData(
    'Chris Evans',
    'chris@avengers.com',
    '016-432 7864',
    'Forward School',
    'Admin'
  ),
  createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Super'),
  createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Admin'),
  createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Super'),
  createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Admin')
]

function Admins() {
  const classes = useStyles()

  // organisation List
  const organisationList = [
    {
      value: 'All',
      label: 'All'
    },
    {
      value: 'FS',
      label: 'Forward School'
    },
    {
      value: 'Dell',
      label: 'DEll'
    }
  ]

  const [organisation, setOrganisation] = useState('All')

  const organisationOnChange = event => {
    setOrganisation(event.target.value)
  }

  // role List
  // const roleList = [
  //   {
  //     value: 'All',
  //     label: 'All'
  //   },
  //   {
  //     value: 'AD',
  //     label: 'Admin'
  //   },
  //   {
  //     value: 'SA',
  //     label: 'Super Admin'
  //   }
  // ]

  // const [, setRole] = useState('All')

  // const roleOnChange = event => {
  //   setRole(event.target.value)
  // }

  return (
    <div>
      <Sidebar />
      <div>
        <main className={classes.content}>
          <Toolbar />
          <div display='inline'>
            <h1>Admins</h1>
            <Button variant='contained' color='primary' size='small' href='#'>
              Create Admin
            </Button>
          </div>

          <div>
            <TextField
              id='outlined-select-currency'
              select
              size='small'
              margin='normal'
              variant='outlined'
              label='Organisation'
              value={organisation}
              onChange={organisationOnChange}
            >
              {organisationList.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {/* <TextField
                            id='outlined-select-currency'
                            select
                            size="normal"
                            marginLeft="10px"

                            variant='outlined'
                            label='Role'
                            value={role}
                            onChange={roleOnChange}
                          >
                            {roleList.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                      </TextField> */}

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

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align='center'>Email</StyledTableCell>
                  <StyledTableCell align='center'>Phone No.</StyledTableCell>
                  <StyledTableCell align='center'>Organisation</StyledTableCell>
                  <StyledTableCell align='center'>Role</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component='th' scope='row'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.phone}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.organisation}
                    </StyledTableCell>
                    <StyledTableCell align='center'>{row.role}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </main>
      </div>
    </div>
  )
}

export default Admins
