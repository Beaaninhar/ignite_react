import logoImg from '../../assets/logo.svg'

import * as S from './styles'

interface HeaderPros {
  onOpenNewTransacionModal: () => void;
}

export function Header({ onOpenNewTransacionModal }: HeaderPros) {


  return (
    <S.Container>
      <S.Content>
      <img src={logoImg} alt="dt money" />
      <button type="button" onClick={onOpenNewTransacionModal}>Nova transação</button>
      
      </S.Content>
    </S.Container>
  )
}