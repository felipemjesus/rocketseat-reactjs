import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'
import { getWeekDays } from '@/utils/get-week-days'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Agosto <span>2025</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>
                <CalendarDay>{index}</CalendarDay>
              </td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 7 }).map((_, index) => (
              <td key={index}>
                <CalendarDay>{index}</CalendarDay>
              </td>
            ))}
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
