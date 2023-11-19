import { FC } from 'react'
import SectionContainer from '../Layout/Container/SectionContainer'
import { theme } from '@/styles/theme/theme'
import Tag from '../Tag/Tag'
import { ColumnContainer, RowContainer } from './AboutMeSection.style'
import ImageWithShadow from '../ImageWithShadow/ImageWithShadow'
import { USER_INFO } from '@/constants'
import { ContentText } from '../Layout/Text/general'
import { TitleText } from '../Layout/Text/general'

interface IProps {}

const AboutMeSection: FC<IProps> = ({}) => {
  return (
    <SectionContainer
      style={{ backgroundColor: theme.colors.secondary }}
      id={USER_INFO.ABOUT_ME_SECTION.ID}
    >
      <ColumnContainer style={{ gap: '3rem' }}>
        <Tag title={USER_INFO.ABOUT_ME_SECTION.TAG} />

        <RowContainer style={{ justifyContent: 'space-between' }}>
          <ImageWithShadow localSource={USER_INFO.ABOUT_ME_SECTION.IMAGE} />
          <ColumnContainer>
            <TitleText>{USER_INFO.ABOUT_ME_SECTION.TITLE}</TitleText>
            <ContentText style={{ whiteSpace: 'pre-line' }}>
              {USER_INFO.ABOUT_ME_SECTION.CONTENT}
            </ContentText>
          </ColumnContainer>
        </RowContainer>
      </ColumnContainer>
    </SectionContainer>
  )
}

export default AboutMeSection
