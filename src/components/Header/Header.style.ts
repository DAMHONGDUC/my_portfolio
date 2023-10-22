import styled from 'styled-components'

export const HeaderCustom = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  border-bottom-width: 1px;
  border-color: transparent;
  width: 100%;
`
export const HeaderContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 80rem;

  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`
