import { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    Card,
    CardContent,
    CardActions,
    IconButton,
    Button,
    TextField,
    Typography,
    Grid
  } from '@material-ui/core'

import BrushIcon from '@mui/icons-material/Brush'
import CloseIcon from '@mui/icons-material/Close';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      background: '#e8f0f7',
      margin: '10px',
    },
    card:{
      marginLeft: '25px',
      marginRight: '25px',
    },
})

function EditSetting() {
    const classes = useStyles()

    const [editing, setEditing] = useState(false)

    return (
        <div>
            {
                editing ?
                    <form>
                        <Card className={classes.root}>
                            <CardContent className={classes.card}>
                                <Grid container spacing={3} direction='row' justifyContent='center' alignItems='center'>
                                    <Grid item xs={12} align="right">
                                        <IconButton aria-label="edit"  size="medium" className={classes.btn}>
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    </Grid>

                                    <Grid item xs={5} sm={4} justifyContent='center' alignItems='center'>
                                        <TextField 
                                            fullWidth
                                            required
                                            margin='normal'
                                            label="Name" 
                                            defaultValue="Chris Evans" 
                                        />
                                    </Grid>

                                    <Grid item xs={5} sm={4}>
                                        <Typography align="center" variant="h5" component="h2">
                                            Role: 
                                        </Typography>
                                        <Typography align="center" variant="h5" component="h2">
                                            Admin
                                        </Typography>                      
                                    </Grid>
                            
                                    <Grid item xs={12}>                        
                                        <TextField 
                                            fullWidth
                                            required
                                            margin='normal'
                                            label="Email" 
                                            defaultValue="chris@email.com" 
                                        />              
                                    </Grid>

                                    <Grid item  sm={12}>                       
                                        <TextField 
                                            fullWidth
                                            required
                                            margin='normal'
                                            label="Phone Number" 
                                            defaultValue="016-5635286" 
                                        />              
                                    </Grid>

                                    <Grid item xs={12} >                       
                                        <TextField 
                                            fullWidth
                                            required
                                            margin='normal'
                                            label="Organisation" 
                                            defaultValue="Forward School" 
                                        />            
                                    </Grid>

                                    <Grid item xs={12} >              
                                        <TextField
                                            fullWidth
                                            margin='normal'
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                </Grid>  
                            </CardContent>

                            <CardActions>
                                <Button variant="contained" color="primary">
                                    UPDATE
                                </Button>
                            </CardActions>
                        </Card>
                        
                    </form>
                : 
                    <Card className={classes.root}>
                        <CardContent className={classes.card}>
                            <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>
                                <Grid item xs={12} align="right">
                                    <IconButton aria-label="edit"  size="medium" className={classes.btn}>
                                        <BrushIcon fontSize="inherit" />
                                    </IconButton>
                                </Grid>

                                <Grid item xs={5} sm={5} justifyContent='center' alignItems='center'>
                                    <Typography align="center" variant="h5" component="h2">
                                        Name: 
                                    </Typography>
                                    <Typography align="center" variant="h5" component="h2">
                                        Chris Evans
                                    </Typography>
                                </Grid>

                                <Grid item xs={5} sm={5}>
                                    <Typography align="center" variant="h5" component="h2">
                                        Role: 
                                    </Typography>
                                    <Typography align="center" variant="h5" component="h2">
                                        Admin
                                    </Typography>                      
                                </Grid>

                                <Grid item xs={12}>                        
                                    <Typography align="center" variant="h5" component="h2">
                                        Email: 
                                    </Typography>
                                    <Typography align="center" variant="h5" component="h2">
                                        chris@avengers.com
                                    </Typography>                
                                </Grid>

                                <Grid item  sm={12}>                       
                                    <Typography align="center" variant="h5" component="h2">
                                        Phone Number: 
                                    </Typography>
                                    <Typography align="center" variant="h5" component="h2">
                                        016-432 7864
                                    </Typography>                
                                </Grid>

                                <Grid item xs={12} >                       
                                    <Typography align="center" variant="h5" component="h2">
                                        Organisation: 
                                    </Typography>
                                    <Typography align="center" variant="h5" component="h2">
                                        Forward School
                                    </Typography>             
                                </Grid>

                                <Grid item xs={12} >              
                                    <Typography align="center" variant="h5" component="h2">
                                        Password: 
                                    </Typography>
                                    <Typography align="center" variant="h5" component="h2">
                                        Forward School
                                    </Typography>  
                                </Grid>
                            </Grid>  
                        </CardContent>
                    </Card>
            }
        </div>   
    )
}

export default EditSetting