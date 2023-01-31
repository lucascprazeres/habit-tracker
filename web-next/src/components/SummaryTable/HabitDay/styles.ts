import styled from 'styled-components'
import * as Popover from '@radix-ui/react-popover'
import { getStylesByProgressPercentage } from './utils'

interface HabitButtonProps {
  progress: number
}

export const HabitButton = styled(Popover.Trigger)<HabitButtonProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;

  ${(props) => getStylesByProgressPercentage(props.progress)}
`

export const HabitDayContent = styled(Popover.Content)`
  min-width: 20rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: ${(props) => props.theme['zinc-900']};
  display: flex;
  flex-direction: column;
`

export const WeekDay = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme['zinc-400']};
`

export const DateTitle = styled.span`
  margin-top: 0.25rem;
  font-weight: 800;
  line-height: 1.25;
  font-size: 1.875rem;
`
