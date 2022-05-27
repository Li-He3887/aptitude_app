import React from 'react';
import Sidebar from '../../sidebar/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar
} 
from '@material-ui/core';
import PieChart from '../../components/charts/PieChart'


const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: '250px',
    },
}));

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
          </main>
        </div>
      </div>
        
    )
    
}

export default Dashboard