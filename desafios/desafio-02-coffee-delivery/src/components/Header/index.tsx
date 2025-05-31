import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import './styles.css'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  const { quantityItems } = useContext(CoffeeContext)

  return (
    <header>
      <img
        className="logo"
        src={logo}
        alt="logo"
        onClick={() => navigate('/')}
      />
      <div className="actions">
        <button className="location">
          <MapPin weight="fill" />
          <span className="location-text">Porto Alegre, RS</span>
        </button>
        <button
          className="cart"
          onClick={() => navigate('/checkout')}
        >
          <ShoppingCart weight="fill" />
          <span className="cart-count">{quantityItems || 0}</span>
        </button>
      </div>
    </header>
  )
}
