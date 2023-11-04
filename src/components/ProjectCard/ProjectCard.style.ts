import Image from 'next/image'
import styled from 'styled-components'
import { theme } from '../../styles/theme/theme'

export const RowContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  box-shadow: 0 4px 6px -1px ${theme.colors.card.boxShadow1};
  border-radius: 0.75rem;
`

export const ImageContainer = styled.div`
  background-color: ${theme.colors.secondary};
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`

export const ImageCustom = styled(Image)`
  width: 25rem;
  height: 20rem;
  border-radius: 0.75rem;
  margin: 2rem;
  object-fit: cover;

  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const ContentContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  gap: 1rem;
`

export const TechContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`
