import { createContext, useReducer, type ReactNode } from 'react'
import {
  cartReducer,
  type CartState,
  type Coffee,
} from '../reducers/cart/reducer'
import {
  addNewAddressAction,
  addNewCoffeeAction,
  addNewPaymentAction,
} from '../reducers/cart/actions'

interface CoffeeContextType {
  coffees: Coffee[]
  items: CartState['items']
  endereco: CartState['endereco']
  pagamento: CartState['pagamento']
  quantityItems: CartState['quantityItems']
  addNewCoffee: (coffee: Coffee) => void
  addNewAddress: (newAddress: CartState['endereco']) => void
  addNewPayment: (newPayment: CartState['pagamento']) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const coffees: Coffee[] = [
    {
      id: 'expresso-tradicional',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      quantity: 0,
      tags: ['Tradicional'],
    },
    {
      id: 'expresso-americano',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      quantity: 0,
      tags: ['Tradicional'],
    },
    {
      id: 'expresso-cremoso',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      quantity: 0,
      tags: ['Tradicional'],
    },
    {
      id: 'expresso-gelado',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      quantity: 0,
      tags: ['Tradicional', 'Gelado'],
    },
    {
      id: 'cafe-com-leite',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      quantity: 0,
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'latte',
      name: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      quantity: 0,
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'capuccino',
      name: 'Capuccino',
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      quantity: 0,
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'macchiato',
      name: 'Macchiato',
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      quantity: 0,
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'mocaccino',
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      quantity: 0,
      tags: ['Tradicional', 'Com Leite'],
    },
    {
      id: 'chocolate-quente',
      name: 'Chocolate Quente',
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      quantity: 0,
      tags: ['Especial', 'Com Leite'],
    },
    {
      id: 'cubano',
      name: 'Cubano',
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      quantity: 0,
      tags: ['Especial', 'Alcoólico', 'Gelado'],
    },
    {
      id: 'havaiano',
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      quantity: 0,
      tags: ['Especial'],
    },
    {
      id: 'arabe',
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      quantity: 0,
      tags: ['Especial'],
    },
    {
      id: 'irlandes',
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      quantity: 0,
      tags: ['Especial', 'Alcoólico'],
    },
  ]

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
      endereco: {
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
      },
      pagamento: 'credito',
      quantityItems: 0,
    },
  )

  const { items, endereco, pagamento, quantityItems } = cartState

  function addNewCoffee(coffee: Coffee) {
    dispatch(addNewCoffeeAction(coffee))
  }

  function addNewAddress(newAddress: CartState['endereco']) {
    dispatch(addNewAddressAction(newAddress))
  }

  function addNewPayment(newPayment: CartState['pagamento']) {
    dispatch(addNewPaymentAction(newPayment))
  }

  const values = {
    coffees,
    items,
    endereco,
    pagamento,
    quantityItems,
    addNewCoffee,
    addNewAddress,
    addNewPayment,
  }

  return (
    <CoffeeContext.Provider value={values}>
      {children}
    </CoffeeContext.Provider>
  )
}
