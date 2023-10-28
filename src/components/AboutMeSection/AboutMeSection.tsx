import { FC } from 'react'
import SectionContainer from '../Layout/Container/SectionContainer'
import { theme } from '@/styles/theme/theme'
import Tag from '../Tag/Tag'
import {
  ColumnContainer,
  RowContainer,
  TitleText,
  ContentText,
} from './AboutMeSection.style'
import ImageWithShadow from '../ImageWithShadow/ImageWithShadow'
import { USER_INFO } from '@/constants'

interface IProps {}

const AboutMeSection: FC<IProps> = ({}) => {
  return (
    <SectionContainer
      style={{ backgroundColor: theme.colors.secondary }}
      id={'about-me'}
    >
      <ColumnContainer style={{ gap: '5rem' }}>
        <Tag title={'About me'} />

        <RowContainer style={{ justifyContent: 'space-between' }}>
          <ImageWithShadow localSource={USER_INFO.HERO_SECTION.IMAGE} />
          <ColumnContainer>
            <TitleText>{USER_INFO.ABOUT_ME_SECTION.title}</TitleText>
            <ContentText>{USER_INFO.ABOUT_ME_SECTION.content}</ContentText>
          </ColumnContainer>
        </RowContainer>
      </ColumnContainer>
    </SectionContainer>
  )
}

export default AboutMeSection