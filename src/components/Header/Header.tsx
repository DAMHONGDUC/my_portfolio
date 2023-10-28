import {
  HeaderCustom,
  HeaderContainer,
  NavLinkWrapper,
  NavLinkContainer,
  NavLinkItem,
  RowContainer,
  DownloadCVButton,
  DownLoadCVText,
} from './Header.style'
import Link from 'next/link'
import { USER_INFO } from '@/constants'
import { theme } from '@/styles/theme/theme'
import useScroll from '@/hooks/useScroll'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import { Divider } from 'antd'

const Header = () => {
  const scrolled = useScroll(40)

  const handleDownloadCV = () => {}

  return (
    <HeaderCustom scrolled={scrolled}>
      <HeaderContainer>
        <Link href='/'>
          <NavLinkItem style={{ fontSize: theme.fontSize.h1 }}>
            {USER_INFO.NAV_BAR.LOGO}
          </NavLinkItem>
        </Link>
        <RowContainer>
          <NavLinkWrapper>
            <NavLinkContainer>
              {USER_INFO.NAV_BAR.NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <NavLinkItem>{link.label}</NavLinkItem>
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
              Download CV
            </DownloadCVButton>
          </RowContainer>
        </RowContainer>
      </HeaderContainer>
    </HeaderCustom>
  )
}

export default Header
