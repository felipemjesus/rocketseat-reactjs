import { Calendar } from '@/components/calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export default function CalendarStep() {
  const isDateSelected = false

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            segunda-feira, <span>25 de agosto</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>09:00h</TimePickerItem>
            <TimePickerItem>10:00h</TimePickerItem>
            <TimePickerItem>11:00h</TimePickerItem>
            <TimePickerItem disabled>12:00h</TimePickerItem>
            <TimePickerItem disabled>13:00h</TimePickerItem>
            <TimePickerItem>14:00h</TimePickerItem>
            <TimePickerItem>15:00h</TimePickerItem>
            <TimePickerItem>16:00h</TimePickerItem>
            <TimePickerItem>17:00h</TimePickerItem>
            <TimePickerItem>18:00h</TimePickerItem>
            <TimePickerItem>19:00h</TimePickerItem>
            <TimePickerItem>20:00h</TimePickerItem>
            <TimePickerItem>21:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
