import { css } from 'styled-components'

export function getStylesByProgressPercentage(progress: number) {
  if (progress === 0) {
    return css`
      background: ${(props) => props.theme['zinc-900']};
      border: 2px solid ${(props) => props.theme['zinc-800']};
    `
  }

  if (progress > 0 && progress < 20) {
    return css`
      background: ${(props) => props.theme['violet-900']};
      border: 2px solid ${(props) => props.theme['violet-700']};
    `
  }

  if (progress >= 20 && progress < 40) {
    return css`
      background: ${(props) => props.theme['violet-800']};
      border: 2px solid ${(props) => props.theme['violet-600']};
    `
  }

  if (progress >= 40 && progress < 60) {
    return css`
      background: ${(props) => props.theme['violet-700']};
      border: 2px solid ${(props) => props.theme['violet-500']};
    `
  }

  if (progress >= 60 && progress < 80) {
    return css`
      background: ${(props) => props.theme['violet-600']};
      border: 2px solid ${(props) => props.theme['violet-500']};
    `
  }

  if (progress >= 80) {
    return css`
      background: ${(props) => props.theme['violet-500']};
      border: 2px solid ${(props) => props.theme['violet-400']};
    `
  }
}
