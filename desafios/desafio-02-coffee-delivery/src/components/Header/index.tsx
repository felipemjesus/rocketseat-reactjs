import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import './styles.css'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { quantityItems } = useContext(CoffeeContext)

  return (
    <header>
      <img src={logo} alt="" />
      <div className="actions">
        <button className="location">
          <MapPin weight="fill" />
          <span className="location-text">Porto Alegre, RS</span>
        </button>
        <button
          className="cart"
        >
          <ShoppingCart weight="fill" />
          <span className="cart-count">{quantityItems || 0}</span>
        </button>
      </div>
    </header>
  )
}
