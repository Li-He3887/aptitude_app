import React from 'react'
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
import CircularProgress from '@mui/material/CircularProgress'

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
  pages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '1.5rem'
  },
  loader: {
    display: 'flex',
    padding: '0.6rem',
    justifyContent: 'start',
    alignItems: 'center'
  },
  loadingText: {
    marginLeft: '0.4rem'
  }
}))

const OrganisationTable = ({ rows, page, setPage, count, isLoading }) => {
  const classes = useStyles()
  const router = useRouter()

  // console.log(rows)

  const handleOnRowClick = id => {
    // router.push(`/admin/applicant/${id}`)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <MuiTable className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Organisation Name</StyledTableCell>
              <StyledTableCell align='left'>Tag</StyledTableCell>
            </TableRow>
          </TableHead>
          {isLoading ? (
            <div className={classes.loader}>
              <CircularProgress size={20} color='primary' />
              <div className={classes.loadingText}>Loading data</div>
            </div>
          ) : (
            <TableBody>
              {rows?.map(row => {
                // console.log(row)

                return (
                  <StyledTableRow
                    key={row.user.name}
                    onClick={() => handleOnRowClick(row.organisation._id)}
                  >
                    <StyledTableCell component='th' scope='row'>
                      {row.organisation.name}
                    </StyledTableCell>
                    <StyledTableCell align='left'>
                      {row.organisation.tag}
                    </StyledTableCell>
                  </StyledTableRow>
                )
              })}
            </TableBody>
          )}
        </MuiTable>

        <TablePagination
          component='div'
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

OrganisationTable.propTypes = {
  rows: PropTypes.any,
  page: PropTypes.number,
  setPage: PropTypes.func,
  count: PropTypes.number,
  isLoading: PropTypes.boolean
}

export default OrganisationTable