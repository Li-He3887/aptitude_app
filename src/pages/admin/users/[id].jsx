import React from 'react'
import AdminLayout from '../../../layouts/admin-layout'
import { makeStyles } from '@material-ui/styles'
import { Card, CardContent, IconButton, Typography } from '@material-ui/core'
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
  card: {
    marginLeft: '15px',
    marginRight: '15px'
  }
})

const SingleUser = () => {
  const classes = useStyles()
  return (
    <AdminLayout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1>Admin Detail</h1>
        </div>

        <Card className={classes.root}>
          <IconButton aria-label='delete' size='medium'>
            <DeleteIcon fontSize='inherit' />
          </IconButton>

          <CardContent className={classes.card}>
            <Typography variant='h6' component='h2' gutterBottom>
              Name: Chris Evans
            </Typography>
            <Typography variant='h6' component='h2' gutterBottom>
              Email : chris@avengers.com
            </Typography>
            <Typography variant='h6' component='h2' gutterBottom>
              Phone No : 010-1111111
            </Typography>
            <Typography variant='h6' component='h2' gutterBottom>
              Organisation : Forward School
            </Typography>
            <Typography variant='h6' component='h2' gutterBottom>
              Role : Admin
            </Typography>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

export default SingleUser
