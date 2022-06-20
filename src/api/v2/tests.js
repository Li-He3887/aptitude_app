import axios from 'axios'

const TESTS_API = (baseURL = process.env.FSAT_API_V2_URL) => {
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // Get test
  const getTest = ({ testId }) => api.get(`/tests/${testId}`)

  // Get tests
  const getAllTests = () => api.get(`/tests`)

  return {
    getTest,
    getAllTests
  }
}

export default TESTS_API
