import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from 'react-query'
import { makeStyles } from '@material-ui/styles'
import { Card, CardContent, Button, Typography, Grid } from '@material-ui/core'
import { useSnackbar } from 'notistack'

import AdminLayout from '../../../../layouts/admin-layout'
import EditOrganisationDialog from '../../../../components/dialogs/edit-organisation'
import Loader from '../../../../components/loader'

import { getOrganisationById, deleteOrganisation } from '../../../../api/v2/organisation'

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
    deleteBtn: {
      marginLeft: '0.8rem',
      marginRight: '0.8rem'
    }
  })
  
  const SingleOrganisation = props => {
    const classes = useStyles()
    const router = useRouter()
    const { enqueueSnackbar } = useSnackbar()
    
  
    const organisationId = router.query.id
  
    const [me, setMe] = useState({})
    const [openEdit, setOpenEdit] = useState(false)
  
    useEffect(() => {
      if (!localStorage.getItem('token')) {
        router.replace('./auth/sign-in')
      } else {
        setMe(JSON.parse(localStorage.getItem('organisation')))
      }
    }, [])
  
    const { isLoading, data, refetch } = useQuery('organisation', () => getOrganisationById(organisationId), {
      onError: () => {
        enqueueSnackbar('Failed to fetch organisation', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    })
    // console.log(organisationId)
  
    const { mutate } = useMutation(() => deleteOrganisation(organisationId), {
      onError: () => {
        enqueueSnackbar('Failed to delete organisation', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    })
  
    if (isLoading) {
      return (
        <AdminLayout>
          <Loader loading={isLoading} />
        </AdminLayout>
      )
    }
  
    const handleDelete = () => {
      const confirmed = confirm('Are you sure you want to delete this organisation?')
  
      if (confirmed) {
        mutate(organisationId)
        router.push('/admin/users')
      }
    }

  return (
    <AdminLayout admin={me}>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1 className={classes.head1}>Organisation Detail</h1>

          <div>
            <Button
              variant='contained'
              color='primary'
              size='large'
              onClick={() => setOpenEdit(true)}
            >
              Edit Details
            </Button>

            <Button
              variant='contained'
              color='primary'
              size='large'
              className={classes.deleteBtn}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>

        {!!data?.organisation && (
          <>
            <Card className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <CardContent className={classes.card}>
                    <Typography variant='h6' component='h2' gutterBottom>
                      Name: {data.organisation?.name}
                    </Typography>
                    <Typography variant='h6' component='h2' gutterBottom>
                      Tag : {data.organisation?.tag}
                    </Typography>
                    <Typography variant='h6' component='h2' gutterBottom>
                      Test Code : {data.organisation?.testCode}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
            <EditOrganisationDialog
              organisationId={organisationId}
              open={openEdit}
              onClose={() => setOpenEdit(false)}
              organisation={data.organisation}
              refetch={refetch}
            />
          </>
        )}
      </div>
    </AdminLayout>
  )
}

export default SingleOrganisation

export async function getServerSideProps() {
  return {
    props: {}
  }
}