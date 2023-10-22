import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { MainCustom } from './Layout.style'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <MainCustom>{children}</MainCustom>
      <Footer />
    </>
  )
}

export default Layout
