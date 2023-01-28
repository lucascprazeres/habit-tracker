import { FieldError } from 'react-hook-form'
import { Error } from './styles'

interface FormErrorProps {
  error?: FieldError
}

export function FormError(props: FormErrorProps) {
  if (!props.error) return null

  return <Error>{props.error?.message}</Error>
}
