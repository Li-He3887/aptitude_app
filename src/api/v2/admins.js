import axios from 'axios'

const api = axios.create({
  baseURL: process.env.FSAT_API_V2_URL || 'http://localhost:3000/v2',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Create admin
export const createAdmin = ({ name, email, password, role }) =>
  api.post('/admins', {
    data: {
      name,
      email,
      password: '123456',
      role
    }
  })
