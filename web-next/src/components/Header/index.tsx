import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'phosphor-react'
import { NewHabitForm } from '../NewHabitForm'

import {
  CloseModalButton,
  HeaderContainer,
  ModalContent,
  ModalTitle,
  OpenNewHabitModalButton,
  Overlay,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src="/icons/logo.svg" alt="" />

      <Dialog.Root>
        <OpenNewHabitModalButton type="button">
          <Plus size={20} weight="bold" color="#8b5cf6" />
          Novo hábito
        </OpenNewHabitModalButton>

        <Dialog.Portal>
          <Overlay />

          <ModalContent>
            <CloseModalButton>
              <X size={20} aria-label="Fechar" />
            </CloseModalButton>

            <ModalTitle>Criar hábito</ModalTitle>

            <NewHabitForm />
          </ModalContent>
        </Dialog.Portal>
      </Dialog.Root>
    </HeaderContainer>
  )
}
