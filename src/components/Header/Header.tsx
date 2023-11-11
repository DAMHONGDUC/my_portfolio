import {
  HeaderCustom,
  HeaderContainer,
  NavLinkWrapper,
  NavLinkContainer,
  NavLinkText,
  RowContainer,
  DownloadCVButton,
} from './Header.style'
import { USER_INFO } from '@/constants'
import { theme } from '@/styles/theme/theme'
import useScroll from '@/hooks/useScroll'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import { Divider } from 'antd'
import Link from 'next/link'

const Header = () => {
  const scrolled = useScroll(40)

  const handleDownloadCV = () => {
    window?.open(USER_INFO.NAV_BAR.DOWNLOAD_CV.file, '_blank')
  }

  return (
    <HeaderCustom scrolled={scrolled}>
      <HeaderContainer>
        <Link href={'/'}>
          <NavLinkText style={{ fontSize: theme.fontSize.h1 }}>
            {USER_INFO.NAV_BAR.LOGO}
          </NavLinkText>
        </Link>
        <RowContainer>
          <NavLinkWrapper>
            <NavLinkContainer>
              {USER_INFO.NAV_BAR.NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <NavLinkText>{link.label}</NavLinkText>
                  </Link>
                </li>
              ))}
            </NavLinkContainer>
          </NavLinkWrapper>

          <Divider
            style={{
              height: '2rem',
              backgroundColor: theme.colors.secondary,
            }}
            type={'vertical'}
          />
          <RowContainer
            style={{
              gap: '0.5rem',
            }}
          >
            <ThemeSwitcher />
            <DownloadCVButton onClick={handleDownloadCV}>
              {USER_INFO.NAV_BAR.DOWNLOAD_CV.title}
            </DownloadCVButton>
          </RowContainer>
        </RowContainer>
      </HeaderContainer>
    </HeaderCustom>
  )
}

export default Header
