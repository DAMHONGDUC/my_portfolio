import { Spin } from 'antd'
import { LoadingStyled } from './Loading.style'

const Loading = () => {
  return (
    <LoadingStyled>
      <Spin size='large' />
    </LoadingStyled>
  )
}

export default Loading
