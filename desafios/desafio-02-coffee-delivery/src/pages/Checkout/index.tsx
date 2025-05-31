import { Dados } from './components/Dados'
import { Itens } from './components/Itens'
import './styles.css'

export function Checkout() {
  return (
    <div className="checkout">
      <Dados />
      <Itens />
    </div>
  )
}
