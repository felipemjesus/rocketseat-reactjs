import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introImage from '../../../../assets/intro-image.svg'
import './styles.css'

export function Intro() {
  return (
    <div className="intro">
      <div className="intro-text">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver,
          a qualquer hora do dia
        </p>
        <ul className="intro-list">
          <li>
            <span className="icon-shopping-cart">
              <ShoppingCart weight="fill" />
            </span>
            Compra simples e segura
          </li>
          <li>
            <span className="icon-package">
              <Package weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </li>
          <li>
            <span className="icon-timer">
              <Timer weight="fill" />
            </span>
            Entrega rápida e rastreada
          </li>
          <li>
            <span className="icon-coffee">
              <Coffee weight="fill" />
            </span>
            O café chega fresquinho até você
          </li>
        </ul>
      </div>
      <div className="intro-image">
        <img src={introImage} alt="Cafés variados" />
      </div>
    </div>
  )
}
