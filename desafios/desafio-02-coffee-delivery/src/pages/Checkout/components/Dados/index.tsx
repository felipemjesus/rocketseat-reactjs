import { useContext } from 'react'
import './styles.css'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'

export function Dados() {
  const {
    endereco,
    pagamento,
    addNewAddress,
    addNewPayment,
  } = useContext(CoffeeContext)

  const isPaymentSelected = (type: string) => {
    return pagamento === type
      ? 'selected'
      : ''
  }

  return (
    <form className="dados">
      <h2>Complete seu pedido</h2>

      <div className="endereco">
        <h3>
          <MapPinLine />
          Endereço de Entrega
        </h3>
        <p>Informe o endereço onde deseja receber seu pedido</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="CEP"
            value={endereco.cep}
            onChange={(e) => addNewAddress({
              ...endereco,
              cep: e.target.value,
            })}
          />
          <input
            type="text"
            placeholder="Rua"
            value={endereco.rua}
            onChange={(e) => addNewAddress({
              ...endereco,
              rua: e.target.value,
            })}
          />
          <input
            type="text"
            placeholder="Número"
            value={endereco.numero}
            onChange={(e) => addNewAddress({
              ...endereco,
              numero: e.target.value,
            })}
          />
          <input
            type="text"
            placeholder="Complemento"
            value={endereco.complemento}
            onChange={(e) => addNewAddress({
              ...endereco,
              complemento: e.target.value,
            })}
          />
          <input
            type="text"
            placeholder="Bairro"
            value={endereco.bairro}
            onChange={(e) => addNewAddress({
              ...endereco,
              bairro: e.target.value,
            })}
          />
          <input
            type="text"
            placeholder="Cidade"
            value={endereco.cidade}
            onChange={(e) => addNewAddress({
              ...endereco,
              cidade: e.target.value,
            })}
          />
          <input
            type="text"
            placeholder="UF"
            value={endereco.uf}
            onChange={(e) => addNewAddress({
              ...endereco,
              uf: e.target.value,
            })}
          />
        </div>

      </div>

      <div className="pagamento">
        <h3>
          <CurrencyDollar />
          Pagamento
        </h3>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        <div className="input-group">
          <button
            type="button"
            className={`payment-option ${isPaymentSelected('credito')}`}
            onClick={() => addNewPayment('credito')}
          >
            <CreditCard />
            Cartão de Crédito
          </button>
          <button
            type="button"
            className={`payment-option ${isPaymentSelected('debito')}`}
            onClick={() => addNewPayment('debito')}
          >
            <Bank />
            Cartão de Débito
          </button>
          <button
            type="button"
            className={`payment-option ${isPaymentSelected('dinheiro')}`}
            onClick={() => addNewPayment('dinheiro')}
          >
            <Money />
            Dinheiro
          </button>
        </div>
      </div>
    </form>
  )
}
