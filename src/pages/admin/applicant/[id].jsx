import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Card, CardContent, Button, Typography, Grid } from '@material-ui/core'

import AdminLayout from '../../../layouts/admin-layout'
import EditApplicant from '../../../components/function/EditApplicant'

import { getUserById } from '../../../api/v2/applicants'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: '#e8f0f7',
    margin: '10px'
  },
  container: {
    marginTop: '4rem'
  },
  head1: {
    fontSize: '1.4rem',
    color: '#1853A0'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  card: {
    marginLeft: '20px',
    marginRight: '20px'
  },
  viewReportBtn: {
    marginRight: '0.8rem'
  }
})

const SingleApplicant = ({
  fullName,
  email,
  result,
  programme,
  phone,
  reportId
}) => {
  const classes = useStyles()

  const [openEdit, setOpenEdit] = useState(false)

  return (
    <AdminLayout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1 className={classes.head1}>Applicant Details</h1>
          <div>
            <Button
              variant='contained'
              color='primary'
              size='large'
              className={classes.viewReportBtn}
              href={`tests/${reportId}/report`}
            >
              View Report
            </Button>
            <Button
              variant='contained'
              color='primary'
              size='large'
              onClick={() => setOpenEdit(true)}
            >
              Edit Details
            </Button>
          </div>
        </div>

        <Card className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={11}>
              <CardContent className={classes.card}>
                <Typography variant='h6' component='h2' gutterBottom>
<<<<<<< HEAD
                  Name: John Smith
=======
                  Name: 
>>>>>>> a1d0b664d2ea986b3af630a76e5ff356cf1bab94
                </Typography>
                <Typography variant='h6' component='h2' gutterBottom>
                  Email : johnsmith@gmail.com
                </Typography>
                <Typography variant='h6' component='h2' gutterBottom>
                  Result : 18/20
                </Typography>

                <Typography variant='h6' component='h2' gutterBottom>
                  Programme : DS
                </Typography>

                <Typography variant='h6' component='h2' gutterBottom>
                  Phone No : 010-1111111
                </Typography>
              </CardContent>
            </Grid>

            <Grid item xs={1}>
              <EditApplicant
                open={openEdit}
                handleClose={() => setOpenEdit(false)}
              />
            </Grid>
          </Grid>
        </Card>
      </div>
    </AdminLayout>
  )
}

export default SingleApplicant

SingleApplicant.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  result: PropTypes.number,
  programme: PropTypes.string,
  phone: PropTypes.string,
  reportId: PropTypes.string
<<<<<<< HEAD
}
=======
}
>>>>>>> a1d0b664d2ea986b3af630a76e5ff356cf1bab94
