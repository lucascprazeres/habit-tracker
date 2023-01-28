import { InputHTMLAttributes, forwardRef } from 'react'
import { StyledInput } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const Input = forwardRef((props: InputProps, ref: any) => {
  return <StyledInput ref={ref} {...props} />
})

Input.displayName = 'Input'
