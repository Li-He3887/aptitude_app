import * as React from 'react';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import {
    Link,
    Box,
    TextField,
    Button
  } from '@material-ui/core'

function Login() {
    return(
            <Box
                component="form"
                sx={{
                    m: "auto",
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField
                    fullWidth
                    required
                    margin="dense"
                    id="outlined-required"
                    label="Email"
                    placeholder="Your@email.com"
                />

                <TextField
                    required
                    fullWidth
                    margin="normal"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />

                <Button 
                    variant="contained" 
                    size="large"
                    sx={{
                        m: "auto"
                    }}
                >
                    Login
                </Button>

                <div>
                    <Link href="/">
                        Forgot Password?
                    </Link>
                </div>
            </Box>
    )
  }
  
  export default Login;