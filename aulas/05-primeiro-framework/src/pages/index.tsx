import { styled } from "@/styles";

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 0,
  padding: '1rem 2rem',

  span: {
    color: '#fff',
    marginLeft: '0.5rem'
  },

  '&:hover': {
    filter: 'brightness(0.9)'
  }
})

export default function Home() {
  return (
    <Button>
      Enviar
      <span>teste</span>
    </Button>
  );
}
