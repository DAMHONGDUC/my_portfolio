import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 2rem;
  justify-content: center;
  max-width: 48rem;

  @media (min-width: 768px) {
    order: -9999;
    justify-content: center;
    align-items: flex-start;
  }

  @media (min-width: 1536px) {
  }
`
