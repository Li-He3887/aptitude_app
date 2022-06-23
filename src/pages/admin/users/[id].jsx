import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import AdminLayout from '../../../layouts/admin-layout'
import EditUsers from '../../../components/function/EditUsers'
import { makeStyles } from '@material-ui/styles'
import { getAdminsId } from '../../../api/v2/admins'
import { useQuery } from 'react-query'
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid
} from '@material-ui/core'
import Loader from '../../../components/loader'
import { getURL } from 'next/dist/next-server/lib/utils'
import { func } from 'prop-types'

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
  card:{
    marginLeft: '20px',
    marginRight: '20px',
  },
  deleteBtn: {
    marginLeft: '0.8rem',
    marginRight: '0.8rem'
  }
})

const SingleUser = (props) => {
  const classes = useStyles()
  const router = useRouter()
  const [me, setMe] = useState({})
  const {id} = props

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.replace('./auth/sign-in')
    } else {
      setMe(JSON.parse(localStorage.getItem('admin')))
    }
  }, [])

  const [openEdit, setOpenEdit] = useState(false)
  
  console.log(router.query.id)
  const {isLoading, error, data} = useQuery("admins",() => getAdminsId(id))
  console.log(data)  

  if (isLoading) {
    return (
      <AdminLayout>
        <Loader loading={isLoading} />
      </AdminLayout>
    )
  }

  const BeautifyOrg = (org) => {
    switch (org) {
      case 'FORWARDSCHOOL':
        return "Forward School"
      case 'DELL':
        return "Dell"
      case 'EXPERION':
        return "Experion"
      default:
        return null
    }
  }

  
  return(
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
            >
              Delete
            </Button>
          </div>
        </div>

        <Card className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <CardContent className={classes.card}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Name: {data.admins.name}
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Email : {data.admins.email}
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Phone No : {data.admins.phone}
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Organisation : {BeautifyOrg(data.admins.organisation)}
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  Role : {data.admins.role}
                </Typography>
              </CardContent>
            </Grid>

            <Grid item xs={1}>
              <EditUsers
                data={data.admins}
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

export default SingleUser

export async function getServerSideProps(context) {
  const id = context.query.id
<<<<<<< HEAD
  return{
=======
  return {
>>>>>>> 1084820174b7e21745ff38dfb26f521a1cd95c09
    props: {id}
  }
}