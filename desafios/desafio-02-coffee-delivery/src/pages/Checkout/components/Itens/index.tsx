import { Trash } from 'phosphor-react'
import './styles.css'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { DynamicImage } from '../../../../components/DynamicImage'
import type { Coffee } from '../../../../reducers/cart/reducer'
import { useNavigate } from 'react-router-dom'

export function Itens() {
  const navigate = useNavigate()

  const { items } = useContext(CoffeeContext)

  const totalUnit = (item: Coffee) => item.price * item.quantity

  const totalItems = items.reduce((acc, item) => acc + totalUnit(item), 0)
  const deliveryFee = 3.50
  const total = totalItems + deliveryFee
  const formattedTotalItems = totalItems.toFixed(2).replace('.', ',')
  const formattedDeliveryFee = deliveryFee.toFixed(2).replace('.', ',')
  const formattedTotal = total.toFixed(2).replace('.', ',')

  return (
    <div className="itens">
      <h2>Cafés selecionados</h2>
      <div className="itens-list">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <div className="item-img">
              <DynamicImage src={`${item.id}.svg`} alt={item.name} />
            </div>
            <div className="item-details">
              <div className="item-title">
                <span>{item.name}</span>
                <span>R$ {totalUnit(item).toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="item-form">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="quantity"
                  value={item.quantity}
                  onChange={(e) => {
                    let value = parseInt(e.target.value, 10)
                    if (value < 1) {
                      value = 1
                      e.target.value = '1'
                    }
                  }}
                />
                <button className="remove-item">
                  <Trash size={16} />
                  <span>Remover</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total de itens</span>
          <span>R$ {formattedTotalItems}</span>
        </div>
        <div className="total">
          <span>Entrega</span>
          <span>R$ {formattedDeliveryFee}</span>
        </div>
        <div className="total total-final">
          <span>Total</span>
          <span>R$ {formattedTotal}</span>
        </div>
        <div className="confirmar">
          <button
            onClick={() => { navigate('/success') }}
          >
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  )
}
