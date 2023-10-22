import styled from 'styled-components'
import { Typography } from 'antd'

const { Text } = Typography

export const Container = styled.div`
  display: flex;
  gap: 3rem;

  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  flex-grow: 1;
  gap: 2rem;
  max-width: 48rem;
`

export const ColumnContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 1rem;
`

export const RowContainer = styled.div`
  flex-direction: row;
  display: flex;
  gap: 0.5rem;
`

export const MainTitle = styled(Text)`
  font-weight: 700;
  font-size: 3rem;
  line-height: 1;
`
export const SubTitle = styled(Text)`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  text-align: justify;
  margin: 0px 0px 0px 3px;
`

export const WavingSpan = styled.span`
  margin: 0px 0px 0px 1rem;
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: 2; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
`
