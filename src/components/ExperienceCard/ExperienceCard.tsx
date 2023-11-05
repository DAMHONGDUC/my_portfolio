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
import { IExperienceDetails } from '@/interfaces/i-experienceDetails'
import { isMobile } from 'react-device-detect'

interface IProps {
  data: IExperienceDetails
  isLast: boolean
}

const ExperienceCard: FC<IProps> = ({ data, isLast }) => {
  const { windowWidth } = useWindowSize()

  const { logo, summary, logoAlt, position, startDate, endDate } = data

  return (
    <MainContainer
      style={{
        width: windowWidth * (isMobile ? 0.9 : 0.6),
        marginBottom: isLast ? 0 : '2rem',
      }}
    >
      <RowContainer>
        <CustomImage src={logo} alt={logoAlt} />

        <ColumnContainer style={{ gap: '0.7rem', flex: 1 }}>
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
