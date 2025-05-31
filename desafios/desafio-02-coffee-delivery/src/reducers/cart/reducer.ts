import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  tags: string[]
}

export interface Address {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

export interface CartState {
  items: Coffee[],
  endereco: {
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
  },
  pagamento: 'credito' | 'debito' | 'dinheiro'
  quantityItems: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {
        const { newCooffee } = action.payload
        const existingCoffeeIndex = draft.items.findIndex(
          (coffee) => coffee.id === newCooffee.id,
        )
        if (existingCoffeeIndex >= 0) {
          draft.items[existingCoffeeIndex].quantity += newCooffee.quantity
        } else {
          draft.items.push(newCooffee)
        }
        draft.quantityItems = draft.items.reduce(
          (total, coffee) => total + coffee.quantity, 0,
        )
      })
    case ActionTypes.ADD_NEW_ADDRESS:
      return produce(state, (draft) => {
        const { newAddress } = action.payload
        draft.endereco = newAddress
      })
    case ActionTypes.ADD_NEW_PAYMENT:
      return produce(state, (draft) => {
        const { newPayment } = action.payload
        draft.pagamento = newPayment
      })
    default:
      return state
  }
}
