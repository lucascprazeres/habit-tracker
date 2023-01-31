import {
  generateDatesFromOneYearAgo,
  generateDatesFromSixMonthsAgo,
  generateDatesFromThreeMonthsAgo,
} from '@app/utils/date'
import { useEffect, useMemo, useState } from 'react'
import { WEEK_DAYS } from './constants'
import { HabitDay } from './HabitDay'
import {
  SummaryTableBody,
  SummaryTableContainer,
  SummaryTableHeader,
  WeekDay,
} from './styles'

type DateRange = 'quarter' | 'semester' | 'year'

export function SummaryTable() {
  const [dateRange, setDateRange] = useState<DateRange>('semester')

  const summaryDates = useMemo(() => {
    const ranges = {
      quarter: generateDatesFromThreeMonthsAgo,
      semester: generateDatesFromSixMonthsAgo,
      year: generateDatesFromOneYearAgo,
    }

    return ranges[dateRange]()
  }, [dateRange])

  return (
    <SummaryTableContainer>
      <SummaryTableHeader>
        {WEEK_DAYS.map((weekDay, index) => (
          <WeekDay key={`${weekDay}-${index}`}>{weekDay}</WeekDay>
        ))}
      </SummaryTableHeader>

      <SummaryTableBody>
        {summaryDates.map((date) => (
          <HabitDay key={date.toISOString()} date={date} />
        ))}
      </SummaryTableBody>
    </SummaryTableContainer>
  )
}
