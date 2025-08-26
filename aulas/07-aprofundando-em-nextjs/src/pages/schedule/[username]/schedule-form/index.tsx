import CalendarStep from './calendar-step'
import ConfirmStep from './confirm-step'

export default function ScheduleForm() {
  const isComfirm = true

  return (
    <>
      {!isComfirm && <CalendarStep />}
      {isComfirm && <ConfirmStep />}
    </>
  )
}
