import config from '../config'
import fetcher from './fetcher'

const userApi = {
  signUp: async (params = {}) => {
    const res = await fetcher('/auth/register', 'POST', params)

    if (res?.user) {
      return res.user
    } else {
      let errorMessage
      if (res.errors) errorMessage = res.errors[0].message
      return { error: true, errorMessage: errorMessage }
    }
  },

  sendPasswordReset: async (params = {}) => {
    const res = await fetcher('/auth/send-password-reset', 'POST', params)
    if (res == 'success') return { status: 'success' }
    else return { status: 'fail', message: res.message }
  },

  resetPassword: async (params = {}) => {
    const res = await fetcher('/auth/reset-password', 'POST', params)

    if (res == 'Password Updated') return { status: 'success' }
    else return { status: 'fail', message: res.message }
  },
}

export default userApi
