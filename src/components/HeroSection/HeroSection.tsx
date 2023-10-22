import SectionContainer from '../Layout/Container/SectionContainer'
import { MapPin } from 'lucide-react'
import { Container, ContentContainer } from './HeroSection.style'
import { theme } from '../../styles/theme/theme'
import { Typography } from 'antd'
import ImageWithShadow from '../ImageWithShadow/ImageWithShadow'
import { USER_INFO } from '@/constants'

const { Title } = Typography

const HeroSection = () => {
  return (
    <SectionContainer id='hero'>
      <Container>
        <ImageWithShadow localSource={USER_INFO.HERO_IMAGE} />

        <ContentContainer>
          <div className='flex flex-col gap-2'>
            <Title level={1}>
              Hi, I&apos;m Sagar{' '}
              <span className='inline-block animate-waving-hand'>👋</span>
            </Title>
            <Typography>
              I&apos;m a full stack developer (React.js & Node.js) with a focus
              on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </Typography>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <MapPin className='stroke-gray-600' />
              <Typography>Ahmedabad, India</Typography>
            </div>

            <div className='flex items-center gap-2'>
              <div className='flex h-6 w-6 items-center justify-center'>
                <span className='relative flex h-3 w-3'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
                  <span className='relative inline-flex h-3 w-3 rounded-full bg-emerald-500'></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          {/* <SocialIcons /> */}
        </ContentContainer>
      </Container>
    </SectionContainer>
  )
}

export default HeroSection
