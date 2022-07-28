import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import AssignmentIcon from '@mui/icons-material/Assignment'
import CheckIcon from '@mui/icons-material/Check'
import DoneAllIcon from '@mui/icons-material/DoneAll'

import StatsCard from './stats-card'

const useStyles = makeStyles({
  iconContainer: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'lightgreen',
    borderRadius: '50%'
  },
  greenIcon: {
    color: 'green'
  }
})

const DashboardStats = ({ totalTests }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <StatsCard
          mainStat='12/20'
          title='Avg. score out of 659 tests'
          icon={
            <div className={classes.iconContainer}>
              <AssignmentIcon className={classes.greenIcon} />
            </div>
          }
        />
      </Grid>
      <Grid item xs={4}>
        <StatsCard
          mainStat='81.9%'
          title='540 / 659 passed'
          icon={
            <div className={classes.iconContainer}>
              <CheckIcon className={classes.greenIcon} />
            </div>
          }
        />
      </Grid>
      <Grid item xs={4}>
        <StatsCard
          mainStat='15.32%'
          title='101 / 659 full score'
          icon={
            <div className={classes.iconContainer}>
              <DoneAllIcon className={classes.greenIcon} />
            </div>
          }
        />
      </Grid>
    </Grid>
  )
}

export default DashboardStats

DashboardStats.propTypes = {
  totalTests: PropTypes.number
}
