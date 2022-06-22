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
export const getTestStats = () => api.get('/tests/stats').then(res => res.data)

// Get tests
export const getAllTests = ({ startDate, endDate, search, status }) => {
  const params = []

  if (startDate) {
    params.push(`startDate=${startDate}`)
  }

  if (endDate) {
    params.push(`startDate=${endDate}`)
  }

  if (search) {
    params.push(`startDate=${search}`)
  }

  if (status) {
    params.push(`startDate=${status}`)
  }

  return api
    .get(`/tests${params.length ? `?${params.join('&')}` : ''}`)
    .then(res => res.data)
}
