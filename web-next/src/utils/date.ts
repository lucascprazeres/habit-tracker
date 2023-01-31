import dayjs from 'dayjs'

export function generateDatesFromThreeMonthsAgo() {
  const today = new Date()
  const threeMonthsAgo = dayjs().subtract(3, 'months').startOf('day')

  const dates = []
  let compareDate = threeMonthsAgo

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}

export function generateDatesFromSixMonthsAgo() {
  const today = new Date()
  const threeMonthsAgo = dayjs().subtract(6, 'months').startOf('day')

  const dates = []
  let compareDate = threeMonthsAgo

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}

export function generateDatesFromOneYearAgo() {
  const today = new Date()
  const threeMonthsAgo = dayjs().subtract(1, 'year').startOf('day')

  const dates = []
  let compareDate = threeMonthsAgo

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}
