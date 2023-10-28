import {
  HeaderCustom,
  HeaderContainer,
  NavLinkWrapper,
  NavLinkContainer,
  NavLinkItem,
  RowContainer,
} from './Header.style'
import Link from 'next/link'
import { USER_INFO } from '@/constants'
import { theme } from '@/styles/theme/theme'
import useScroll from '@/hooks/useScroll'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import { Divider } from 'antd'

const Header = () => {
  const scrolled = useScroll(40)

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

          <RowContainer
            style={{ justifyContent: 'center', alignSelf: 'center' }}
          >
            <Divider
              style={{
                height: '2rem',
                backgroundColor: theme.colors.secondary,
              }}
              type={'vertical'}
            />
            <ThemeSwitcher />
          </RowContainer>
        </RowContainer>
      </HeaderContainer>
    </HeaderCustom>
  )
}

export default Header
