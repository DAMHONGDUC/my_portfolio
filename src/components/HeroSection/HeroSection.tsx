import { FC } from 'react'
import SectionContainer from '../Layout/Container/SectionContainer'
import { MapPin } from 'lucide-react'
import {
  Container,
  ContentContainer,
  MainTitle,
  ColumnContainer,
  RowContainer,
  WavingSpan,
} from './HeroSection.style'
import ImageWithShadow from '../ImageWithShadow/ImageWithShadow'
import { USER_INFO } from '@/constants'
import { theme } from '../../styles/theme/theme'
import ActiveIcon from '../ActiveIcon/ActiveIcon'
import { ContentText } from '../Layout/Text/general'
import SocialLink from '../SocialLink/SocialLink'

interface IProps {}

const HeroSection: FC<IProps> = ({}) => {
  return (
    <SectionContainer id={USER_INFO.HERO_SECTION.ID}>
      <Container>
        <ContentContainer>
          <ColumnContainer>
            <MainTitle>
              {USER_INFO.HERO_SECTION.MAIN_TITLE}
              <WavingSpan> 👋</WavingSpan>
            </MainTitle>
            <ContentText>{USER_INFO.HERO_SECTION.SUB_TITLE}</ContentText>
          </ColumnContainer>

          <ColumnContainer>
            <RowContainer>
              <MapPin color={theme.colors.black} size={24} />
              <ContentText> {USER_INFO.HERO_SECTION.LOCATION}</ContentText>
            </RowContainer>

            <RowContainer>
              <ActiveIcon />
              <ContentText>{USER_INFO.HERO_SECTION.STATUS}</ContentText>
            </RowContainer>
          </ColumnContainer>

          <SocialLink />
        </ContentContainer>
        <ImageWithShadow localSource={USER_INFO.HERO_SECTION.IMAGE} />
      </Container>
    </SectionContainer>
  )
}

export default HeroSection
