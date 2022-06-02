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

  return (
    <div className={classes.container}>
      <Paper className={classes.paperContainer}>
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
            id='outlined-required'
            label='Email'
            value={credentials.email}
            onChange={e =>
              setCredentials(prev => ({
                ...prev,
                email: e.target.value
              }))
            }
            placeholder='Your@email.com'
          />

          <TextField
            required
            fullWidth
            margin='normal'
            variant='outlined'
            id='outlined-password-input'
            label='Password'
            type='password'
            value={credentials.password}
            onChange={e =>
              setCredentials(prev => ({
                ...prev,
                password: e.target.value
              }))
            }
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
