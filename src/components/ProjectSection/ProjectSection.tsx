import { FC } from 'react'
import SectionContainer from '../Layout/Container/SectionContainer'
import { ColumnContainer } from './ProjectSection.style'
import Tag from '../Tag/Tag'
import ProjectCard from '../ProjectCard/ProjectCard'
import { USER_INFO } from '@/constants'

interface IProps {}

const ProjectSection: FC<IProps> = ({}) => {
  return (
    <SectionContainer id={USER_INFO.PROJECT_SECTION.ID}>
      <ColumnContainer>
        <Tag title={USER_INFO.PROJECT_SECTION.TAG} />

        <ColumnContainer>
          {USER_INFO.PROJECT_SECTION.PROJECT_DETAIL.map((project, index) => (
            <ProjectCard data={project} key={index} />
          ))}
        </ColumnContainer>
      </ColumnContainer>
    </SectionContainer>
  )
}

export default ProjectSection
