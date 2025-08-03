import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 18.5rem;
    padding-top: 2rem;
    background: ${({ theme }) => theme['base-profile']};
`
