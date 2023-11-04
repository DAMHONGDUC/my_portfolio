import React, { FC } from 'react'
import {
  ImageCustom,
  RowContainer,
  ImageContainer,
  ContentContainer,
  TechContainer,
} from './ProjectCard.style'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ContentText, TitleText } from '../Layout/Text/general'
import { IProjectDetails } from '@/interfaces/i-project-detail'
import Tag from '../Tag/Tag'
import { TagType } from '@/constants'

interface IProps {
  data: IProjectDetails
}

const ProjectCard: FC<IProps> = ({ data }) => {
  const { windowWidth } = useWindowSize()

  return (
    <RowContainer style={{ width: windowWidth * 0.7 }}>
      <ImageContainer>
        <ImageCustom src={data.previewImage} alt={data.name}></ImageCustom>
      </ImageContainer>

      <ContentContainer>
        <TitleText>{data.name}</TitleText>
        <ContentText>{data.description}</ContentText>
        <TechContainer>
          {data.technologies.map((tech, index) => (
            <Tag key={index} title={tech} type={TagType.CONTENT} />
          ))}
        </TechContainer>
      </ContentContainer>
    </RowContainer>
  )
}

export default ProjectCard
