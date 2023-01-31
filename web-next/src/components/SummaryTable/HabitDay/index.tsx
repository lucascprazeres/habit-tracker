import * as Popover from '@radix-ui/react-popover'
import dayjs from 'dayjs'
import { HabitButton, HabitDayContent, WeekDay, DateTitle } from './styles'

interface HabitDayProps {
  date: Date
  defaultCompleted?: number
  amount?: number
}

export function HabitDay({
  defaultCompleted = 0,
  amount = 0,
  date,
}: HabitDayProps) {
  const weekDay = dayjs(date).format('dddd')
  const fullDate = dayjs(date).format('DD/MM/YY')

  return (
    <Popover.Root>
      <HabitButton progress={0} />

      <Popover.Portal>
        <HabitDayContent>
          <WeekDay>{weekDay}</WeekDay>
          <DateTitle>{fullDate}</DateTitle>
        </HabitDayContent>
      </Popover.Portal>
    </Popover.Root>
  )
}
