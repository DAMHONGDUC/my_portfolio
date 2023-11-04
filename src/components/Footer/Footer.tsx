import { FOOTER } from '@/constants'
import { ContentText, TitleText } from '../Layout/Text/general'
import SocialLink from '../SocialLink/SocialLink'
import { FooterCustom, FooterContainer, RowContainer } from './Footer.style'
import { Copyright } from 'lucide-react'

const Footer = () => {
  return (
    <FooterCustom>
      <FooterContainer>
        <TitleText>{FOOTER.title}</TitleText>
        <ContentText>{FOOTER.subTitle}</ContentText>
        <SocialLink />
        <RowContainer>
          <Copyright style={{ marginRight: '0.25rem' }} size={16} />
          <ContentText>{FOOTER.copyRight}</ContentText>
        </RowContainer>
      </FooterContainer>
    </FooterCustom>
  )
}

export default Footer
