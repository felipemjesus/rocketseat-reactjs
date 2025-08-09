import { http, HttpResponse } from 'msw'
import type { GetMonthRevenueResponse } from '../get-month-revenus'

export const getMonthRevenueMock = http.get<never, never, GetMonthRevenueResponse>(
  '/metrics/month-receipt',
  async () => {
    return HttpResponse.json({
      receipt: 5000,
      diffFromLastMonth: 5,
    })
  }
)
