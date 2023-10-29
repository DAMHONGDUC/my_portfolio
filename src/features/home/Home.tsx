import { FC } from 'react'
import { HomeContainer } from './Home.style'
import HeroSection from '@/components/HeroSection/HeroSection'
import AboutMeSection from '@/components/AboutMeSection/AboutMeSection'
import SkillSection from '@/components/SkillSection/SkillSection'
import ExperienceSection from '@/components/ExperienceSection/ExperienceSection'

interface IProps {}

const Home: FC<IProps> = ({}) => {
  return (
    <HomeContainer>
      <HeroSection />
      <AboutMeSection />
      <SkillSection />
      <ExperienceSection />
    </HomeContainer>
  )
}

export default Home
