import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default RootLayout
