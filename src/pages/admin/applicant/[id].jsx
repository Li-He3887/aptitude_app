import React,{useState} from 'react'
import AdminLayout from '../../../layouts/admin-layout'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardActions,
  CardContent,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core'
import BrushIcon from '@mui/icons-material/Brush'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: '#e8f0f7',
    margin: '10px'
  },
  container: {
    marginTop: '4rem'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  card:{
    marginLeft: '20px',
    marginRight: '20px',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    alignItems: 'center'
  }
})

const SingleApplicant = () => {
  const classes = useStyles()

  const [editing, setEditing] = useState(false)

  const programList = [
    {
      value: 'ND',
      label: 'NitroDegree'
    },
    {
      value: 'DS',
      label: 'Data Science'
    },
    {
      value: 'BEW',
      label: 'Web Development'
    },
    {
      value: 'MOB',
      label: 'Mobile Development'
    }
  ]

  const [program, setProgram] = useState('ND')

  const programOnChange = event => {
    setProgram(event.target.value)
  }

  return(
    <AdminLayout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1>Applicants Detail</h1>
        </div>

        <Card className={classes.root}>

          <Grid container spacing={1}>
            <Grid item xs={11}>
              <CardContent className={classes.card}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Name: John Smith
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Email : johnsmith@gmail.com
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Result : 18/20
                </Typography>

                {
                  editing ?
                    <form>
                      <div>
                        <TextField 
                          fullWidth
                          required
                          select
                          margin='normal'
                          label='Programmens'
                          value={program}
                          onChange={programOnChange}
                        >
                          {programList.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                    </form>
                  :
                    <Typography variant="h6" component="h2" gutterBottom>
                      Programme : DS
                    </Typography>
                }
                
                <Typography variant="h6" component="h2" gutterBottom>
                  Phone No : 010-1111111
                </Typography>
              </CardContent>
            </Grid>

            <Grid item xs={1}>
              <IconButton aria-label="edit" size="medium">
                {
                  editing? <CloseIcon fontSize="inherit" /> : <BrushIcon fontSize="inherit" />
                }
              </IconButton>
            </Grid>
          </Grid>

          <CardActions className={classes.actions}>
            <Button size="medium" variant="contained" color="primary">
              View Report
              <ArrowForwardIosIcon />
            </Button>
          </CardActions>

        </Card>
      </div>
    </AdminLayout>
  )
}

export default SingleApplicant