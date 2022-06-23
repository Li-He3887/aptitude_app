import axios from 'axios'

const api = axios.create({
    baseURL: process.env.FSAT_API_V2_URL || 'http://localhost:3000/v2',
    headers: {
      'Content-Type': 'application/json',
      'x-request-token': 'eztest'
    }
  })

export const getUserById = (Id) => {
    return api.get(`/users/${Id}`).then(res => {
        return res.data
    })
}