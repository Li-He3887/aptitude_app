import get from 'lodash/get'

export const getErrorMessage = error => {
  if (error.response) {
    const messageKey = get(error.response, 'data.message')

    switch (messageKey) {
      case 'INVALID_EMAIL':
        return {
          type: 'error',
          message: 'Email address is invalid.'
        }
      case 'INVALID_PHONE_NUMBER':
        return {
          type: 'error',
          message: 'Phone number is invalid.'
        }
      case 'INVALID_TEST_CODE':
        return {
          type: 'error',
          message: 'Test code is invalid.'
        }
      case 'INVALID_EMAIL_OR_PASSWORD':
        return {
          type: 'error',
          message: 'Invalid email or password.'
        }
      default:
        return {
          type: 'default',
          message: 'Something went wrong! Please try again later.'
        }
    }
  } else {
    return {
      type: 'default',
      message: 'Something went wrong! Please try again later.'
    }
  }
}
