import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import {
  CheckboxContainer,
  CheckboxItem,
  CheckboxTitle,
  FormContainer,
  Input,
  Label,
} from './styles'
import { AVAILABLE_WEEK_DAYS } from './constants'

export function NewHabitForm() {
  return (
    <FormContainer>
      <Label htmlFor="title">Qual seu comprometimento?</Label>

      <Input
        type="text"
        id="title"
        name="title"
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
    </FormContainer>
  )
}
