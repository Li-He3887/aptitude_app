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
    }) => api.post(`/admins`)
        
    const logIn = ({
        email,
        password
    }) => api.post('/admins/login')

    const changePass = ({
        email,
        password
    }, id) => axios.post(
        'admins/changePass', 
        {
            email, 
            password
        }, 
        axios.create({
            baseURL,
            headers: {'Content-Type': 'application/json', 'x_auth_token': id}
        })
    )

    const deleteAdmin = ({})

    return {
        createAdmin,
        logIn,
        changePass
    }
}

export default ADMIN_API