import { FC } from 'react'
import SectionContainer from '../Layout/Container/SectionContainer'
import { ColumnContainer, SkillContainer } from './SkillSection.style'
import Tag from '../Tag/Tag'
import { USER_INFO } from '@/constants'
import TechDetails from '../TechDetails/TechDetails'

interface IProps {}

const SkillSection: FC<IProps> = ({}) => {
  return (
    <SectionContainer id={USER_INFO.SKILL_SECTION.ID}>
      <ColumnContainer>
        <Tag title={USER_INFO.SKILL_SECTION.TAG} />

        <SkillContainer>
          {USER_INFO.SKILL_SECTION.SKILLS.map((technology, index) => (
            <TechDetails {...technology} key={index} />
          ))}
        </SkillContainer>
      </ColumnContainer>
    </SectionContainer>
  )
}

export default SkillSection
