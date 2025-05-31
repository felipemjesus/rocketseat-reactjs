import './styles.css'

export function Dados() {
  return (
    <form className="dados">
      <h2>Complete seu pedido</h2>

      <div className="endereco">
        <h3>Endereço de Entrega</h3>
        <p>Informe o endereço onde deseja receber seu pedido</p>

        <div className="input-group">
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </div>

      </div>

      <div className="pagamento">
        <h3>Pagamento</h3>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        <div className="input-group">
          <input type="text" placeholder="Cartão de Credito" />
          <input type="text" placeholder="Cartão de Debito" />
          <input type="text" placeholder="Dinheiro" />
        </div>
      </div>
    </form>
  )
}
