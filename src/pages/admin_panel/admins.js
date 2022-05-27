import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
} 
from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: '250px',
    },
    table: {
        minWidth: 600,
        marginLeft: '250px',
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
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, email, phone, organisation, role) {
    return { name, email, phone, organisation, role};
  }
  
  const rows = [
    createData('Chris Evans', 'chris@avengers.com', '016-432 7864', 'Forward School', 'Admin'),
    createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Super'),
    createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Admin'),
    createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Super'),
    createData('Some dude', 'some@dude.com', '012-345 6789', 'Dell', 'Admin'),
  ];


function Admins() {
    const classes = useStyles();
    return(
        <div>
            <Sidebar />
            <div>
                <main className={classes.content}>
                    <Toolbar />
                    <div display='inline'>
                        <h1>Admins</h1>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            href='#'>
                            Create Admin
                        </Button>
                    </div>
                    
                </main>
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
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                            <StyledTableCell component='th' scope='row'>
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align='center'>{row.email}</StyledTableCell>
                            <StyledTableCell align='center'>{row.phone}</StyledTableCell>
                            <StyledTableCell align='center'>{row.organisation}</StyledTableCell>
                            <StyledTableCell align='center'>{row.role}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )

}

export default Admins