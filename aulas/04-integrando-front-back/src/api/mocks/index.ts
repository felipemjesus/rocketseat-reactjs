import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amout-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getProfileMock } from './get-profile-mock'
import { updateProfileMock } from './update-profile-mock'
import { getOrdersMock } from './get-orders-mock'
import { getOrderDetailsMock } from './get-order-details-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getDayOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getManagedRestaurantMock,
  getProfileMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
