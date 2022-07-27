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
  pages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '1.5rem'
  }
}))

// Pass dynamic props into it
const UsersTable = ({ rows, count, page, setPage }) => {
  const classes = useStyles()
  const router = useRouter()

  console.log(rows)

  // Make this dynamic
  // const handleOnRowClick = id => router.push(`/admin/users/${id}`)

  const handleOnRowClick = id => {
    router.push(`/admin/users/${id}`)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
                onClick={() => handleOnRowClick(row._id)}
              >
                <StyledTableCell component='th' scope='row'>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.email}</StyledTableCell>
                <StyledTableCell align='center'>{row.phone}</StyledTableCell>
                <StyledTableCell align='center'>
                  {row.organisation.tag}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.role}</StyledTableCell>
              </StyledTableRow>
            ))}
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

UsersTable.propTypes = {
  rows: PropTypes.any
}

export default UsersTable
