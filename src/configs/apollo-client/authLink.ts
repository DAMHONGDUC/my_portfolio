import { ApolloLink, DefaultContext } from '@apollo/client'
import Cookies from 'js-cookie'

export const authLink = new ApolloLink((operation, forward) => {
  const getToken = {}
  const pathname = window.location.pathname.split('/')[1]

  // const token =
  //   localStorage.getItem(STORAGE_ITEM.ACCESS_TOKEN) ||
  //   sessionStorage.getItem(STORAGE_ITEM.ACCESS_TOKEN)
  operation.setContext(({ headers }: DefaultContext) => ({
    headers: {
      authorization: `Bearer ${getToken[pathname as keyof typeof getToken]}`, // however you get your token
      ...headers,
    },
  }))
  return forward(operation)
})
