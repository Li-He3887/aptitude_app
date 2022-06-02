import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { Typography, Container, Grid, Box } from '@material-ui/core'
import ErrorPage from 'next/error'
import { NextSeo } from 'next-seo'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveBar } from '@nivo/bar'

import theme from '../../../config/theme'
import ResponsiveImage from '../../../components/responsive-image'
import FSAT_API from '../../../api'
const humanizeDuration = require('humanize-duration')

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props =>
      props.dark ? theme.palette.primary.main : theme.palette.common.white};
  }
`

const Heading = styled(Typography)({
  fontWeight: 'bold',
  color: `${theme.palette.primary.main}`
})

const TestReport = ({ data, error }) => {
  if (error) {
    return <ErrorPage statusCode={error.statusCode} />
  }

  // eslint-disable-next-line no-unused-vars
  const [testState, setTestState] = useState({
    ...data,
    answer: null,
    loading: false
  })

  const getStatementSameScoreCompareAverageTime = () => {
    const score = testState.score
    const timeTaken = testState.timeTaken
    const averageTimeTakenSameScore = testState.averageTimeTaken.sameScore

    if (timeTaken === averageTimeTakenSameScore) {
      return (
        <Typography component='p'>
          With the same score of <b>{score}/20</b>, your time taken is the{' '}
          <b>same</b> as the average, which is{' '}
          <b>
            {humanizeDuration(averageTimeTakenSameScore * 1000, {
              maxDecimalPoints: 2
            })}
          </b>
          .
        </Typography>
      )
    } else if (timeTaken > averageTimeTakenSameScore) {
      return (
        <Typography component='p'>
          With the same score of <b>{score}/20</b>, you are{' '}
          <b>
            {humanizeDuration((timeTaken - averageTimeTakenSameScore) * 1000, {
              maxDecimalPoints: 2
            })}
          </b>{' '}
          slower the average time of{' '}
          <b>
            {humanizeDuration(averageTimeTakenSameScore * 1000, {
              maxDecimalPoints: 2
            })}
          </b>
          .
        </Typography>
      )
    } else {
      return (
        <Typography component='p'>
          With the same score of <b>{score}/20</b>, you are{' '}
          <b>
            {humanizeDuration((timeTaken - averageTimeTakenSameScore) * 1000, {
              maxDecimalPoints: 2
            })}
          </b>{' '}
          faster the average time of{' '}
          <b>
            {humanizeDuration(averageTimeTakenSameScore * 1000, {
              maxDecimalPoints: 2
            })}
          </b>
          .
        </Typography>
      )
    }
  }

  return (
    <>
      <GlobalStyle />
      <NextSeo title='Forward School Aptitude Test Report' noindex />
      <Container>
        <Grid container>
          <Grid item container xs={12}>
            <Grid item xs={6} sm={2}>
              <Box my='2rem'>
                <ResponsiveImage
                  width='130px'
                  alt='Forward School'
                  src={require('../../../../public/forward-school-logo-blue.png')}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Heading variant='h3' component='h1' gutterBottom>
              Forward School Aptitude Test Report
            </Heading>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box my={3} color='primary.main'>
                <Typography
                  style={{ fontWeight: 'bold' }}
                  variant='h5'
                  component='h2'
                  gutterBottom
                >
                  OVERVIEW
                </Typography>
              </Box>
              <Box mb={3}>
                <Typography variant='h6' component='p' gutterBottom>
                  Name: <b>{testState.name}</b>
                </Typography>
                <Typography variant='h6' component='p' gutterBottom>
                  Score: <b>{testState.score}/20</b>
                </Typography>
                <Typography variant='h6' component='p' gutterBottom>
                  Average Score:{' '}
                  <b>
                    {Math.round(testState.averageScore.overall * 100) / 100}/20
                  </b>
                </Typography>
                <Typography variant='h6' component='p' gutterBottom>
                  Time Taken:{' '}
                  <b>
                    {humanizeDuration(testState.timeTaken * 1000, {
                      maxDecimalPoints: 2
                    })}
                  </b>
                </Typography>
                <Typography variant='h6' component='p' gutterBottom>
                  Average Time Taken:{' '}
                  <b>
                    {humanizeDuration(
                      testState.averageTimeTaken.overall * 1000,
                      {
                        maxDecimalPoints: 2
                      }
                    )}
                  </b>
                </Typography>
                <Typography variant='h6' component='p' gutterBottom>
                  Completed: <b>{testState.completed ? 'Yes' : 'No'}</b>
                </Typography>
              </Box>
              <Box bgcolor='primary.main' color='white' p={2}>
                {getStatementSameScoreCompareAverageTime()}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box my={3} color='primary.main'>
                <Typography
                  style={{ fontWeight: 'bold' }}
                  variant='h5'
                  component='h2'
                  gutterBottom
                >
                  BREAKDOWN
                </Typography>
              </Box>
              <Box style={{ height: '350px', fontWeight: 'bold' }} p={1}>
                <ResponsivePie
                  data={[
                    {
                      id: 'Correct',
                      label: 'Correct',
                      value: testState.breakdown.correct
                    },
                    {
                      id: 'Incorrect',
                      label: 'Incorrect',
                      value: testState.breakdown.incorrect
                    },
                    {
                      id: 'Unanswered',
                      label: 'Unanswered',
                      value: testState.breakdown.unanswered
                    }
                  ]}
                  margin={{ top: 30, right: 0, bottom: 80, left: 0 }}
                  colors={['#0054a6', '#f15a22', '#40ba8d']}
                  enableRadialLabels={false}
                  radialLabelsTextXOffset={6}
                  radialLabelsLinkOffset={0}
                  radialLabelsLinkDiagonalLength={16}
                  radialLabelsLinkHorizontalLength={24}
                  radialLabelsLinkStrokeWidth={1}
                  radialLabelsSkipAngle={1}
                  slicesLabelsSkipAngle={10}
                  slicesLabelsTextColor='#ffffff'
                  isInteractive={false}
                  legends={[
                    {
                      anchor: 'bottom',
                      direction: 'row',
                      translateY: 56,
                      itemWidth: 90,
                      itemHeight: 18,
                      itemTextColor: '#333333',
                      symbolSize: 18,
                      symbolShape: 'circle'
                    }
                  ]}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box my={3} color='primary.main'>
                <Typography
                  style={{ fontWeight: 'bold' }}
                  variant='h5'
                  component='h2'
                  gutterBottom
                >
                  TIME TAKEN VS AVERAGE
                </Typography>
              </Box>
              <Typography>
                Your time taken compared to the average time taken.{' '}
                <b>The lower the time, the better</b>.
              </Typography>
              <Box style={{ height: '350px', fontWeight: 'bold' }} p={1}>
                <ResponsiveBar
                  data={[
                    {
                      id: 'You',
                      You: Math.round(testState.timeTaken * 100) / 100,
                      Average: 0
                    },
                    {
                      id: 'Average',
                      You: 0,
                      Average:
                        Math.round(testState.averageTimeTaken.overall * 100) /
                        100
                    }
                  ]}
                  keys={['You', 'Average']}
                  margin={{ top: 20, right: 30, bottom: 50, left: 70 }}
                  padding={0.5}
                  colors={['#0054a6', '#40ba8d']}
                  labelTextColor='#ffffff'
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Time (secs)',
                    legendPosition: 'middle',
                    legendOffset: -45
                  }}
                  isInteractive={false}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box my={3} color='primary.main'>
                <Typography
                  style={{ fontWeight: 'bold' }}
                  variant='h5'
                  component='h2'
                  gutterBottom
                >
                  SCORE VS AVERAGE
                </Typography>
              </Box>
              <Typography>
                Your score compared to the average score.{' '}
                <b>The higher the score, the better</b>.
              </Typography>
              <Box style={{ height: '350px', fontWeight: 'bold' }} p={1}>
                <ResponsiveBar
                  data={[
                    {
                      id: 'You',
                      You: testState.score,
                      Average: 0
                    },
                    {
                      id: 'Average',
                      You: 0,
                      Average:
                        Math.round(testState.averageScore.overall * 100) / 100
                    }
                  ]}
                  keys={['You', 'Average']}
                  margin={{ top: 20, right: 30, bottom: 50, left: 70 }}
                  padding={0.5}
                  colors={['#0054a6', '#40ba8d']}
                  labelTextColor='#ffffff'
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Score',
                    legendPosition: 'middle',
                    legendOffset: -45
                  }}
                  isInteractive={false}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

TestReport.getInitialProps = async ({ req, res, query }) => {
  const fsatApi = FSAT_API()
  const { testId } = query

  if (req) {
    try {
      const response = await fsatApi.getTestResults({
        testId
      })

      if (!response.data.ended) {
        res.writeHead(302, {
          Location: `/tests/${testId}`
        })
        res.end()
      }

      return { data: response.data, error: null }
    } catch (error) {
      return { data: null, error: error.response.data }
    }
  }

  return { data: null, error: null }
}

TestReport.propTypes = {
  data: PropTypes.object,
  error: PropTypes.object
}

export default TestReport
