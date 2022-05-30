import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import { alpha, makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  InputBase,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} 
from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PieChart from '../../components/charts/PieChart'


const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: '250px',
    },
    table: {
      minWidth: 600,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
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
          width: '20ch',
        },
      },
    },
    button: {
      margin: theme.spacing(1),
    },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1853A0',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    
  },
}))(TableRow);

function createData(name, email, phone, programmes, score, time, status) {
  return { name, email, phone, programmes, score, time, status};
}

const rows = [
  createData('Chris Evans', 'chris@avengers.com', '016-432 7864', 'DS', '18/20', '15m 3s', 'Pass'),
  createData('Some dude', 'some@dude.com', '012-345 6789', 'FEW', '14/20', '5m 45s', 'Fail'),
  createData('Some dude', 'some@dude.com', '012-345 6789', 'ND', '18/20', '15m 3s', 'Pass'),
  createData('Some dude', 'some@dude.com', '012-345 6789', 'FEW', '14/20', '5m 45s', 'Fail'),
  createData('Some dude', 'some@dude.com', '012-345 6789', 'FEW', '14/20', '5m 45s', 'Fail'),
];

function Dashboard() {
  const classes = useStyles();
    return(
      <div>
        <Sidebar />
        <div>
          <main className={classes.content}>
            <Toolbar />
            <h1>Overview</h1>
            <div className={classes.overviewContainer}>
              <PieChart />
            </div>
            <div>
              <h3>Applicants</h3>

              <Button
                variant="outlined"
                color="primary"
                size="small"
                className={classes.button}
                endIcon={<CalendarTodayIcon />}
              >
                Start Date
              </Button>

              <Button
                variant="outlined"
                color="primary"
                size="small"
                className={classes.button}
                endIcon={<CalendarTodayIcon />}
              >
                End Date
              </Button>

                <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder='Search…'
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                </div>
            </div>

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label='customized table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Full Name</StyledTableCell>
                    <StyledTableCell align='center'>Email</StyledTableCell>
                    <StyledTableCell align='center'>Phone No.</StyledTableCell>
                    <StyledTableCell align='center'>Programmens</StyledTableCell>
                    <StyledTableCell align='center'>Score</StyledTableCell>
                    <StyledTableCell align='center'>Time Taken</StyledTableCell>
                    <StyledTableCell align='center'>Status</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component='th' scope='row'>
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align='center'>{row.email}</StyledTableCell>
                      <StyledTableCell align='center'>{row.phone}</StyledTableCell>
                      <StyledTableCell align='center'>{row.programmes}</StyledTableCell>
                      <StyledTableCell align='center'>{row.score}</StyledTableCell>
                      <StyledTableCell align='center'>{row.time}</StyledTableCell>
                      <StyledTableCell align='center'>{row.status}</StyledTableCell>
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

export default Dashboard