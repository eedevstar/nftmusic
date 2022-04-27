import { useSession } from 'next-auth/react'

const checkLoggedIn = () => {
  const { data: session } = useSession()

  return !!session?.user
}

const authUser = () => {
  const { data: session } = useSession()

  if (session?.user) {
    return session.user
  } else {
    return null
  }
}

const authToken = () => {
  const { data: session } = useSession()

  if (session?.token) {
    return session.token
  } else {
    return null
  }
}

const authComponent = children => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push('/signin')
    },
  })
  return children
}

export { checkLoggedIn, authUser, authToken, authComponent }
