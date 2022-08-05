import React from 'react';
import {
     Box, 
    TextField, 
    Button, 
    Paper 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
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

function forgotPassword() {
    const classes = useStyles()

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
                        value=""
                        placeholder='Your@email.com'
                    />

                    <div className={classes.buttonContainer}>
                        <Button
                        variant='contained'
                        size='large'
                        color='primary'
                        className={classes.btn}
                        onClick={() => loginHandler()}
                        >
                            Submit
                        </Button>
                    </div>
                </Box>
            </Paper>
        </div>
    )
}

export default forgotPassword