import { RowContainer, SocialButton } from './SocialLink.style'
import { ISocialLink } from '@/interfaces/i-socialLink'
import { USER_INFO } from '@/constants'
import { Github, Facebook, Instagram, Figma } from 'lucide-react'
import { theme } from '../../styles/theme/theme'
import { openURLInNewTab } from '@/utils'

const SOCIALS_LINK: ISocialLink[] = [
  {
    id: 1,
    key: 'Github',
    component: <Github color={theme.colors.black} size={24} />,
    url: USER_INFO.HERO_SECTION.SOCIAL.GITHUB,
  },
  {
    id: 2,
    key: 'Figma',
    component: <Figma color={theme.colors.black} size={24} />,
    url: USER_INFO.HERO_SECTION.SOCIAL.FIGMA,
  },
  {
    id: 3,
    key: 'Facebook',
    component: <Facebook color={theme.colors.black} size={24} />,
    url: USER_INFO.HERO_SECTION.SOCIAL.FACEBOOK,
  },
  {
    id: 4,
    key: 'Instagram',
    component: <Instagram color={theme.colors.black} size={24} />,
    url: USER_INFO.HERO_SECTION.SOCIAL.INSTAGRAM,
  },
]

const SocialLink = () => {
  return (
    <RowContainer style={{ gap: 24 }}>
      {SOCIALS_LINK.map((e) => (
        <SocialButton
          type='text'
          key={e.id}
          onClick={() => openURLInNewTab(e.url)}
          icon={e.component}
        />
      ))}
    </RowContainer>
  )
}

export default SocialLink
