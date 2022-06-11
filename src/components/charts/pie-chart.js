import React from 'react'
import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import styled from 'styled-components'
import { useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;
  background-color: rgb(232, 240, 247);
  border-radius: 12px;
  width: '100%';
`

const PieContianer = styled.div`
  width: '50%';
`

const PieChart = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md')) // Change size of chart on smaller screens

  return (
    <ChartContainer matchedSize={matches}>
      <PieContianer>
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
      </PieContianer>
      <PieContianer>
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
      </PieContianer>
    </ChartContainer>
  )
}

export default PieChart
