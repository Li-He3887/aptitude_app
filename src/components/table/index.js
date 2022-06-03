import React from 'react'
import { useRouter } from 'next/router'
// import PropTypes from 'prop-types'
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'

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
  root: {
    '&:hover': {
      backgroundColor: 'lightgrey',
      cursor: 'pointer'
    }
  }
}))(TableRow)

function createData(name, email, phone, programmes, score, time, status) {
  return { name, email, phone, programmes, score, time, status }
}

const rows = [
  createData(
    'Chris Evans',
    'chris@avengers.com',
    '016-432 7864',
    'DS',
    '18/20',
    '15m 3s',
    'Pass'
  ),
  createData(
    'Some dude',
    'some@dude.com',
    '012-345 6789',
    'FEW',
    '14/20',
    '5m 45s',
    'Fail'
  ),
  createData(
    'Some dude',
    'some@dude.com',
    '012-345 6789',
    'ND',
    '18/20',
    '15m 3s',
    'Pass'
  ),
  createData(
    'Some dude',
    'some@dude.com',
    '012-345 6789',
    'FEW',
    '14/20',
    '5m 45s',
    'Fail'
  ),
  createData(
    'Some dude',
    'some@dude.com',
    '012-345 6789',
    'FEW',
    '14/20',
    '5m 45s',
    'Fail'
  )
]

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
const Table = () => {
  const classes = useStyles()
  const router = useRouter()

  // Make this dynamic
  const handleOnRowClick = id => router.push(`/admin/applicant/${id}`)

  return (
    <>
      <TableContainer component={Paper}>
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
            {rows.map(row => (
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
                  {row.programmes}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.score}</StyledTableCell>
                <StyledTableCell align='center'>{row.time}</StyledTableCell>
                <StyledTableCell align='center'>
                  <div className={classes.statusCell}>{row.status}</div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </>
  )
}

// Table.propTypes = {
//   headers: PropTypes.arrayOf({
//     name: PropTypes.string,
//     align: PropTypes.string
//   }),
//   rows: PropTypes.any
// }

export default Table
