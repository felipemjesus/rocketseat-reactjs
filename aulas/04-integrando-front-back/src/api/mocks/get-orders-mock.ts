import { http, HttpResponse } from 'msw'
import type { GetOrdersResponse } from '../get-orders'

type Orders = GetOrdersResponse['orders']
type OrderStatus = GetOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = ['pending', 'canceled', 'processing', 'delivering', 'delivered']

const orders: Orders = Array.from({ length: 60 }, (_, index) => ({
  orderId: `order-id-${index + 1}`,
  customerName: `Customer ${index + 1}`,
  createdAt: new Date().toISOString(),
  status: statuses[index % statuses.length],
  total: Math.round(Math.random() * 1000)
}))

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)
    const pageIndex = Number(searchParams.get('pageIndex') ?? 0)
    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (orderId) {
      filteredOrders = filteredOrders.filter(order => order.orderId.includes(orderId))
    }

    if (customerName) {
      filteredOrders = filteredOrders.filter(order => order.customerName.includes(customerName))
    }

    if (status) {
      filteredOrders = filteredOrders.filter(order => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length
      }
    })
  }
)
