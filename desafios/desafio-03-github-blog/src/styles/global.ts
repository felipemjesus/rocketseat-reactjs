import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme['base-border']};
    }

    body {
        background: ${({ theme }) => theme['base-background']};
        color: ${({ theme }) => theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
