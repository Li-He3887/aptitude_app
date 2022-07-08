import React, { useState} from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
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

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 600
  },
  statusCell: {
    borderRadius: '6px',
    backgroundColor: 'green',
    color: '#fff',
    padding: '0.4rem 0.2rem'
  },
  failedCell: {
    backgroundColor: 'red',
    borderRadius: '6px',
    color: '#fff',
    padding: '0.4rem 0.2rem'
  },
  pages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '1.5rem'
  }
}))

const ApplicantsTable = ({ rows, page, setPage, count }) => {
  const classes = useStyles()
  const router = useRouter()

  // console.log(rows)

  const handleOnRowClick = id => {
    router.push(`/admin/applicant/${id}`)
  }

  const getFormattedTime = (seconds = 0) => {
    const minutes = parseInt(seconds / 60)
    const remainingSeconds = seconds - minutes * 60
    return `${minutes} m ${remainingSeconds >= 0 ? remainingSeconds : 0} s`
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
              // console.log(row)

              return (
                <StyledTableRow
                  key={row.user.name}
                  onClick={() => handleOnRowClick(row.user._id)}
                >
                  <StyledTableCell component='th' scope='row'>
                    {row.user.name}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {row.user.email}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {row.user.phone.number}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {row.user.programme}
                  </StyledTableCell>
                  <StyledTableCell align='center'>{`${row.score}/20`}</StyledTableCell>
                  <StyledTableCell align='center'>
                    {getFormattedTime(row.timeTaken)}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <div
                      className={
                        row.score < 10 ? classes.failedCell : classes.statusCell
                      }
                    >
                      {row.score < 10 ? 'FAIL' : 'PASS'}
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              )
            })}
          </TableBody>
          
        </MuiTable>

        <TablePagination
          component="div"
          className={classes.pages}
          count={count}
          page={page}
          rowsPerPageOptions={[10]}
          onPageChange={handleChangePage}
          rowsPerPage={10}
        />
      </TableContainer>
    </>
  )
}

ApplicantsTable.propTypes = {
  rows: PropTypes.any
}

export default ApplicantsTable
