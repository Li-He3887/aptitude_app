import { useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    Card,
    CardContent,
    IconButton,
    Button,
    TextField,
    Typography,
    Grid
  } from '@material-ui/core'

import BrushIcon from '@mui/icons-material/Brush'
import CloseIcon from '@mui/icons-material/Close'


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
                        <div>
                            <TextField 
                                fullWidth
                                required
                                margin='normal'
                                label="Name" 
                                defaultValue="Chris Evans" 
                            />

                            <TextField 
                                fullWidth
                                required
                                margin='normal'
                                label="Email" 
                                defaultValue="chris@email.com" 
                            />

                            <TextField 
                                fullWidth
                                required
                                margin='normal'
                                label="Phone Number" 
                                defaultValue="016-5635286" 
                            />

                            <TextField 
                                fullWidth
                                required
                                margin='normal'
                                label="Organisation" 
                                defaultValue="Forward School" 
                            />
                            
                            <TextField
                                fullWidth
                                margin='normal'
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </div>
                        <Button variant="contained" color="primary">
                            UPDATE
                        </Button>
                    </form>
                : 
                    <Card className={classes.root}>
                        <CardContent className={classes.card}>
                            <Grid container direction='row' justifyContent='center' alignItems='center'>
                                <Grid item xs={4} sm={4}>
                                    <Typography variant="h6" component="h2">
                                        Name: 
                                    </Typography>
                                    <Typography variant="h6" component="h2">
                                        Chris Evans
                                    </Typography>
                                </Grid>

                                <Grid item xs={4} sm={4}>
                                    <Typography variant="h6" component="h2">
                                        Role: 
                                    </Typography>
                                    <Typography variant="h6" component="h2">
                                        Admin
                                    </Typography>                      
                                </Grid>

                                <Grid item xs={4} sm={4}>
                                    <IconButton aria-label="edit" size="medium">
                                        {
                                            editing? <CloseIcon fontSize="inherit" /> : <BrushIcon fontSize="inherit" />
                                        }
                                    </IconButton>
                                </Grid>
                        
                                <Grid item xs={12} >                        
                                    <Typography variant="h6" component="h2">
                                        Email: 
                                    </Typography>
                                    <Typography variant="h6" component="h2">
                                        chris@avengers.com
                                    </Typography>                
                                </Grid>

                                <Grid item  sm={12}>                       
                                    <Typography variant="h6" component="h2">
                                        Phone Number: 
                                    </Typography>
                                    <Typography variant="h6" component="h2">
                                        016-432 7864
                                    </Typography>                
                                </Grid>

                                <Grid item xs={12} >                       
                                    <Typography variant="h6" component="h2">
                                        Organisation: 
                                    </Typography>
                                    <Typography variant="h6" component="h2">
                                        Forward School
                                    </Typography>             
                                </Grid>

                                <Grid item xs={12} >              
                                    <Typography variant="h6" component="h2">
                                        Password: 
                                    </Typography>
                                    <Typography variant="h6" component="h2">
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