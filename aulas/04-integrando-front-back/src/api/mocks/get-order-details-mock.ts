import { http, HttpResponse } from 'msw'
import type { GetOrderDetailsParams, GetOrderDetailsResponse } from '../get-order-datails'

export const getOrderDetailsMock = http.get<GetOrderDetailsParams, never, GetOrderDetailsResponse>(
  '/orders/:orderId',
  async ({ params }) => {
    return HttpResponse.json({
      id: params.orderId,
      customer: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: null
      },
      status: 'pending',
      createdAt: new Date().toISOString(),
      totalInCents: 6500,
      orderItems: [
        {
          id: 'custom-order-item-id-1',
          priceInCents: 5500,
          quantity: 1,
          product: {
            name: 'Pizza'
          }
        },
        {
          id: 'custom-order-item-id-2',
          priceInCents: 1000,
          quantity: 1,
          product: {
            name: 'Refrigerante'
          }
        }
      ]
    })
  }
)
