import { getSession, useSession } from 'next-auth/react'
import Router from 'next/router'

export async function checkAuth(context) {
  const session = await getSession(context)
  if (!session?.token) {
    return {
      redirect: {
        destination: `/signin?next=${context.resolvedUrl}`,
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export async function authRedirect(context) {
  const session = await getSession(context)

  if (!session?.token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
