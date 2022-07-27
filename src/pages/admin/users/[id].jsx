import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useMutation, useQuery } from 'react-query'
import { useSnackbar } from 'notistack'

import AdminLayout from '../../../layouts/admin-layout'
import EditUserDialog from '../../../components/dialogs/edit-user'
import Loader from '../../../components/loader'
import { getAdminsId, deleteAdmin } from '../../../api/v2/admins'

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

const SingleUser = props => {
  const classes = useStyles()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const adminId = router.query.id

  const [me, setMe] = useState({})
  const [openEdit, setOpenEdit] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.replace('./auth/sign-in')
    } else {
      setMe(JSON.parse(localStorage.getItem('admin')))
    }
  }, [])

  const { isLoading, data } = useQuery('admin', () => getAdminsId(adminId), {
    onError: () => {
      enqueueSnackbar('Failed to fetch admin', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
    }
  })

  const { mutate } = useMutation(() => deleteAdmin(adminId), {
    onError: () => {
      enqueueSnackbar('Failed to delete admin', {
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
    const confirmed = confirm('Are you sure you want to delete this admin?')

    if (confirmed) {
      mutate(adminId)
      router.push('/admin/users')
    }
  }

  const BeautifyOrg = org => {
    switch (org) {
      case 'FORWARDSCHOOL':
        return 'Forward School'
      case 'DELL':
        return 'Dell'
      case 'EXPERIOR':
        return 'Experior'
      default:
        return null
    }
  }

  return (
    <AdminLayout admin={me}>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1 className={classes.head1}>Admins Detail</h1>

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

        {!!data?.admins && (
          <>
            <Card className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <CardContent className={classes.card}>
                    <Typography variant='h6' component='h2' gutterBottom>
                      Name: {data.admins?.name}
                    </Typography>
                    <Typography variant='h6' component='h2' gutterBottom>
                      Email : {data.admins?.email}
                    </Typography>
                    <Typography variant='h6' component='h2' gutterBottom>
                      Phone No : {data.admins?.phone}
                    </Typography>
                    <Typography variant='h6' component='h2' gutterBottom>
                      Organisation : {data.admins?.organisation.name}
                    </Typography>
                    <Typography variant='h6' component='h2' gutterBottom>
                      Role : {data.admins?.role}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
            <EditUserDialog
              open={openEdit}
              onClose={() => setOpenEdit(false)}
              user={data.admins}
            />
          </>
        )}
      </div>
    </AdminLayout>
  )
}

export default SingleUser

export async function getServerSideProps() {
  return {
    props: {}
  }
}
