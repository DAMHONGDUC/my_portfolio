import styled from 'styled-components'
import { Button } from 'antd'

export const ColumnContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const RowContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`

export const CustomButton = styled(Button)`
  padding: 20px 4px;
  justify-content: center;
  align-items: center;
  display: flex;
`
