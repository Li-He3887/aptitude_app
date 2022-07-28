import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
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

const OrganisationTable = ({ rows, isLoading }) => {
  const classes = useStyles()
  const router = useRouter()

  // console.log(rows)

  const handleOnRowClick = id => {
    router.push(`/admin/organisation/id/${id}`)
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <MuiTable className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Organisation Name</StyledTableCell>
              <StyledTableCell align='center'>Tag</StyledTableCell>
              <StyledTableCell align='center'>Test Code</StyledTableCell>
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
                    key={row.name}
                    onClick={() => handleOnRowClick(row._id)}
                  >
                    <StyledTableCell component='th' scope='row' align='center'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.tag}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.testCode}
                    </StyledTableCell>
                  </StyledTableRow>
                )
              })}
            </TableBody>
          )}
        </MuiTable>
      </TableContainer>
    </>
  )
}

OrganisationTable.propTypes = {
  rows: PropTypes.any,
  isLoading: PropTypes.boolean
}

export default OrganisationTable