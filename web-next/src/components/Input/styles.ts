import styled, { css } from 'styled-components'
import { InputProps } from '.'

export const StyledInput = styled.input<InputProps>`
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

  ${(props) =>
    props.hasError &&
    css`
      border: 2px solid ${(props) => props.theme['red-600']};

      &:focus {
        outline: none;
        border: 2px solid ${(props) => props.theme['red-600']};
      }
    `}
`
