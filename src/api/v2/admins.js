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

    return {
        createAdmin
    }
}

export default ADMIN_API