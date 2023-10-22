import styled from 'styled-components'
import { theme } from '../../styles/theme/theme'

export const ActiveIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.5rem;
  height: 1.5rem;
`
export const ActiveIconContainer = styled.div`
  display: flex;
  position: relative;

  width: 0.75rem;
  height: 0.75rem;
`

export const CustomDot = styled.span`
  display: inline-flex;
  position: absolute;

  border-radius: 9999px;
  width: 100%;
  height: 100%;

  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  background-color: ${theme.colors.success};

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  opacity: 0.75;
`

export const CustomDot2 = styled.span`
  display: inline-flex;
  position: relative;

  border-radius: 9999px;
  width: 0.75rem;
  height: 0.75rem;

  background-color: ${theme.colors.success};
`
