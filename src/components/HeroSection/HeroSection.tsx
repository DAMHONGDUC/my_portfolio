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
  SocialButton,
} from './HeroSection.style'
import ImageWithShadow from '../ImageWithShadow/ImageWithShadow'
import { USER_INFO } from '@/constants'
import { theme } from '../../styles/theme/theme'
import ActiveIcon from '../ActiveIcon/ActiveIcon'
import { Github, Facebook, Instagram, Figma } from 'lucide-react'
import { ISocialLink } from '@/interfaces/socialLink'
import { openURLInNewTab } from '@/utils'
import { ContentText } from '../Layout/ContentText/ContentText.style'

interface IProps {}

const SOCIALS_LINK: ISocialLink[] = [
  {
    id: 1,
    key: 'Github',
    component: <Github color={theme.colors.black} size={24} />,
    url: USER_INFO.HERO_SECTION.SOCIAL.GITHUB,
  },
  {
    id: 2,
    key: 'Figma',
    component: <Figma color={theme.colors.black} size={24} />,
    url: USER_INFO.HERO_SECTION.SOCIAL.FIGMA,
  },
  {
    id: 3,
    key: 'Facebook',
    component: <Facebook color={theme.colors.black} size={24} />,
    url: USER_INFO.HERO_SECTION.SOCIAL.FACEBOOK,
  },
  {
    id: 4,
    key: 'Instagram',
    component: <Instagram color={theme.colors.black} size={24} />,
    url: USER_INFO.HERO_SECTION.SOCIAL.INSTAGRAM,
  },
]

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

          <RowContainer style={{ gap: 24 }}>
            {SOCIALS_LINK.map((e) => (
              <SocialButton
                type='text'
                key={e.id}
                onClick={() => openURLInNewTab(e.url)}
                icon={e.component}
              />
            ))}
          </RowContainer>
        </ContentContainer>
        <ImageWithShadow localSource={USER_INFO.HERO_SECTION.IMAGE} />
      </Container>
    </SectionContainer>
  )
}

export default HeroSection
