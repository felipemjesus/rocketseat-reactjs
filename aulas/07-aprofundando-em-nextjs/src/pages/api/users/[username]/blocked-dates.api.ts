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

  return res.status(200).json({ blockedWeekDays })
}
