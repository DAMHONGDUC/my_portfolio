import { FC } from 'react'
import { TechDetailContainer, CustomImage } from './TechDetails.style'
import Link from 'next/link'
import { ITechDetails } from '@/interfaces/i-techDetails'
import { ContentText } from '../Layout/Text/general'

const TechDetails: FC<ITechDetails> = ({ logo, url, label }) => {
  return (
    <TechDetailContainer>
      <Link href={url}>
        <CustomImage src={logo} alt={label} />
      </Link>
      <ContentText>{label}</ContentText>
    </TechDetailContainer>
  )
}

export default TechDetails
