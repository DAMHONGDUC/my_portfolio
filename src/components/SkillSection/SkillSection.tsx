import { FC } from 'react'
import SectionContainer from '../Layout/Container/SectionContainer'
import { ColumnContainer } from './SkillSection.style'
import Tag from '../Tag/Tag'
import { USER_INFO } from '@/constants'

interface IProps {}

const SkillSection: FC<IProps> = ({}) => {
  return (
    <SectionContainer id={USER_INFO.SKILL_SECTION.ID}>
      <ColumnContainer>
        <Tag title={USER_INFO.SKILL_SECTION.TAG} />
      </ColumnContainer>
    </SectionContainer>
  )
}

export default SkillSection
