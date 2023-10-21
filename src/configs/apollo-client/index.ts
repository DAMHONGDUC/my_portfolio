import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

import { authLink } from './authLink'
import { errorLink } from './errorLink'

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_ENDPOINT,
})

const httpSocketLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_SOCKET_ENDPOINT,
})

const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: process.env.NEXT_PUBLIC_SUBSCRIPTION_ENDPOINT ?? '',
        }),
      )
    : null

const splitLink =
  typeof window !== 'undefined' && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          )
        },
        wsLink,
        httpLink,
      )
    : httpLink

const splitLinkClient2 =
  typeof window !== 'undefined' && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          )
        },
        wsLink,
        httpSocketLink,
      )
    : httpSocketLink

const consoleLink = new ApolloLink((operation, forward) => {
  // console.log(`starting request for ${operation.operationName}`)
  return forward(operation).map((data) => {
    // console.log(`ending request for ${operation.operationName}`)
    return data
  })
})

export const client = new ApolloClient({
  link: from([errorLink, authLink, consoleLink, splitLink]),
  cache: new InMemoryCache(),
})

export const client2 = new ApolloClient({
  link: from([errorLink, authLink, consoleLink, splitLinkClient2]),
  cache: new InMemoryCache(),
})
