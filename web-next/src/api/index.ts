import { request } from '@app/lib/axios'

interface CreateNewHabitParams {
  title: string
  weekDays: number[]
}

export async function createNewHabit(params: CreateNewHabitParams) {
  await request.post('/habits', params)
}
