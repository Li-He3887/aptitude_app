import axios from 'axios'

const api = axios.create({
  baseURL: process.env.FSAT_API_V2_URL || 'http://localhost:3000/v2',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Get test
export const getTest = ({ testId }) => api.get(`/tests/${testId}`)

// Get dashboard test statisitics
export const getTestAverages = () => api.get('/tests/average').then(res => {
  return res.data
})

// Get tests
export const getAllTests = ({ startDate, endDate, search, organisation, page }) => {
  const params = []

  if (startDate) {
    params.push(`${startDate}`)
  }

  if (endDate) {
    params.push(`${endDate}`)
  }

  if (search) {
    params.push(`${search}`)
  }

  if(organisation) {
    params.push(`${organisation}`)
  }

  if (page) {
    params.push(`${page}`)
  } else {
    params.push(`0`)
  }

  const response = () => {
    return api
      .get(`/tests/filter/${params.length ? `${params.join('-')}` : ''}`)
      .then(res => {
        return res.data
      })
  }

  return response
}
