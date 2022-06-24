import React from 'react'
import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 1rem',
    position: 'relative',
    backgroundColor: 'rgb(232, 240, 247)',
    borderRadius: '12px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  pie: {
    width: '50%',

    [theme.breakpoints.down('md')]: {
      marginBottom: '2rem',
      width: '100%'
    }
  }
}))

const PieChart = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.pie}>
        <Pie
          width={600}
          height={300}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Average Score of Students'
              }
            }
          }}
          data={{
            labels: ['Fail', 'Pass', 'Excellent'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3], // Dummy Data
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
              }
            ]
          }}
        />
      </div>
      <div className={classes.pie}>
        <Pie
          width={600}
          height={300}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Average Time of Tests'
              }
            }
          }}
          data={{
            labels: ['Fail', 'Pass', 'Excellent'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3], // Dummy Data
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
              }
            ]
          }}
        />
      </div>
    </div>
  )
}

export default PieChart