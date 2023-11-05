import styled from 'styled-components'

export const ColumnContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
`
export const SkillContainer = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  row-gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 1rem;
  }
`
