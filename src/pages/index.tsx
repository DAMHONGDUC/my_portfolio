import { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

const HeroSection = dynamic(
  () => import('@/components/HeroSection/HeroSection'),
  {
    ssr: false,
  },
)

const AboutMeSection = dynamic(
  () => import('@/components/AboutMeSection/AboutMeSection'),
  {
    ssr: false,
  },
)

const SkillSection = dynamic(
  () => import('@/components/SkillSection/SkillSection'),
  {
    ssr: false,
  },
)

const ExperienceSection = dynamic(
  () => import('@/components/ExperienceSection/ExperienceSection'),
  {
    ssr: false,
  },
)

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
