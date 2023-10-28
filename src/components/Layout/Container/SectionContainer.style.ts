import styled from 'styled-components'
import { theme } from '../../../styles/theme/theme'

export const SectionCustom = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${theme.colors.primary};

  @media (max-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

export const MainContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 3rem;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 1.5rem;
  }
`
