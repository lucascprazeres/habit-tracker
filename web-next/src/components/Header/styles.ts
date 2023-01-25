import * as Dialog from '@radix-ui/react-dialog'

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const OpenNewHabitModalButton = styled(Dialog.Trigger)`
  border: 2px solid ${(props) => props.theme['violet-500']};
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    border-color: ${(props) => props.theme['violet-300']};
    transition: border-color 0.2s;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['violet-600']};
  }
`

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
  position: fixed;
  inset: 0;
`

export const ModalContent = styled(Dialog.Content)`
  position: absolute;
  padding: 2.5rem;
  background: ${(props) => props.theme['zinc-900']};
  border-radius: 1rem;
  width: 100%;
  max-width: 28rem;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

export const CloseModalButton = styled(Dialog.Close)`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  color: ${(props) => props.theme['zinc-400']};
  border-radius: 0.5rem;

  &:hover {
    color: ${(props) => props.theme['zinc-200']};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['violet-700']};
  }
`

export const ModalTitle = styled(Dialog.Title)`
  font-size: 1.75rem;
  line-height: 1.25;
  font-weight: 800;
`
