import axios from 'axios'

const api = axios.create({
  baseURL: process.env.FSAT_API_V2_URL || 'http://localhost:3000/v2',
  headers: {
    'Content-Type': 'application/json'
  }
})

    //create admin
    export const createAdmin = ({
        name,
        email,
        password,
        role,
        organisations
    }) => api.post(`/admins`,{
        name,
        email,
        password,
        role,
        organisations
    })
        
    export const logIn = ({
        email,
        password
    }) => api.post('/admins/login', {
        email,
        password
    })

    export const changePass = ({
        email,
        password,
        confirmPassword
    }, id) => axios.post(
        baseURL+'/admins/changePass', 
        {
            email, 
            password,
            confirmPassword
        },{
            headers: {'Content-Type': 'application/json', 'x_auth_token': id}
        }
    )

    export const deleteAdmin = ({
        id
    }) => api.post('/admins/delete', {
        id: id
    })

    export const getAdmins = () => axios.get('/admins')

