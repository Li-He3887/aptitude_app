import React,{useState} from 'react'
import AdminLayout from '../../../layouts/admin-layout'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from '@material-ui/core'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import EditApplicant from '../../../components/function/EditApplicant'

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

                <Typography variant="h6" component="h2" gutterBottom>
                  Programme : DS
                </Typography>
                
                <Typography variant="h6" component="h2" gutterBottom>
                  Phone No : 010-1111111
                </Typography>
              </CardContent>
            </Grid>

            <Grid item xs={1}>
              <EditApplicant />
            </Grid>
          </Grid>

          <CardActions className={classes.actions}>
            <Button size="medium" variant="contained" color="primary" href='tests/${id}/report'>
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