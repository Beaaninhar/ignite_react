import { useState } from 'react';
import Modal from 'react-modal';
import closeIgm from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'


import * as S from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button 
          className="react-modal-close" 
          type="button" 
          onClick={onRequestClose}
        >
          <img src={closeIgm} alt="Fchar modal" />
        </button>

        <S.Container>
        <h2>Nova Transação</h2>

        <input 
          placeholder="Título" 
        />

        <input 
          type="number" 
          placeholder="Valor"
        />

      <S.TransactionTypeContainer>
        <S.RadioBox
          type="button"
          onClick={() => setType('deposit')}
          isActive={type === 'deposit'}
        >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </S.RadioBox>

        <S.RadioBox
          type="button"
          onClick={() => setType('withdraw')}
          isActive={type === 'withdraw'}


        >
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </S.RadioBox>
      </S.TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
        />

        <button 
          type="submit"
        >
            Cadastrar
        </button>

        </S.Container>
    </Modal>
  )
}