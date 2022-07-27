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
export const getOrganisationById = (organisationId) => {
  console.log(organisationId)
  return api.get(`/orgs/id/${organisationId}`).then(res => {
    return res.data
  })
}

//edit organisation
export const editOrganisation = ({ name, tag, id }) => {
  console.log({ name, tag, id })
  return api
    .post(`orgs/edit`, {
      name,
      tag,
      id
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