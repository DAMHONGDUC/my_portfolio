import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HeroSection from '@/components/HeroSection/HeroSection'
import AboutMeSection from '@/components/AboutMeSection/AboutMeSection'
import SkillSection from '@/components/SkillSection/SkillSection'
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection'

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillSection />
      <ExperienceSection />
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
