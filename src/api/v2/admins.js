import axios from 'axios'

const api = axios.create({
  baseURL: process.env.FSAT_API_V2_URL || 'http://localhost:3000/v2',
  headers: {
<<<<<<< HEAD
    'Content-Type': 'application/json'
=======
    'Content-Type': 'application/json',
    'x-request-token': 'eztest',
>>>>>>> a1d0b664d2ea986b3af630a76e5ff356cf1bab94
  }
})

    //create admin
    export const createAdmin = ({
        name,
        email,
        phone,
        role,
<<<<<<< HEAD
        organisations
    }) => api.post(`/admins`,{
        name,
        email,
        password,
        role,
        organisations
=======
        organisation
    }) => api.post(`/admins`,{
        name,
        email,
        phone,
        password: Math.floor(100000 + Math.random() * 900000).toString(),
        role,
        organisation
>>>>>>> a1d0b664d2ea986b3af630a76e5ff356cf1bab94
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
<<<<<<< HEAD
        baseURL+'/admins/changePass', 
=======
        process.env.FSAT_API_V2_URL+'/admins/changePass', 
>>>>>>> a1d0b664d2ea986b3af630a76e5ff356cf1bab94
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

<<<<<<< HEAD
    export const getAdmins = () => axios.get('/admins')
=======
    export const getAdmins = () => api.get('/admins')
>>>>>>> a1d0b664d2ea986b3af630a76e5ff356cf1bab94

