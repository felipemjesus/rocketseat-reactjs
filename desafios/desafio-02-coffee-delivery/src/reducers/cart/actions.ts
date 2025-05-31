import type { CartState, Coffee } from './reducer'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  // eslint-disable-next-line no-unused-vars
  ADD_NEW_ADDRESS = 'ADD_NEW_ADDRESS',
  // eslint-disable-next-line no-unused-vars
  ADD_NEW_PAYMENT = 'ADD_NEW_PAYMENT',
}

export function addNewCoffeeAction(newCooffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCooffee,
    },
  }
}

export function addNewAddressAction(newAddress: CartState['endereco']) {
  return {
    type: ActionTypes.ADD_NEW_ADDRESS,
    payload: {
      newAddress,
    },
  }
}

export function addNewPaymentAction(newPayment: CartState['pagamento']) {
  return {
    type: ActionTypes.ADD_NEW_PAYMENT,
    payload: {
      newPayment,
    },
  }
}
