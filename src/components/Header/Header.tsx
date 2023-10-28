import {
  HeaderCustom,
  HeaderContainer,
  NavLinkWrapper,
  NavLinkContainer,
  NavLinkItem,
} from './Header.style'
import Link from 'next/link'
import { USER_INFO } from '@/constants'
import { theme } from '@/styles/theme/theme'
import useScroll from '@/hooks/useScroll'

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
      </HeaderContainer>
    </HeaderCustom>
  )
}

export default Header
