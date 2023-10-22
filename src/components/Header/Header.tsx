import { HeaderCustom, HeaderContainer } from './Header.style'
import useScroll from '@/hooks/useScroll'

const Header = () => {
  const scrolled = useScroll(40)

  return (
    <HeaderCustom>
      <HeaderContainer>
        <label style={{ color: '#f00' }}>header</label>
      </HeaderContainer>
    </HeaderCustom>
  )
}

export default Header
