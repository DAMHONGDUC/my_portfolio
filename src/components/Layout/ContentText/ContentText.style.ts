import styled from 'styled-components'
import { theme } from '../../../styles/theme/theme'
import { Typography } from 'antd'

const { Text } = Typography

export const ContentText = styled(Text)`
  color: ${theme.colors.text.color1};
  font-size: ${theme.fontSize.h5}px;
  font-weight: 400;
  text-align: justify;
`
