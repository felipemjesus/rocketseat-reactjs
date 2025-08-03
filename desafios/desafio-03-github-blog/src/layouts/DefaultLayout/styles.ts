import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${({ theme }) => theme['base-background']};
`

export const MainContainer = styled.main`
  max-width: 74rem;
  margin: 0 auto;
  padding: 2.5rem;

  background: ${({ theme }) => theme['base-background']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
