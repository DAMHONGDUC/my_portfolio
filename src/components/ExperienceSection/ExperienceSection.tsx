import { FC } from 'react'
import SectionContainer from '../Layout/Container/SectionContainer'
import { ColumnContainer } from './ExperienceSection.style'
import Tag from '../Tag/Tag'
import { USER_INFO } from '@/constants'
import { theme } from '../../styles/theme/theme'

interface IProps {}

const ExperienceSection: FC<IProps> = ({}) => {
  return (
    <SectionContainer
      id={USER_INFO.EXPERIENCE_SECTION.ID}
      style={{ backgroundColor: theme.colors.secondary }}
    >
      <ColumnContainer style={{ gap: '3rem' }}>
        <Tag title={USER_INFO.EXPERIENCE_SECTION.TAG} />
      </ColumnContainer>
    </SectionContainer>
  )
}

export default ExperienceSection
