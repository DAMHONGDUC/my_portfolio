import { MainCustom } from './Layout.style'
import Head from 'next/head'
import { DOCUMENT_TITLE } from '@/constants'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
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
