import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import './styles.css'

export function Header() {
  return (
    <header>
      <img src={logo} alt="" />
      <div className="actions">
        <button className="location">
          <MapPin weight="fill" />
          <span className="location-text">Porto Alegre, RS</span>
        </button>
        <button className="cart">
          <ShoppingCart weight="fill" />
          <span className="cart-count">0</span>
        </button>
      </div>
    </header>
  )
}
