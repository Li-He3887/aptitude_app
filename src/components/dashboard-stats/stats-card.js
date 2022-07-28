import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from '@mui/material'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2.5),
    border: '1px solid #E9E9EB',
    display: 'flex',
    flexDirection: 'column'
  },
  topSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainStat: {
    fontSize: '1.6rem',
    fontWeight: 'bold'
  },
  title: {
    fontSize: '0.9rem',
    marginTop: theme.spacing(0.8)
  }
}))

const StatsCard = ({ mainStat, title, icon }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={0}>
      <div className={classes.topSection}>
        <div className={classes.mainStat}>{mainStat}</div>
        {icon}
      </div>
      <div className={classes.title}>{title}</div>
    </Paper>
  )
}

export default StatsCard

StatsCard.propTypes = {
  mainStat: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element
}
