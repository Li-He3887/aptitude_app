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

// function createData(name, email, phone, programmes, score, time, status) {
//   return { name, email, phone, programmes, score, time, status }
// }

// const rows = [
//   createData(
//     'John Smith',
//     'johnsmith@gmail.com',
//     '010-1111111',
//     'DS',
//     '18/20',
//     '15m 3s',
//     'Pass'
//   ),
//   createData(
//     'Some dude',
//     'some@dude.com',
//     '012-345 6789',
//     'FEW',
//     '14/20',
//     '5m 45s',
//     'Fail'
//   ),
//   createData(
//     'Some dude',
//     'some@dude.com',
//     '012-345 6789',
//     'ND',
//     '18/20',
//     '15m 3s',
//     'Pass'
//   ),
//   createData(
//     'Some dude',
//     'some@dude.com',
//     '012-345 6789',
//     'FEW',
//     '14/20',
//     '5m 45s',
//     'Fail'
//   ),
//   createData(
//     'Some dude',
//     'some@dude.com',
//     '012-345 6789',
//     'FEW',
//     '14/20',
//     '5m 45s',
//     'Fail'
//   ),
//   createData(
//     'Some dude',
//     'some@dude.com',
//     '012-345 6789',
//     'FEW',
//     '14/20',
//     '5m 45s',
//     'Fail'
//   )
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
const ApplicantsTable = ({ rows }) => {
  const classes = useStyles()
  const router = useRouter()

  // Make this dynamic
  const handleOnRowClick = id => router.push(`/admin/applicant/${id}`)

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <MuiTable className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell align='center'>Email</StyledTableCell>
              <StyledTableCell align='center'>Phone No.</StyledTableCell>
              <StyledTableCell align='center'>Programmes</StyledTableCell>
              <StyledTableCell align='center'>Score</StyledTableCell>
              <StyledTableCell align='center'>Time Taken</StyledTableCell>
              <StyledTableCell align='center'>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map(row => {
              return(
              <StyledTableRow
                key={row.user.name}
                onClick={() => handleOnRowClick(row.user.name)}
              >
                <StyledTableCell component='th' scope='row'>
                  {row.user.name}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.user.email}</StyledTableCell>
                <StyledTableCell align='center'>{row.user.phone.number}</StyledTableCell>
                <StyledTableCell align='center'>
                  {row.user.programme}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.score}</StyledTableCell>
                <StyledTableCell align='center'>{row.timeTaken}</StyledTableCell>
                <StyledTableCell align='center'>
                  <div className={classes.statusCell}>{row.score<15 ? "FAIL" : "PASS" }</div>
                </StyledTableCell>
              </StyledTableRow>
            )})}
          </TableBody>
          {/* <TablePagination /> */}
        </MuiTable>
      </TableContainer>
    </>
  )
}

ApplicantsTable.propTypes = {
  rows: PropTypes.any
}

export default ApplicantsTable
