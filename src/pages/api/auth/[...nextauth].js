import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import fetcher from '@lib/fetcher'

const providers = [
  CredentialsProvider({
    name: 'Credentials',
    authorize: async ({ email, password }) => {
      const data = await fetcher('/auth/login', 'POST', {
        email,
        password,
      })

      if (data.user) {
        return data
      } else {
        let errorMessage
        if (data.message) errorMessage = data.message
        if (data.errors) errorMessage = data.errors[0].message

        throw new Error(errorMessage)
      }
    },
  }),
]

const callbacks = {
  async jwt({ token, user, account, isNewUser }) {
    if (user?.token) {
      token = { token: user.token, user: user.user }
    }

    return token
  },
  async session({ session, token }) {
    session.user = token.user
    session.token = token.token
    return session
  },
}

const options = {
  providers,
  callbacks,
  pages: {
    signIn: '/signin',
  },
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  session: {
    maxAge: 60 * 60 * 24,
  },
}

export default NextAuth(options)
