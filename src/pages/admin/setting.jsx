import React,{ useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    Toolbar,
    CardActions,
    Button,
  } from '@material-ui/core'

import AdminLayout from '../../layouts/admin-layout'
import EditSetting from '../../components/function/EditSetting'

const useStyles = makeStyles({
    actions:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'right',
        alignItems: 'center'
    },
    button:{
        background: '#FF0000',
        color: 'white',
    }
})

function Setting() {
    const classes = useStyles()

    const [editing, setEditing] = useState(false)

    return (
        <AdminLayout>
            <Toolbar />
            <h1>Setting</h1>

            <EditSetting />

            <CardActions className={classes.actions}>
                <Button className={classes.button} variant="contained" >
                    Logout
                </Button>
            </CardActions>
    
        </AdminLayout>
    )
}

export default Setting