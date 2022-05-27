import * as React from 'react';
import ResponsiveImage from '../components/ResponsiveImage'
import {
    Link,
    Box,
    TextField,
    Button
  } from '@material-ui/core'

function Login() {
    return(
        <div>
            <ResponsiveImage
                  width='130px'
                  margin='10px'
                  alt='Forward School'
                  src={require('../../public/forward-school-logo-blue.png')}
                />

            <Box
                component='form'
                sx={{
                    m: 'auto',
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField
                    fullWidth
                    required
                    margin='normal'
                    variant='outlined'
                    id='outlined-required'
                    label='Email'
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
                    autoComplete='current-password'
                />

                <Button 
                    variant='contained' 
                    size='large'
                    sx={{
                        m: '40px'
                    }}
                >
                    Login
                </Button>

                <div>
                    <Link href='/'>
                        Forgot Password?
                    </Link>
                </div>
            </Box>
        </div>
            
    )
  }
  
  export default Login