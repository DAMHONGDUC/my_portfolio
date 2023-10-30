import { FC } from 'react'
import SectionContainer from '../Layout/Container/SectionContainer'
import { ColumnContainer } from './ExperienceSection.style'
import Tag from '../Tag/Tag'
import { USER_INFO } from '@/constants'
import { theme } from '../../styles/theme/theme'
import ExperienceCard from '../ExperienceCard/ExperienceCard'

interface IProps {}

const ExperienceSection: FC<IProps> = ({}) => {
  return (
    <SectionContainer
      id={USER_INFO.EXPERIENCE_SECTION.ID}
      style={{ backgroundColor: theme.colors.secondary }}
    >
      <ColumnContainer style={{ gap: '3rem' }}>
        <Tag title={USER_INFO.EXPERIENCE_SECTION.TAG} />

        <ColumnContainer style={{ alignItems: 'center' }}>
          {USER_INFO.EXPERIENCE_SECTION.EXPERIENCES.map((e, index) => (
            <ExperienceCard
              data={e}
              key={index}
              isLast={
                index === USER_INFO.EXPERIENCE_SECTION.EXPERIENCES.length - 1
              }
            />
          ))}
        </ColumnContainer>
      </ColumnContainer>
    </SectionContainer>
  )
}

export default ExperienceSection
