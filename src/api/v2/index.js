import axios from 'axios'

const baseURL = process.env.FSAT_API_V2_URL
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const createTest = ({
  name,
  email,
  testCode,
  phone = null,
  programme,
  organisation
}) => {
  return api.post('/tests', {
    name,
    email,
    organisation,
    programme,
    testCode,
    ...(phone && {
      phone
    })
  })
}
