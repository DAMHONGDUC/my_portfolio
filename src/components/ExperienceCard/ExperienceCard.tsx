import React, { FC } from 'react'
import {
  ColumnContainer,
  MainContainer,
  RowContainer,
  CustomImage,
  ContentContainer,
  ContentText,
  DateText,
} from './ExperienceCard.style'
import { TitleText } from '../Layout/Text/general'
import { useWindowSize } from '@/hooks/useWindowSize'
import { IExperienceDetails } from '@/interfaces/I-experienceDetails'
import { Divider } from 'antd'

const ExperienceCard: FC<IExperienceDetails> = ({
  logo,
  summary,
  logoAlt,
  position,
  startDate,
  endDate,
}) => {
  const { windowWidth } = useWindowSize()

  return (
    <MainContainer>
      <RowContainer>
        <CustomImage
          style={{ width: windowWidth / 6 }}
          src={logo}
          alt={logoAlt}
        />

        <ColumnContainer style={{ width: windowWidth / 3, gap: '0.7rem' }}>
          <TitleText>{position}</TitleText>
          <ContentContainer>
            {summary.map((e, index) => (
              <ContentText key={index}>{e}</ContentText>
            ))}
          </ContentContainer>
        </ColumnContainer>

        <DateText>{startDate + ' - ' + endDate}</DateText>
      </RowContainer>
    </MainContainer>
  )
}

export default ExperienceCard
