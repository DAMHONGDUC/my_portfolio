import React from 'react'
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const MyDocument = () => (
  <Html lang='ja'>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const cache = createCache()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <StyleProvider cache={cache}>
            {sheet.collectStyles(<App {...props} />)}
          </StyleProvider>
        ),
      })

    const initialProps = await Document.getInitialProps(ctx)
    const style = extractStyle(cache, true)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}

export default MyDocument
