import styled from 'styled-components'
import { Typography } from 'antd'
import { theme } from '../../styles/theme/theme'

const { Text } = Typography

export const CustomText = styled(Text)`
  background-color: ${theme.colors.grey200};
  padding: 0.7rem 1rem;
  border-radius: 0.9rem;
  font-size: ${theme.fontSize.h6}px;
  color: ${theme.colors.text.color0};
`

export const TagContainer = styled.div`
  align-self: center;
`
