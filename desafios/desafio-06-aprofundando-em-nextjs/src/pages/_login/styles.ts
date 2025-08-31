import { styled } from "@/styles";
import background from '../../assets/background.png'

export const LoginContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  minHeight: '100vh',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$8',

  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },

    // Gradiente sobre a imagem
  background: `$gradient-vertical, url(${background.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$8',
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',

  padding: '$8',
  background: '$gray800',

  borderRadius: '$md',
  border: '1px solid $gray600',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  input: {
    padding: '$3',
    background: '$gray900',
    border: '1px solid $gray600',
    borderRadius: '$sm',
    color: '$gray100',
  },

  button: {
    marginTop: '$4',
    padding: '$3',
    background: '$green500',
    border: '1px solid $green300',
    borderRadius: '$sm',
    color: '$white',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

})
