import SectionContainer from '../Layout/Container/SectionContainer'
import { MapPin } from 'lucide-react'
import {
  Container,
  ContentContainer,
  MainTitle,
  SubTitle,
  ColumnContainer,
  RowContainer,
  WavingSpan,
} from './HeroSection.style'
import { Typography } from 'antd'
import ImageWithShadow from '../ImageWithShadow/ImageWithShadow'
import { USER_INFO } from '@/constants'
import { theme } from '../../styles/theme/theme'
import ActiveIcon from '../ActiveIcon/ActiveIcon'

const HeroSection = () => {
  return (
    <SectionContainer id='hero'>
      <Container>
        <ImageWithShadow localSource={USER_INFO.HERO_SECTION.IMAGE} />

        <ContentContainer>
          <ColumnContainer>
            <MainTitle>
              {USER_INFO.HERO_SECTION.MAIN_TITLE}
              <WavingSpan> 👋</WavingSpan>
            </MainTitle>
            <SubTitle>{USER_INFO.HERO_SECTION.SUB_TITLE}</SubTitle>
          </ColumnContainer>

          <ColumnContainer>
            <RowContainer>
              <MapPin color={theme.colors.black} size={24} />
              <SubTitle> {USER_INFO.HERO_SECTION.LOCATION}</SubTitle>
            </RowContainer>

            <RowContainer>
              <ActiveIcon />
              <Typography>{USER_INFO.HERO_SECTION.STATUS}</Typography>
            </RowContainer>
          </ColumnContainer>
          {/* <SocialIcons /> */}
        </ContentContainer>
      </Container>
    </SectionContainer>
  )
}

export default HeroSection
