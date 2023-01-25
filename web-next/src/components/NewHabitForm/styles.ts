import * as Checkbox from '@radix-ui/react-checkbox'

import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`

export const Label = styled.label`
  font-weight: 600;
  line-height: 1.25;
`

export const Input = styled.input`
  border: 2px solid transparent;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 0.75rem;
  background: ${(props) => props.theme['zinc-800']};
  color: ${(props) => props.theme.white};
  margin-bottom: 2rem;

  &::placeholder {
    color: ${(props) => props.theme['zinc-400']};
  }

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme['green-500']};
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.7rem;
`

export const CheckboxItem = styled(Checkbox.Root)`
  display: flex;
  align-items: center;
  gap: 1rem;

  &:focus {
    outline: none;

    div {
      outline: none;
      box-shadow: 0 0 0 2px ${(props) => props.theme['violet-600']};
    }
  }

  div {
    height: 2rem;
    width: 2rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['zinc-900']};
    border: 2px solid ${(props) => props.theme['zinc-800']};
  }

  &[data-state='checked'] {
    div {
      background-color: ${(props) => props.theme['green-500']};
      border: 2px solid ${(props) => props.theme['green-500']};
    }
  }
`

export const CheckboxTitle = styled.span`
  line-height: 1.25;
`
