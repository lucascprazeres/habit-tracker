import { useId } from "react"
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const WEEK_DAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDates = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDates - summaryDates.length

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row">
        {WEEK_DAYS.map(day => (
          <div key={useId()} className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(() => (
          <HabitDay
            key={useId()}
            amount={5}
            completed={Math.round(Math.random() * 5)}
          />
        ))}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map(() => (
          <HabitDay key={useId()} disabled />
        ))}
      </div>
    </div>
  )
}