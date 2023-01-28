import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import {
  CheckboxContainer,
  CheckboxItem,
  CheckboxTitle,
  FormContainer,
  Label,
  SubmitButton,
} from './styles'
import { AVAILABLE_WEEK_DAYS } from './constants'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Input } from '../Input'

import * as api from '../../api'
import { Loader } from '../Loader'
import { FormError } from '../FormError'

interface CreateNewHabitData {
  title: string
}

export function NewHabitForm() {
  const [weekDays, setWeekDays] = useState<number[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateNewHabitData>({ mode: 'onSubmit' })

  async function handleCreateNewHabit({ title }: CreateNewHabitData) {
    if (!weekDays) return

    await api.createNewHabit({ title, weekDays })

    alert('Novo hábito criado com sucesso!')
  }

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      return setWeekDays((prevState) =>
        prevState.filter((index) => index !== weekDayIndex),
      )
    }

    setWeekDays((prevState) => [...prevState, weekDayIndex])
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleCreateNewHabit)}>
      <Label htmlFor="title">Qual seu comprometimento?</Label>

      <Input
        type="text"
        id="title"
        hasError={!!errors.title}
        placeholder="ex.: Exercícios, dormir bem, etc..."
        {...register('title', {
          required: {
            value: true,
            message: 'O nome do hábito deve ser inserido.',
          },
        })}
      />

      <FormError error={errors.title} />

      <Label>Qual é a recorrência?</Label>

      <CheckboxContainer>
        {AVAILABLE_WEEK_DAYS.map((weekDay, index) => (
          <CheckboxItem
            key={weekDay}
            onCheckedChange={() => handleToggleWeekDay(index)}
          >
            <div>
              <Checkbox.Indicator>
                <Check size={24} color="#fff" />
              </Checkbox.Indicator>
            </div>

            <CheckboxTitle>{weekDay}</CheckboxTitle>
          </CheckboxItem>
        ))}
      </CheckboxContainer>

      <SubmitButton type="submit" disabled={!!errors.title || !weekDays.length}>
        {isSubmitting ? (
          <Loader />
        ) : (
          <>
            <Check size={24} weight="bold" />
            Confirmar
          </>
        )}
      </SubmitButton>
    </FormContainer>
  )
}
