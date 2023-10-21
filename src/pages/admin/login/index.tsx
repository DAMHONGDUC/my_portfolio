import LoginForm from '@/components/LoginForm'
import Image from 'next/image'
import {
  AdminLoginBackground,
  AdminLoginContainer,
  AdminLoginLogo,
  AdminLoginWrapper,
} from './Login.style'
import { DEFAULT_ALT_IMG } from '@/constants'

const AdminLoginPage = () => {
  return (
    <AdminLoginWrapper>
      <AdminLoginContainer>
        <AdminLoginLogo>
          <Image
            alt={DEFAULT_ALT_IMG}
            width={233}
            height={71}
            src={'/images/logo-1.jpg'}
          />
          <Image
            alt={DEFAULT_ALT_IMG}
            width={288}
            height={60}
            src={'/images/logo-2.jpg'}
          />
        </AdminLoginLogo>
        <LoginForm />
      </AdminLoginContainer>
      <AdminLoginBackground>
        <img
          alt={DEFAULT_ALT_IMG}
          width='100%'
          srcSet={'/images/login-bg.jpg'}
        />
      </AdminLoginBackground>
    </AdminLoginWrapper>
  )
}

export default AdminLoginPage
