import { HeaderCustom, HeaderContainer } from './Header.style'
import Link from 'next/link'
import { Typography } from 'antd'

const { Text } = Typography

const Header = () => {
  const Logo = () => <Text style={{ color: '#f00' }}>{'<SS />'}</Text>

  return (
    <HeaderCustom>
      <HeaderContainer>
        <Link href='/'>
          <Logo />
        </Link>
      </HeaderContainer>
    </HeaderCustom>
  )
}

export default Header
