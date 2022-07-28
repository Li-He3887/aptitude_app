import React, { useState, useEffect } from 'react'
import {  useRouter } from 'next/router'
import { useQuery } from 'react-query'
import styled, { createGlobalStyle } from 'styled-components'
import {
  Typography,
  Container,
  Grid,
  Box,
  TextField,
  Button,
  MenuItem,
  CircularProgress
} from '@material-ui/core'
import validator from 'validator'
import isEmpty from 'lodash/isEmpty'
import PhoneNumber from 'awesome-phonenumber'
import Router from 'next/router'
import { useSnackbar } from 'notistack'
import * as Sentry from '@sentry/browser'

import {checkOrg} from '../api/v2/organisation'

import theme from '../config/theme'
import { getErrorMessage } from '../utils/error'
import ResponsiveImage from '../components/responsive-image'
import {createTest} from '../api/v2/index'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props =>
      props.dark ? theme.palette.primary.main : theme.palette.common.white};
  }
`

const FormSubmitButton = styled(Button)({
  marginTop: '1rem'
})

const Heading = styled(Typography)({
  fontWeight: 'bold',
  color: `${theme.palette.primary.main}`
})

const Index = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [formState, setFormState] = useState({
    isValid: false,
    isSubmitting: false,
    values: {},
    touched: {},
    errors: {}
  })
  const router = useRouter()
  const [org, setOrg] = useState("")
  const [programme, setProgramme] = useState("ND")
  const params = router.query

  const {isLoading: loading, data: data2, refetch: orgRefetch} = useQuery(
    ['organisation', params.organisation],
    () => 
      checkOrg(params.organisation)
  )
// console.log(params)
  useEffect(() => {
    const errors = {}
    const { name, email, phone, testCode} = formState.values

    orgRefetch()

    if(!loading|| true) {
      if(data2?.check) {
        setOrg(params.organisation)
      } else {
        setOrg('FS')
      }
    }

    if (!name) {
      errors.name = 'Name is required.'
    }

    if (!email) {
      errors.email = 'Email is required.'
    } else if (!validator.isEmail(email)) {
      errors.email = 'Email is invalid.'
    }

    if (!testCode) {
      errors.testCode = 'Test code is required.'
    }

    if (phone) {
      const parsedPhone = new PhoneNumber(
        phone.startsWith('+') ? phone : `+${phone}`
      )

      if (!parsedPhone.isValid()) {
        errors.phone =
          'Phone number is invalid. Make sure to use international phone number format.'
      }
    }

    setFormState(formState => ({
      ...formState,
      isValid: isEmpty(errors),
      errors: errors || {}
    }))
  }, [formState.values, params, org, loading])

console.log(formState)

  const handleInputChange = event => {
    event.persist()

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const { name, email, phone, testCode } = formState.values

    setFormState(formState => ({
      ...formState,
      isSubmitting: true
    }))

    createTest({
      name,
      email,
      programme,
      organisation: org,
      testCode,
      ...(phone && {
        phone: `+${phone}`
      })
    }).then(response => {
        if (response.data.ended) {
          Router.push(`/tests/${response.data.id}/report`)
        } else {
          Router.push(`/tests/${response.data.id}`)
        }

        return null
      })
      .catch(error => {
        Sentry.captureException(error)

        const errorMessage = getErrorMessage(error)

        enqueueSnackbar(errorMessage.message, {
          variant: errorMessage.type,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          }
        })

        setFormState(formState => ({
          ...formState,
          isSubmitting: false
        }))
      })
  }

  const programOnChange = event => {
    setProgramme(event.target.value)
  }

  const OrganisationOnChange = event => {
    setOrg(event.target.value)
  }

  const hasError = field => 
    !!(formState.touched[field] && formState.errors[field])

  const beautifyPro = (params) => {
    switch(params) {
      case("FEW"):
        return "Front End Web"
        break;
      case("BEW"):
        return "Back End Web"
        break;
      case("DS"):
        return "Data Science"
        break;
      case("ND"):
        return "NitroDegree"
        break;
      default:
        return "NitroDegree"
        break;
    }
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Grid container spacing={3}>
          <Grid item container xs={12}>
            <Grid item xs={6} sm={2}>
              <Box my='2rem'>
                <ResponsiveImage
                  width='130px'
                  alt='Forward School'
                  src={require('../../public/forward-school-logo-blue.png')}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Heading variant='h2' component='h1' gutterBottom>
              Forward School Aptitude Test
            </Heading>
            <Typography style={{ marginBottom: '20px' }}>
              This aptitude test is designed to assess your aptitude for
              computer programming. It involves four key skill areas:
            </Typography>
            <Typography gutterBottom>
              <b>Logical thinking and problem solving</b>
              <br />
              Numerical problem solving is analogous to the troubleshooting
              required in programming.
            </Typography>
            <Typography gutterBottom>
              <b>Pattern and syntax recognition</b>
              <br />
              Involve recognising similarities and differences in strings of
              characters and numbers, understanding graphical representations of
              procedures and symbols, finding which element does not match the
              corresponding elements and information checking and attention to
              detail.
            </Typography>
            <Typography gutterBottom>
              <b>Ability to follow complex procedures</b>
              <br />
              Involves following coded instructions and rules, sequencing events
              into a logical order, sorting and manipulating lists of items
              according to specific instructions, deciding how one set of
              instructions affects another and interpreting flow diagrams.
            </Typography>
            <Typography gutterBottom>
              <b>Being resourceful</b>
              <br />
              Able to use and leverage any tools or medium at your disposal to
              solve problems.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                label='Name'
                name='name'
                placeholder='Your Full Name'
                error={hasError('name')}
                helperText={hasError('name') ? formState.errors.name : null}
                value={formState.values.name || ''}
                onChange={handleInputChange}
                type='text'
                variant='outlined'
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                fullWidth
                required
                label='Email'
                name='email'
                placeholder='your@email.com'
                error={hasError('email')}
                helperText={hasError('email') ? formState.errors.email : null}
                value={formState.values.email || ''}
                onChange={handleInputChange}
                type='email'
                variant='outlined'
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                fullWidth
                label='Phone Number'
                name='phone'
                placeholder='60164848888'
                error={hasError('phone')}
                helperText={
                  hasError('phone')
                    ? formState.errors.phone
                    : 'International phone number format with country code.'
                }
                value={formState.values.phone || ''}
                onChange={handleInputChange}
                type='tel'
                variant='outlined'
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />

              {
                org == "FS" ?
                  <TextField
                  id='outlined-select-currency'
                  select
                  fullWidth
                  required
                  margin='normal'
                  variant='outlined'
                  label='Programmens'
                  value={programme}
                  onChange={programOnChange}
                  >
                    <MenuItem value={programme}>
                      {beautifyPro(programme)}
                    </MenuItem>
                  </TextField>
                :
                <></>
              }
              
              <TextField
                id='outlined-select-currency'
                select
                fullWidth
                required
                margin='normal'
                variant='outlined'
                label='Organisation'
                value={org}
                onChange={OrganisationOnChange}
              >
                <MenuItem value={loading? "" : data2.tag}>
                  { loading ? "" : data2.name}
                </MenuItem>
              </TextField>

              <TextField
                fullWidth
                required
                label='Test Code'
                name='testCode'
                placeholder='Test Code'
                error={hasError('testCode')}
                helperText={
                  hasError('testCode') ? formState.errors.testCode : null
                }
                value={formState.values.testCode || ''}
                onChange={handleInputChange}
                type='text'
                variant='outlined'
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
              <FormSubmitButton
                fullWidth
                color='primary'
                size='large'
                variant='contained'
                margin='normal'
                type='submit'
                disabled={!formState.isValid || formState.isSubmitting}
                endIcon={
                  formState.isSubmitting ? (
                    <CircularProgress color='inherit' size={20} />
                  ) : null
                }
              >
                Start Test
              </FormSubmitButton>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Index
