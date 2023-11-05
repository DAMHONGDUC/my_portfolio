import React, { FC } from 'react'
import {
  ColumnContainer,
  MainContainer,
  RowContainer,
  ContentContainer,
  ContentText,
  DateText,
  CompanyNameText,
  TimeDetailText,
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

  const { summary, position, startDate, endDate, companyName, timeDetail } =
    data

  return (
    <MainContainer
      style={{
        width: windowWidth * (isMobile ? 0.9 : 0.6),
        marginBottom: isLast ? 0 : '2rem',
      }}
    >
      <RowContainer>
        {/* <CustomImage src={logo} alt={logoAlt} /> */}

        <ColumnContainer style={{ gap: '0.9rem', flex: 1 }}>
          <ColumnContainer>
            <TitleText>{position}</TitleText>
            <CompanyNameText>{companyName}</CompanyNameText>
            <TimeDetailText>{timeDetail}</TimeDetailText>
          </ColumnContainer>

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
