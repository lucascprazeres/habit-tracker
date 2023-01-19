interface HabitDayProps {
  disabled?: boolean
}

export function HabitDay(props: HabitDayProps) {
  function getDisabledStyle() {
    return props.disabled ? 'opacity-40 cursor-not-allowed' : ''
  }
  
  return (
    <div
      className={`w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg ${getDisabledStyle()}`}
    />
  )
}