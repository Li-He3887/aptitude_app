import React from 'react'
import AdminLayout from '../../../layouts/admin-layout'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  IconButton,
  Typography
} from '@material-ui/core'
import BrushIcon from '@mui/icons-material/Brush'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: '#e8f0f7',
    margin: '10px',
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
    marginLeft: '15px',
    marginRight: '15px',
  },
})

const SingleApplicant = () => {
  const classes = useStyles()

  return(
    <AdminLayout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1>Applicant Detail</h1>
        </div>

        <Card className={classes.root}>
          <CardContent className={classes.card}>

            <IconButton aria-label="edit" className={classes.margin} size="small">
              <BrushIcon fontSize="inherit" />
            </IconButton>

            <Typography variant="h6" component="h2" gutterBottom>
              Name: John Smith
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              Email : johnsmith@gmail.com
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              Result : 18/20
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              Programme : DS
            </Typography>
            <Typography variant="h6" component="h2" gutterBottom>
              Phone No : 010-1111111
            </Typography>
          </CardContent>

          <CardActions>
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
