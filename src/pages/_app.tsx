import { store } from '@/store'
import '@/styles/globals.css'
import { UserConfig, appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import nextI18nextConfig from '../../next-i18next.config'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/configs/apollo-client'
import { GlobalStyle } from '@/styles/theme/global.style'
import Layout from '@/layout/Layout'

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ApolloProvider>
    </Provider>
  )
}

export default appWithTranslation(WrappedApp, nextI18nextConfig as UserConfig)
