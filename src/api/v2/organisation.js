import axios from 'axios'

const api = axios.create({
  baseURL: process.env.FSAT_API_V2_URL || 'http://localhost:3000/v2',
  headers: {
    'Content-Type': 'application/json',
    'x-request-token': 'eztest'
  }
})

//create organisation
export const createOrganisation = ({ name, tag }) =>
  api.post(`/orgs/add`, {
    name,
    tag
  })

//get organisation by id
export const getOrganisationById = ({id}) => {
  console.log(id)
  return api.get(`/orgs/id/${id}`).then(res => {
    return res.data
  })
}

//edit organisation
export const editOrganisation = ({ name, tag }) => {
  console.log({ name, tag })
  return api
    .put(`orgs/edit`, {
      name,
      tag
    })
    .then(res => {
      return res.data
    })
}

//delete organisation
export const deleteOrganisation = id => {
  return api.post('/orgs/delete', { id: id })
}

//get organisation
export const getOrganisation = () => {
  return api.get('/orgs')
  .then(res => {
    return res.data.organisation
  })
}