import axios from 'axios'

const api = axios.create({
  baseURL: process.env.FSAT_API_V2_URL || 'http://localhost:3000/v2',
  headers: {
    'Content-Type': 'application/json',
    'x-request-token': 'GqCah4Jg7lrDanVfmCskHy7hlp8GMXQt'
  }
})

export const getUserById = Id => {
  return api.get(`/users/${Id}`).then(res => {
    return res.data
  })
}

export const changeProgramme = ({ id, programme }) => {
  return api
    .post(`/users/programme`, {
      id,
      programme
    })
    .then(res => {
      return res.data
    })
}
