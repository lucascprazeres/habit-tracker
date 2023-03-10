import { useEffect, useId, useState } from "react"
import dayjs from 'dayjs'
import { api } from "../lib/axios"
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const WEEK_DAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDates = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDates - summaryDates.length

type Summary = Array<{
  id: string
  date: string
  amount: number
  completed: number
}>

export function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([])

  useEffect(() => {
    api.get('/summary')
      .then(response => setSummary(response.data))
  }, [])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row">
        {WEEK_DAYS.map((day, index) => (
          <div key={`${day}-${index}`} className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summary.length > 0 && summaryDates.map((date) => {
          const dayInSummary = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          })
          
          return (
            <HabitDay
              key={date.toISOString()}
              date={date}
              amount={dayInSummary?.amount}
              defaultCompleted={dayInSummary?.completed}
            />
          )
        })}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => (
          <div key={index} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"/>
        ))}
      </div>
    </div>
  )
}