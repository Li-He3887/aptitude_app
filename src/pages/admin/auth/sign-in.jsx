import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Link, Box, TextField, Button, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ResponsiveImage from '../../../components/responsive-image'
import * as Sentry from '@sentry/browser'

import { logIn } from '../../../api/v2/admins'

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paperContainer: {
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputsContainer: {
    paddingTop: '4rem'
  },
  buttonContainer: {
    paddingTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: '100%',
    marginBottom: '0.6rem'
  }
})

const SignIn = () => {
  const classes = useStyles()
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = (value, name) =>
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }))

  const loginHandler = () => { 
      logIn({
        email: credentials.email,
        password : credentials.password
      })
      .then(response => {
        localStorage.setItem("admin", JSON.stringify(response.data.admin))
        localStorage.setItem("token", JSON.stringify(response.data.token))
        router.replace('../dashboard')
      })
      .catch(error => {
        Sentry.captureException(error)

        console.log(error)

        // const errorMessage = getErrorMessage(error)

        // enqueueSnackbar(errorMessage.message, {
        //   variant: errorMessage.type,
        //   anchorOrigin: {
        //     vertical: 'bottom',
        //     horizontal: 'left'
        //   }
        // })
      })
  }


  return (
    <div className={classes.container}>
      <Paper elevation={0} className={classes.paperContainer}>
        <ResponsiveImage
          width='200px'
          margin='10px'
          alt='Forward School'
          src={require('../../../../public/forward-school-logo-blue.png')}
        />

        <Box className={classes.inputsContainer}>
          <TextField
            fullWidth
            required
            margin='normal'
            variant='outlined'
            onChange={e => handleOnChange(e.target.value, 'email')}
            id='outlined-required'
            label='Email'
            value={credentials.email}
            placeholder='Your@email.com'
          />

          <TextField
            required
            fullWidth
            margin='normal'
            variant='outlined'
            id='outlined-password-input'
            label='Password'
            onChange={e => handleOnChange(e.target.value, 'password')}
            type='password'
            value={credentials.password}
            autoComplete='current-password'
          />

          <div className={classes.buttonContainer}>
            <Button
              variant='contained'
              size='large'
              color='primary'
              className={classes.btn}
              onClick={() => loginHandler()}
            >
              Login
            </Button>

            <Link href='/'>Forgot Password?</Link>
          </div>
        </Box>
      </Paper>
    </div>
  )
}

export default SignIn
