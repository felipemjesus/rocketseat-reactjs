import { http, HttpResponse } from 'msw'
import type { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<never, never, GetPopularProductsResponse>(
  '/metrics/popular-products',
  async () => {
    return HttpResponse.json([
      {
        product: 'Pizza',
        amount: 10,
      },
      {
        product: 'Salad',
        amount: 40,
      },
      {
        product: 'Burger',
        amount: 20,
      },
      {
        product: 'Sushi',
        amount: 50,
      },
      {
        product: 'Pasta',
        amount: 30,
      },
    ])
  }
)
