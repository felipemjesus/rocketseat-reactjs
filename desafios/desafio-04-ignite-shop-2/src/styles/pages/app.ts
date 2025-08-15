import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const Image = styled('img', {
  cursor: 'pointer'
})

export const CartButton = styled('button', {
  position: 'relative',
  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray700',
    transition: 'background-color 0.2s'
  },

  svg: {
    color: '$gray300'
  },

  span: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    borderRadius: '50%',

    backgroundColor: '$green500',
    color: '$white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontWeight: 'bold',
    fontSize: '0.875rem',
    lineHeight: '160%',

    pointerEvents: 'none'
  }
})
