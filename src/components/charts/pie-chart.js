import React from 'react'
import PropTypes from 'prop-types'
import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import { makeStyles } from '@material-ui/styles'
import CircularProgress from '@mui/material/CircularProgress'

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

const PieChart = ({ testData, timeData, totalTests, testLoading }) => {
  const classes = useStyles()

  // console.log(totalTests)

  return (
    <>
    { testLoading ? 
      <div className={classes.loader}>
        <CircularProgress size={20} color='primary' />
        <div className={classes.loadingText}>Loading data</div>
      </div>
    :
      <div className={classes.container}>
        <div className={classes.pie}>
          <Pie
            width={600}
            height={300}
            options={{
              maintainAspectRatio: false,
              plugins: {
                subtitle: {
                  display: true,
                  text: `Total tests taken - ${totalTests || 0}`
                },
                title: {
                  display: true,
                  text: `Average Score of Students - ${Math.floor(testData.average)}`
                }
              }
            }}
            data={{
              labels: ['Fail', 'Pass', 'Excellent'],
              datasets: [
                {
                  label: '# of Votes',
                  data: [testData.totalFail, testData.totalPass, testData.totalExcellent] || [],
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
                  text: `Average Time of Tests (mins) - ${Math.floor(timeData.average/60) || 0}` // Convert to minutes
                }
              }
            }}
            data={{
              labels: ['<= 15', '< 30', '>= 30'],
              datasets: [
                {
                  label: '# of Votes',
                  data: [timeData.fifteenOrLess, timeData.belowThirty, timeData.thirty ] || [],
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
    }
    </>
  )
}

export default PieChart

PieChart.propTypes = {
  totalTests: PropTypes.number,
  testData: PropTypes.objectOf({
    average: PropTypes.number,
    counts: PropTypes.array
  }),
  timeData: PropTypes.objectOf({
    average: PropTypes.number,
    counts: PropTypes.array
  })
}
