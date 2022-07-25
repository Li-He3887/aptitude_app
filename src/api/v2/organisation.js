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
  api.post(`/orgs`, {
    name,
    tag
  })

//get organisation by id
export const getOrganisationById = Id => {
  return api.get(`/orgs/${Id}`).then(res => {
    return res.data
  })
}

//edit organisation
export const editOrganisation = ({ name, tag }) => {
  console.log({ name, tag })
  return api
    .put(`orgs/${id}`, {
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

//organisation filter
export const getOrganisation = ({ search, page }) => {
  const params = []

  if (search) {
    params.push(`${search}`)
  }

  if (page) {
    params.push(`${page}`)
  } else {
    params.push(`0`)
  }

  return api
    .get(`/orgs/filter/${params.length ? `${params.join('-')}` : ''}`)
    .then(res => {
      return res.data
    })
}