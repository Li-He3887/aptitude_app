import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Container,
  Grid,
  Box,
  Button,
  Typography,
  Stepper,
  MobileStepper,
  Step,
  StepLabel,
  Hidden,
  Radio,
  RadioGroup,
  FormControlLabel,
  CircularProgress
} from '@material-ui/core'
import Router from 'next/router'
import ErrorPage from 'next/error'
import { NextSeo } from 'next-seo'
import { useSnackbar } from 'notistack'
import { get } from 'lodash'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import * as Sentry from '@sentry/browser'

import theme from '../../../config/theme'
import { getErrorMessage } from '../../../utils/error'
import ResponsiveImage from '../../../components/responsive-image'
import FSAT_API from '../../../api'

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
`

const Main = styled(Centered)`
  min-height: calc(100vh - 220px);
  margin: 140px 0 80px;
  padding: 20px 10px;

  background ${theme.breakpoints.down('md')} {
    min-height: calc(100vh - 170px);
    margin: 105px 0 65px;
    padding: 15px 10px;
  }

  ${theme.breakpoints.down('sm')} {
    min-height: calc(100vh - 120px);
    margin: 75px 0 45px;
    padding: 20px 10px;
  }
`

const Question = styled.div`
  font-weight: 600;
  font-size: 1rem;
  text-align: left;

  background ${theme.breakpoints.down('md')} {
    font-size: 0.95rem;
  }

  ${theme.breakpoints.down('sm')} {
    font-size: 0.9rem;
  }
`

const Bar = styled(Centered)`
  position: fixed;
  height: 80px;
  padding: 15px;
  background-color: ${theme.palette.primary.main};

  ${theme.breakpoints.down('md')} {
    height: 65px;
    padding: 12px;
  }

  ${theme.breakpoints.down('sm')} {
    height: 45px;
    padding: 8px;
  }
`

const TopBar = styled(Bar)`
  top: 0;
  left: 0;
`

const QuestionStepperBar = styled(Bar)`
  top: 80px;
  left: 0;
  height: 60px;
  padding: 15px 0 0 0;
  background-color: ${theme.palette.grey[100]};

  ${theme.breakpoints.down('md')} {
    top: 65px;
    height: 50px;
    padding: 15px 0 0 0;
  }

  ${theme.breakpoints.down('sm')} {
    top: 45px;
    height: 30px;
    padding: 10px;
  }
`

const BottomBar = styled(Bar)`
  bottom: 0;
  left: 0;
`

const TimerCountdown = styled(Typography)`
  color: ${theme.palette.common.white};
  font-weight: bold;
`

const NextButton = styled(Button)`
  color: ${theme.palette.common.white};
  font-weight: bold;

  &:disabled {
    color: ${theme.palette.grey[400]};
  }
`

const Test = ({ data, error }) => {
  if (error) {
    return <ErrorPage statusCode={error.statusCode} />
  }

  const { enqueueSnackbar } = useSnackbar()
  const [testState, setTestState] = useState({
    ...data,
    answer: null,
    loading: false
  })

  useEffect(() => {
    if (!testState.ended && testState.timeTaken > 0) {
      setInterval(() => {
        setTestState(testState => ({
          ...testState,
          timeTaken: (Date.now() - Date.parse(testState.start)) / 1000
        }))
      }, 1000)
    }
  }, [null])

  const formatTime = timeInSeconds => {
    const format = val => `0${Math.floor(val)}`.slice(-2)
    const minutes = (timeInSeconds % 3600) / 60

    return [minutes, timeInSeconds % 60].map(format).join(':')
  }

  const renderContent = () => {
    // Test ended
    if (testState.ended || testState.timeTaken > testState.duration) {
      Router.push(`/tests/${testState.id}/report`)
    }

    if (testState.loading) {
      return <CircularProgress />
    }

    // Test not yet started
    if (!testState.ended && testState.timeTaken === 0) {
      return (
        <Grid container spacing={3} justify='center'>
          <Grid item xs={12} sm={8} md={6}>
            <Typography
              style={{ fontWeight: 'bold' }}
              variant='h4'
              component='p'
              gutterBottom
            >
              Instructions
            </Typography>
            <Box textAlign='left' fontSize='h6.fontSize'>
              <ol>
                <li>You must attempt all of the questions in this test.</li>
                <li>
                  You have 30 minutes to complete 20 questions, and once a
                  question is answered it cannot be changed.
                </li>
                <li>
                  This is a timed test, so make sure you have a 30-minute block
                  of uninterrupted time.
                </li>
                <li>
                  Coding knowledge is not required; the questions are simply
                  testing your natural aptitude as a developer.
                </li>
                <li>
                  After completing the test, look for an email with your test
                  report and next steps.
                </li>
              </ol>
            </Box>
            <Button
              variant='contained'
              color='primary'
              size='large'
              onClick={() => {
                const fsatApi = FSAT_API()

                setTestState(testState => ({
                  ...testState,
                  loading: true
                }))

                fsatApi
                  .startTest({ testId: testState.id })
                  .then(response => {
                    setTestState(testState => ({
                      ...testState,
                      ...response.data,
                      timeTaken:
                        (Date.now() - Date.parse(response.data.start)) / 1000,
                      loading: false
                    }))

                    setInterval(() => {
                      setTestState(testState => ({
                        ...testState,
                        timeTaken:
                          (Date.now() - Date.parse(response.data.start)) / 1000
                      }))
                    }, 1000)

                    return null
                  })
                  .catch(error => {
                    Sentry.captureException(error)

                    const errorMessage = getErrorMessage(error)

                    setTestState(testState => ({
                      ...testState,
                      loading: false
                    }))

                    enqueueSnackbar(errorMessage.message, {
                      variant: errorMessage.type,
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                      }
                    })
                  })
              }}
            >
              Start
            </Button>
          </Grid>
        </Grid>
      )
    }

    if (testState.question) {
      const { description, image, answerChoices } = testState.question

      return (
        <Grid container spacing={3} justify='center'>
          <Grid item xs={12} sm={8} md={6}>
            {image.data && (
              <ResponsiveImage
                src={`data:${image.contentType};base64,${image.data}`}
              />
            )}
            <Question dangerouslySetInnerHTML={{ __html: description }} />
            <RadioGroup
              aria-label='answer'
              name='answer'
              value={testState.answer || ''}
              onChange={e => {
                e.persist()
                setTestState(testState => ({
                  ...testState,
                  answer: e.target.value
                }))
              }}
            >
              <Grid
                container
                spacing={0}
                justify='flex-start'
                alignItems='flex-start'
              >
                {answerChoices.slice(0, 3).map((value, index) => (
                  <Grid item xs={6} key={index}>
                    <FormControlLabel
                      style={{ float: 'left' }}
                      value={value}
                      control={<Radio color='primary' />}
                      label={
                        <Typography style={{ fontWeight: '600' }}>
                          {value}
                        </Typography>
                      }
                    />
                  </Grid>
                ))}
                {answerChoices.slice(3, 5).map((value, index) => (
                  <Grid item xs={6} key={index}>
                    <FormControlLabel
                      style={{ float: 'left' }}
                      value={value}
                      control={<Radio color='primary' />}
                      label={
                        <Typography style={{ fontWeight: '600' }}>
                          {value}
                        </Typography>
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
          </Grid>
        </Grid>
      )
    }
  }

  const questionNumber = get(testState.question, 'number')
    ? get(testState.question, 'number')
    : null

  return (
    <>
      <NextSeo noindex />
      <TopBar>
        <ResponsiveImage
          width='auto'
          height='100%'
          alt='Forward School'
          src={require('../../../../public/forward-school-logo-white.png')}
        />
      </TopBar>
      <QuestionStepperBar>
        <Hidden mdUp>
          <MobileStepper
            steps={testState.totalQuestions}
            position='static'
            variant='dots'
            activeStep={questionNumber ? questionNumber - 1 : null}
            style={{ background: 'transparent' }}
          />
        </Hidden>
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Hidden smDown>
                <Stepper
                  alternativeLabel
                  activeStep={questionNumber ? questionNumber - 1 : null}
                  style={{ background: 'transparent' }}
                >
                  {[...Array(testState.totalQuestions).keys()].map(
                    (value, index) => {
                      return (
                        <Step key={value + 1}>
                          <StepLabel />
                        </Step>
                      )
                    }
                  )}
                </Stepper>
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </QuestionStepperBar>
      <Main>
        <Container>{renderContent()}</Container>
      </Main>
      <BottomBar>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='center'
            spacing={3}
          >
            <Grid item xs={4}>
              <Typography
                variant='button'
                style={{ fontWeight: 'bold', color: 'white' }}
              >
                {questionNumber !== null ? `QUESTION ${questionNumber}` : ''}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <TimerCountdown variant='h4'>
                {testState.timeTaken >= testState.duration
                  ? '00:00'
                  : formatTime(testState.duration - testState.timeTaken)}
              </TimerCountdown>
            </Grid>
            <Grid item xs={4}>
              <NextButton
                disabled={
                  !testState.answer ||
                  testState.loading ||
                  testState.timeTaken > testState.duration
                }
                size='large'
                endIcon={<KeyboardArrowRight />}
                onClick={() => {
                  const fsatApi = FSAT_API()

                  setTestState(testState => ({
                    ...testState,
                    loading: true
                  }))

                  fsatApi
                    .answerQuestion({
                      testId: testState.id,
                      questionNumber,
                      answer: testState.answer
                    })
                    .then(response => {
                      setTestState(testState => ({
                        ...testState,
                        ...response.data,
                        answer: null,
                        loading: false
                      }))

                      return null
                    })
                    .catch(error => {
                      Sentry.captureException(error)

                      const errorMessage = getErrorMessage(error)

                      setTestState(testState => ({
                        ...testState,
                        loading: false
                      }))

                      enqueueSnackbar(errorMessage.message, {
                        variant: errorMessage.type,
                        anchorOrigin: {
                          vertical: 'bottom',
                          horizontal: 'left'
                        }
                      })
                    })
                }}
              >
                {questionNumber === testState.totalQuestions
                  ? 'Finish'
                  : 'Next'}
              </NextButton>
            </Grid>
          </Grid>
        </Container>
      </BottomBar>
    </>
  )
}

Test.getInitialProps = async ({ req, res, query }) => {
  const fsatApi = FSAT_API()
  const { testId } = query

    try {
      const response = await fsatApi.getTest({
        testId
      })

      if (response.data.ended) {
        res.writeHead(302, {
          Location: `/tests/${testId}/report`
        })
        res.end()
      }

      return { data: response.data, error: null }
    } catch (error) {
      res.statusCode = 404

      return { data: null, error: error.response.data }
    }
}

Test.propTypes = {
  data: PropTypes.object,
  error: PropTypes.object
}

export default Test
