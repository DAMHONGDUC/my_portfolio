import { LOGIN_MUTATION } from '@/graphql/mutation'
import { useMutation } from '@apollo/client'
import { Button, Form, Input, message } from 'antd'
import * as Styled from './LoginForm.style'
import { OtherUtil } from '@/utils'
import { loginAdminSuccess } from '@/features/admin'
import { useAppDispatch } from '@/store/hook'
import { useRouter } from 'next/router'

type FormLoginType = {
  email: string
  password: string
}

const LoginForm = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION)
  const [form] = Form.useForm()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const onLogin = async (values: FormLoginType) => {
    try {
      const res = await loginMutation({
        variables: {
          email: values.email,
          password: values.password,
        },
      })
      if (res.data) {
        dispatch(
          loginAdminSuccess({
            adminInfo: {
              ...res.data.login,
            },
          }),
        )
        message.success('Đăng nhập thành công')
        await router.push('/admin')
      }
    } catch (error) {
      message.error('Đăng nhập thất bại')
      console.log(error)
    }
  }

  return (
    <Styled.LoginFormWrapper>
      <Styled.FormLogin
        layout='vertical'
        onFinish={(val) =>
          OtherUtil.loadCallback(onLogin, val as FormLoginType)
        }
        onFinishFailed={() => {}}
        autoComplete='off'
        form={form}
        validateTrigger={['onSubmit', 'onBlur', 'onChange']}
      >
        <Styled.FormHeader>
          <Styled.FormTitle>Forstand Login</Styled.FormTitle>
          <Styled.FormDescription>description</Styled.FormDescription>
        </Styled.FormHeader>
        <Styled.FormInput>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Email is required',
              },
              {
                type: 'email',
                message: 'Email is not correct',
              },
            ]}
          >
            <Input
              autoComplete='off'
              size='large'
              placeholder='example@gmail.com'
            />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            style={{ marginTop: '10px' }}
            rules={[
              {
                required: true,
                message: 'password is required',
              },
            ]}
          >
            <Input.Password
              autoComplete='off'
              placeholder='Enter at least 8+ character'
              size='large'
            />
          </Form.Item>
        </Styled.FormInput>
        <Form.Item>
          <Button htmlType='submit' type='primary'>
            Login
          </Button>
        </Form.Item>
      </Styled.FormLogin>
    </Styled.LoginFormWrapper>
  )
}

export default LoginForm
