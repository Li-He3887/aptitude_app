import axios from 'axios'

const ADMIN_API = (baseURL = process.env.FSAT_API_V2_URL) => {
    const api = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    //create admin
    const createAdmin = ({
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
        
    const logIn = ({
        email,
        password
    }) => api.post('/admins/login', {
        email,
        password
    })

    const changePass = ({
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

    const deleteAdmin = ({
        id
    }) => api.post('/admins/delete', {
        id: id
    })

    const getAdmins = () => axios.get('/admins')

    return {
        createAdmin,
        logIn,
        changePass,
        deleteAdmin,
        getAdmins
    }
}

export default ADMIN_API