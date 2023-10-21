import { onError } from '@apollo/client/link/error'

const errorIgnore = [
  'Variable "$channelId" of required type "String!" was not provided.',
  'This session was already closed',
]

const pageActions = {
  ['/user']: () => {
    // store.dispatch(logoutLivestream())
    // store.dispatch(resetSessionInfo())
  },
  ['/admin']: () => {
    // store.dispatch(logoutAdmin())
  },
}

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Messag  e: ${message}, Location: ${locations}, Path: ${path}`,
      )

      if (!errorIgnore.includes(message)) {
        const path = window.location.pathname.split('/')[1]
        const action = pageActions[path as keyof typeof pageActions]

        // const notification = {
        //   key: message,
        //   type: 'error',
        //   message: 'Lỗi',
        //   description: message,
        // }

        if (message === 'Unauthorized') {
          if (action) {
            action()
          }
        } else {
          // NotificationCustom(notification)
        }
      }
    })
  }

  if (networkError) console.log(`[Network error]: ${networkError}`)
})
