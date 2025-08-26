interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const weekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ]

  if (short) {
    return weekDays.map((weekDay) =>
      weekDay.substring(0, 3).toLocaleUpperCase(),
    )
  }

  return weekDays
}
