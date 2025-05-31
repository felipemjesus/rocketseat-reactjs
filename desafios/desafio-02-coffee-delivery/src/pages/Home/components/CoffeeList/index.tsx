import { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import './styles.css'
import { DynamicImage } from '../../../../components/DynamicImage'
import { ShoppingCart } from 'phosphor-react'

export function CoffeeList() {
  const { coffees, addNewCoffee } = useContext(CoffeeContext)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="coffee-list">
      <h2>Nossos Cafés</h2>
      <div className="coffee-items">
        {coffees.map((coffee) => (
          <div className="coffee-item" key={coffee.id}>
            <DynamicImage
              src={`${coffee.id}.svg`}
              alt={coffee.name}
            />
            <div className="tags">
              {coffee.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
            <div className="footer">
              <span className="price">
                <span>R$</span> {coffee.price.toFixed(2).replace('.', ',')}
              </span>
              <div className="actions">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="quantity"
                  onChange={(e) => {
                    let value = parseInt(e.target.value, 10)
                    if (value < 1) {
                      value = 1
                      e.target.value = '1'
                    }
                    setQuantity(value)
                  }}
                />
                <button
                  onClick={() => {
                    coffee.quantity = quantity
                    addNewCoffee(coffee)
                    setQuantity(1)
                  }}
                >
                  <ShoppingCart weight="fill" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
