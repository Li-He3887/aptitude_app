import axios from 'axios'

const api = axios.create({
  baseURL: process.env.FSAT_API_V2_URL || 'http://localhost:3000/v2',
  headers: {
    'Content-Type': 'application/json',
    'x-request-token': 'GqCah4Jg7lrDanVfmCskHy7hlp8GMXQt'
  }
})

// create organisation
export const createOrganisation = ({ name, tag, testCode }) =>
  api.post(`/orgs/add`, {
    name,
    tag,
    testCode
  })

// get organisation by id
export const getOrganisationById = organisationId => {
  return api.get(`/orgs/id/${organisationId}`).then(res => {
    return res.data
  })
}

// edit organisation
export const editOrganisation = ({ name, tag, testCode, id }) => {
  return api
    .post(`orgs/edit`, {
      name,
      tag,
      testCode,
      id
    })
    .then(res => {
      return res.data
    })
}

// delete organisation
export const deleteOrganisation = id => {
  return api.post('/orgs/delete', { id: id })
}

// get organisation
export const getOrganisation = () => {
  return api.get('/orgs').then(res => {
    return res.data.organisation
  })
}

export const checkOrg = organisation => {
  return api.get(`/orgs/valid/${organisation}`).then(res => {
    return res.data
  })
}
