import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  // TablePagination,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#1853A0',
    padding: '1.4rem',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:hover': {
      backgroundColor: 'lightgrey',
      cursor: 'pointer'
    }
  }
}))(TableRow)

// function createData(name, email, phone, organisation, role) {
//   return { name, email, phone, organisation, role }
// }

// const rows = [
//   createData(
//     'Chris Evans',
//     'chris@avengers.com',
//     '016-432 7864',
//     'Forward School',
//     'Admin'
//   ),
//   createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Super'),
//   createData(
//     'Some dude',
//     'some@dude.com',
//     '012-345 6789',
//     'Forward School',
//     'Super'
//   ),
//   createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Admin'),
//   createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Admin')
// ]

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 600
  },
  statusCell: {
    borderRadius: '6px',
    backgroundColor: 'green',
    color: '#fff',
    padding: '0.4rem 0.2rem'
  }
}))

// Pass dynamic props into it
const UsersTable = ({ rows }) => {
  const classes = useStyles()
  const router = useRouter()

  // Make this dynamic
  const handleOnRowClick = id => router.push(`/admin/users/${id}`)

  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell align='center'>Email</StyledTableCell>
              <StyledTableCell align='center'>Phone No.</StyledTableCell>
              <StyledTableCell align='center'>Organisation</StyledTableCell>
              <StyledTableCell align='center'>Role</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map(row => (
              <StyledTableRow
                key={row.name}
                onClick={() => handleOnRowClick(row.name)}
              >
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.email}</StyledTableCell>
                <StyledTableCell align='center'>{row.phone}</StyledTableCell>
                <StyledTableCell align='center'>
                  {row.organisation}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.role}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          {/* <TablePagination /> */}
        </MuiTable>
      </TableContainer>
    </>
  )
}

UsersTable.propTypes = {
  rows: PropTypes.any
}

export default UsersTable
