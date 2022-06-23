import axios from 'axios'

const api = axios.create({
  baseURL: process.env.FSAT_API_V2_URL || 'http://localhost:3000/v2',
  headers: {
    'Content-Type': 'application/json',
    'x-request-token': 'eztest'
  }
})

// create admin
export const createAdmin = ({ name, email, phone, role, organisation }) =>
  api.post(`/admins`, {
    name,
    email,
    phone,
    password: Math.floor(100000 + Math.random() * 900000).toString(),
    role,
    organisation
  })

export const logIn = ({ email, password }) =>
  api.post('/admins/login', {
    email,
    password
  })

export const changePass = ({ email, password, confirmPassword }, id) =>
  axios.post(
    process.env.FSAT_API_V2_URL + '/admins/changePass',
    {
      email,
      password,
      confirmPassword
    },
    {
      headers: { 'Content-Type': 'application/json', x_auth_token: id }
    }
  )

export const deleteAdmin = id => {
  return api.post('/admins/delete', { id: id })
}

export const getAdmins = ({ organisation, role, search }) => {
  const params = []

  if (organisation) {
    params.push(`${organisation}`)
  }

  if (role) {
    params.push(`${role}`)
  }

  if (search) {
    params.push(`${search}`)
  }

  return api
    .get(`/admins/filter/${params.length ? `${params.join('-')}` : ''}`)
    .then(res => {
      return res.data
    })
}

export const getAdminsId = Id => {
  return api.get(`/admins/${Id}`).then(res => {
    return res.data
  })
}

export const editAdmin = ({ name, email, role, phone, organisation, id }) => {
  console.log({ name, email, role, phone, organisation, id })
  return api
    .put(`admins/${id}`, {
      name,
      email,
      role,
      phone,
      organisation
    })
    .then(res => {
      return res.data
    })
}
