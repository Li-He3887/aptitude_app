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
  IconButton,
  Typography,
  Grid
} from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import Loader from '../../../components/loader'

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
  const router = useRouter()
  const [me, setMe] = useState({})

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.replace('./auth/sign-in')
    } else {
      setMe(JSON.parse(localStorage.getItem('admin')))
    }

    
  }, [])

  const [editing, setEditing] = useState(false)  
  
  console.log(router.query.id)
  const {isLoading, error, data} = useQuery("admins", getAdminsId)
  console.log(data)

  if (isLoading) {
    return (
      <AdminLayout>
        <Loader loading={isLoading} />
      </AdminLayout>
    )
  }

  const BeautifyOrg = (org) => {
    if(org == "FORWARDSCHOOL") {
      return "Forward School"
    }
  }

  return(
    <AdminLayout admin={me}>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1>Admins Detail</h1>
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
