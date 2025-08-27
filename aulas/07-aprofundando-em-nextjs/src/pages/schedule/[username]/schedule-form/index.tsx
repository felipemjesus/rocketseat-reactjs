import CalendarStep from './calendar-step'
import ConfirmStep from './confirm-step'

export default function ScheduleForm() {
  const isConfirm = false

  return (
    <>
      {!isConfirm && <CalendarStep />}
      {isConfirm && <ConfirmStep />}
    </>
  )
}
