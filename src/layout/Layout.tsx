import { MainCustom } from './Layout.style'
import Head from 'next/head'
import { DOCUMENT_TITLE } from '@/constants'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { useEffect, useState } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPage(true)
    }, 10)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if (!showPage) {
    return
  }

  return (
    <>
      <Head>
        <title>{DOCUMENT_TITLE}</title>
      </Head>
      <Header />
      <MainCustom>{children}</MainCustom>
      <Footer />
    </>
  )
}

export default Layout
