import React, { useState } from 'react'
import { Link, Box, TextField, Button, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ResponsiveImage from '../../../components/responsive-image'

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
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = (value, name) =>
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }))

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
