import { http, HttpResponse } from 'msw'
import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<never, never, GetDailyRevenueInPeriodResponse>(
  '/metrics/daily-receipt-in-period',
  async () => {
    return HttpResponse.json([
      {
        date: '01/01/2023',
        receipt: 10,
      },
      {
        date: '01/03/2023',
        receipt: 30,
      },
      {
        date: '01/02/2023',
        receipt: 20,
      },
      {
        date: '01/05/2023',
        receipt: 50,
      },
      {
        date: '01/04/2023',
        receipt: 40,
      },
      {
        date: '01/07/2023',
        receipt: 70,
      },
      {
        date: '01/06/2023',
        receipt: 60,
      },
    ])
  }
)
