import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import {
  CheckboxContainer,
  CheckboxItem,
  CheckboxTitle,
  FormContainer,
  Input,
  Label,
  SubmitButton,
} from './styles'
import { AVAILABLE_WEEK_DAYS } from './constants'
import { useForm } from 'react-hook-form'

export function NewHabitForm() {
  const { register, handleSubmit } = useForm()

  async function handleCreateNewHabit(data) {
    console.log(data)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleCreateNewHabit)}>
      <Label htmlFor="title">Qual seu comprometimento?</Label>

      <Input
        {...register('title')}
        type="text"
        id="title"
        autoFocus
        placeholder="ex.: Exercícios, dormir bem, etc..."
      />

      <Label>Qual é a recorrência?</Label>

      <CheckboxContainer>
        {AVAILABLE_WEEK_DAYS.map((weekDay) => (
          <CheckboxItem key={weekDay}>
            <div>
              <Checkbox.Indicator>
                <Check size={24} color="#fff" />
              </Checkbox.Indicator>
            </div>

            <CheckboxTitle>{weekDay}</CheckboxTitle>
          </CheckboxItem>
        ))}
      </CheckboxContainer>

      <SubmitButton type="submit">
        <Check size={24} weight="bold" />
        Confirmar
      </SubmitButton>
    </FormContainer>
  )
}
