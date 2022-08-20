import React, {useState} from 'react';
import {
  Box, 
  TextField, 
  Button, 
  Paper 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useMutation } from 'react-query'
import {forgotPassword} from '../../api/v2/admins'
import ResponsiveImage from '../../components/responsive-image'

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

function forgotPassword2() {
    const classes = useStyles()
    const [email, setEmail] = useState('')

    const {mutate} = useMutation(() => forgotPassword(email), {
      onError: () => {
        enqueueSnackbar('Failed to send the email', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    }) 

    const change = (e) => {
      setEmail(e.target.value)
    }

    const handleForgot = () => {
      const confirmed = confirm('Are you sure you want to send the email?')
  
      if (confirmed) {
        mutate(email)
      }
    }

    return(
        <div className={classes.container}>
            <Paper elevation={0} className={classes.paperContainer}>
                <ResponsiveImage
                  width='200px'
                  margin='10px'
                  alt='Forward School'
                  src={require('../../../public/forward-school-logo-blue.png')}
                />

                <Box className={classes.inputsContainer}>
                    <TextField
                      fullWidth
                      required
                      margin='normal'
                      variant='outlined'
                      label='Email'
                      id='outlined-required'
                      placeholder='Your@email.com'
                      value={email}
                      onChange={e => change(e)}
                    />

                    <div className={classes.buttonContainer}>
                        <Button
                          variant='contained'
                          size='large'
                          color='primary'
                          className={classes.btn}
                          onClick={handleForgot}
                        >
                          Submit
                        </Button>
                    </div>
                </Box>
            </Paper>
        </div>
    )
}

export default forgotPassword2