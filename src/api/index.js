import axios from 'axios'

const FSAT_API = (baseURL = 'http://localhost:3000/v1') => {
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // Create test
  const createTest = ({ name, email, testCode, phone = null }) =>
    api.post('/tests', {
      name,
      email,
      testCode,
      ...(phone && {
        phone
      })
    })

  // Get test
  const getTest = ({ testId }) => api.get(`/tests/${testId}`)

  // Start test
  const startTest = ({ testId }) => api.post(`/tests/${testId}/start`)

  // Answer question
  const answerQuestion = ({ testId, questionNumber, answer }) =>
    api.post(`/tests/${testId}/questions/${questionNumber}`, {
      answer
    })

  // Get test results
  const getTestResults = ({ testId }) => api.get(`/tests/${testId}/results`)

  return {
    createTest,
    getTest,
    startTest,
    answerQuestion,
    getTestResults
  }
}

export default FSAT_API
