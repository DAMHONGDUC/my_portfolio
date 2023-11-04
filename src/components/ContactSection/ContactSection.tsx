import SectionContainer from '../Layout/Container/SectionContainer'
import { FC } from 'react'
import { theme } from '../../styles/theme/theme'
import {
  ColumnContainer,
  RowContainer,
  CustomButton,
} from './ContactSection.style'
import { USER_INFO } from '@/constants'
import Tag from '../Tag/Tag'
import { ContentText, TitleText } from '../Layout/Text/general'
import { Mail, Copy, Phone } from 'lucide-react'
import { handleCopyToClipboard } from '@/utils'
import { ToastContainer } from 'react-toastify'

interface IProps {}

const ContactSection: FC<IProps> = ({}) => {
  const ContactInfoRow = ({
    content,
    icon,
  }: {
    content: string
    icon: React.ReactNode
  }) => {
    return (
      <RowContainer>
        {icon}
        <TitleText>{content}</TitleText>
        <CustomButton
          type='text'
          onClick={() => handleCopyToClipboard(content)}
        >
          <Copy size={32} />
        </CustomButton>
      </RowContainer>
    )
  }

  return (
    <SectionContainer
      style={{ backgroundColor: theme.colors.secondary }}
      id={USER_INFO.CONTACT_SECTION.ID}
    >
      <ColumnContainer>
        <Tag title={USER_INFO.CONTACT_SECTION.TAG} />{' '}
        <ContentText
          style={{
            maxWidth: '30rem',
            textAlign: 'center',
          }}
        >
          {USER_INFO.CONTACT_SECTION.TITLE}
        </ContentText>
        <ColumnContainer style={{ alignItems: 'flex-start', gap: '0.5rem' }}>
          <ContactInfoRow
            content={USER_INFO.CONTACT_SECTION.EMAIL}
            icon={<Mail size={32} />}
          />
          <ContactInfoRow
            content={USER_INFO.CONTACT_SECTION.PHONE}
            icon={<Phone size={32} />}
          />
        </ColumnContainer>
      </ColumnContainer>
      <ToastContainer />
    </SectionContainer>
  )
}

export default ContactSection
