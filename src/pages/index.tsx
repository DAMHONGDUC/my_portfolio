import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Home from '@/features/home/Home'
import AboutMeSection from '@/components/AboutMeSection/AboutMeSection'

const HomePage: NextPage = () => {
  return (
    <>
      <Home />
      <AboutMeSection />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    return {
      props: {
        ...(await serverSideTranslations(context.locale as string, ['common'])),
      },
    }
  } catch (error) {
    context.res.statusCode = 301
    return {
      props: {},
    }
  }
}

export default HomePage
