import { Prisma } from '@/generated/prisma'
import { prisma } from '@/lib/prisma'
import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const username = String(req.query.username)
  const { year, month } = req.query

  if (!year || !month) {
    return res.status(400).json({ message: 'Year or month not provided' })
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  const availableTimes = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true,
    },
    where: {
      user_id: user.id,
    },
  })

  const blockedWeekDays = Array.from({ length: 7 })
    .map((_, i) => i)
    .filter((weekDay) => {
      return !availableTimes.some(
        (availableTime) => availableTime.week_day === weekDay,
      )
    })

  const blockedDateRaw: Array<{ date: number }> = await prisma.$queryRawUnsafe(
    `
      SELECT
        EXTRACT(DAY FROM s.date) AS date,
        COUNT(s.date)::INT AS amount,
        ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60) AS size

      FROM schedulings AS s

      LEFT JOIN user_time_intervals AS uti
        ON uti.week_day = EXTRACT(DOW FROM s.date)

      WHERE s.user_id = $1
        AND TO_CHAR(s.date, 'YYYY-MM') = $2

      GROUP BY EXTRACT(DAY FROM s.date),
        ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60)

      HAVING COUNT(s.date) >= ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60)
    `,
    user.id,
    `${year}-${month.toString().padStart(2, '0')}`,
  )

  const blockedDates = blockedDateRaw.map((item) => item.date)

  return res.status(200).json({ blockedWeekDays, blockedDates })
}
