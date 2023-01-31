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
  margin-top: 1rem;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 1rem;
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

export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-weight: 600;
  background-color: ${(props) => props.theme['green-600']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-500']};
    transition: background-color 0.2s;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
