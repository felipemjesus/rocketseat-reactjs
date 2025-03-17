import styled from "styled-components"

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
    variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin: 5px;

    background-color: ${({ theme }) => theme['green-500']};
    color: ${({ theme }) => theme.white};
`
