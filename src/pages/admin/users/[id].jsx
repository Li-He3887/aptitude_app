import React, {useState} from 'react'
import AdminLayout from '../../../layouts/admin-layout'
import EditUsers from '../../../components/function/EditUsers'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Grid
} from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'

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
})

const SingleUser = () => {
  const classes = useStyles()

  const [editing, setEditing] = useState(false)
  return(
    <AdminLayout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1>Admins Detail</h1>
        </div>

        <Card className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <CardContent className={classes.card}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Name: Chris Evans
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Email : chris@avengers.com
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Phone No : 010-1111111
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Organisation : Forward School
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Role : Admin
                </Typography>
              </CardContent>
            </Grid>

            <Grid item xs={1}>
                <EditUsers />
            </Grid>

            <Grid item xs={1}>
              <IconButton aria-label="delete" size="medium">
                {
                  editing? <CloseIcon fontSize="inherit" /> : <DeleteIcon fontSize="inherit" />
                }
              </IconButton>
            </Grid>
          </Grid>  
        </Card>
      </div>
    </AdminLayout>
  )
}

export default SingleUser
