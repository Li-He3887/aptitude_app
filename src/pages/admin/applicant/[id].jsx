import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { makeStyles } from '@material-ui/styles'
import { Card, CardContent, Button, Typography, Grid } from '@material-ui/core'
import { useSnackbar } from 'notistack'

import AdminLayout from '../../../layouts/admin-layout'
import EditApplicant from '../../../components/function/EditApplicant'
import Loader from '../../../components/loader'

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

const SingleApplicant = props => {
  const classes = useStyles()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const [me, setMe] = useState({})
  const [openEdit, setOpenEdit] = useState(false)

  const applicantId = router.query.id

  const { isLoading, data } = useQuery(
    'applicant',
    () => getUserById(applicantId),
    {
      onError: () => {
        enqueueSnackbar('Failed to fetch applicant', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    }
  )

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.replace('./auth/sign-in')
    }
    setMe(JSON.parse(localStorage.getItem('admin')))
  }, [])

  if (isLoading) {
    return (
      <AdminLayout>
        <Loader loading={isLoading} />
      </AdminLayout>
    )
  }

  return (
    <AdminLayout admin={me}>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1 className={classes.head1}>Applicant Details</h1>
          <div>
            <Button
              variant='contained'
              color='primary'
              size='large'
              className={classes.viewReportBtn}
              href={`../../tests/${data.testId}/report`}
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
                  Name: {data.user.name}
                </Typography>
                <Typography variant='h6' component='h2' gutterBottom>
                  Email : {data.user.email}
                </Typography>
                <Typography variant='h6' component='h2' gutterBottom>
                  Result : {data.score} / 20
                </Typography>

                <Typography variant='h6' component='h2' gutterBottom>
                  Programme : {data.user.programme}
                </Typography>

                <Typography variant='h6' component='h2' gutterBottom>
                  Phone No : {data.user.phone.number}
                </Typography>
              </CardContent>
            </Grid>

            <Grid item xs={1}>
              <EditApplicant
                open={openEdit}
                handleClose={() => setOpenEdit(false)}
                user={data.user}
              />
            </Grid>
          </Grid>
        </Card>
      </div>
    </AdminLayout>
  )
}

export default SingleApplicant

export async function getServerSideProps() {
  return {
    props: {}
  }
}
