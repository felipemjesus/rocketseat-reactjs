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

  const blockedDateRaw = await prisma.$queryRawUnsafe(
    `
      SELECT
        *
      FROM schedulings AS s
      WHERE s.user_id = $1
        AND TO_CHAR(s.date, 'YYYY-MM') = $2;
    `,
    user.id,
    `${year}-${month.toString().padStart(2, '0')}`,
  )

  return res.status(200).json({ blockedWeekDays, blockedDateRaw })
}
