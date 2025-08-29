import { Calendar } from '@/components/calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'
import { useState } from 'react'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}

interface AvailabilityResponse {
  data: Availability
}

export default function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const router = useRouter()

  const username = String(router.query.username)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null

  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  const selectedDateWithoutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : null

  const { data: availability, isSuccess: isAvailability } =
    useQuery<AvailabilityResponse>({
      queryKey: ['availability', selectedDateWithoutTime],
      queryFn: () => {
        return api.get(`/users/${username}/availability`, {
          params: {
            date: selectedDateWithoutTime,
          },
        })
      },
      enabled: isDateSelected,
    })

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay}, <span>{describedDate}</span>
          </TimePickerHeader>

          {isAvailability && (
            <TimePickerList>
              {availability?.data?.possibleTimes.map((hour) => {
                return (
                  <TimePickerItem
                    key={hour}
                    disabled={!availability?.data.availableTimes.includes(hour)}
                  >
                    {String(hour).padStart(2, '0')}:00h
                  </TimePickerItem>
                )
              })}
            </TimePickerList>
          )}
        </TimePicker>
      )}
    </Container>
  )
}
