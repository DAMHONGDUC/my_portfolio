import { FC } from 'react'
import { TechDetailContainer, CustomImage } from './TechDetails.style'
import { ITechDetails } from '@/interfaces/i-techDetails'
import { ContentText } from '../Layout/Text/general'
import { openURLInNewTab } from '@/utils'

const TechDetails: FC<ITechDetails> = ({ logo, url, label }) => {
  return (
    <TechDetailContainer>
      <CustomImage
        onClick={() => openURLInNewTab(url)}
        src={logo}
        alt={label}
      />
      <ContentText>{label}</ContentText>
    </TechDetailContainer>
  )
}

export default TechDetails
