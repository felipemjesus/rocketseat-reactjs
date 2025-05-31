import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illutration from '../../assets/illustration.svg'
import './styles.css'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Success() {
  const { endereco, pagamento } = useContext(CoffeeContext)

  const formattedAddress = `${endereco.rua}, ${endereco.numero}`
  const formattedCity = `${endereco.bairro} - ${endereco.cidade}, ${endereco.uf}`

  const formattedPayment = pagamento === 'credito'
    ? 'Cartão de crédito'
    : pagamento === 'debito'
      ? 'Cartão de débito'
      : 'Dinheiro'

  return (
    <div className="success">
      <div className="success-title">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <div className="content">
        <div className="success-content">
          <div className="success-content-info">
            <div className="success-content-item">
              <div className="icon-container icon-map">
                <MapPin weight="fill" />
              </div>
              <div className="text-container">
                <p>Entrega em <span>Rua {formattedAddress}</span></p>
                <p>{formattedCity}</p>
              </div>
            </div>

            <div className="success-content-item">
              <div className="icon-container icon-timer">
                <Timer weight="fill" />
              </div>
              <div className="text-container">
                <p>Previsão de entrega</p>
                <p><span>20 min - 30 min</span></p>
              </div>
            </div>

            <div className="success-content-item">
              <div className="icon-container icon-dollar">
                <CurrencyDollar />
              </div>
              <div className="text-container">
                <p>Pagamento na entrega</p>
                <p><span>{formattedPayment}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="success-image">
          <img src={illutration} alt="illutration" />
        </div>
      </div>
    </div>
  )
}
