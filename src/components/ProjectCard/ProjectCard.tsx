import React, { FC } from 'react'
import {
  ImageCustom,
  RowContainer,
  ImageContainer,
  ContentContainer,
  TechContainer,
  ColumnContainer,
  LinkContainer,
  ButtonCustom,
} from './ProjectCard.style'
import { useWindowSize } from '@/hooks/useWindowSize'
import { ContentText, TitleText } from '../Layout/Text/general'
import { IProjectDetails } from '@/interfaces/i-project-detail'
import Tag from '../Tag/Tag'
import { TagType } from '@/constants'
import { Button } from 'antd'
import { openURLInNewTab } from '@/utils'

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
        <ColumnContainer>
          <TitleText>{data.name}</TitleText>
          <ContentText>{data.description}</ContentText>
          <TechContainer>
            {data.technologies.map((tech, index) => (
              <Tag key={index} title={tech} type={TagType.CONTENT} />
            ))}
          </TechContainer>
        </ColumnContainer>

        <LinkContainer>
          <ButtonCustom
            type='link'
            onClick={() => openURLInNewTab(data.source)}
          >
            Source
          </ButtonCustom>
          <ButtonCustom type='link' onClick={() => openURLInNewTab(data.demo)}>
            Demo
          </ButtonCustom>
        </LinkContainer>
      </ContentContainer>
    </RowContainer>
  )
}

export default ProjectCard
