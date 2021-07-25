import Modal from 'react-modal';
import closeIgm from '../../assets/close.svg'
import * as S from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
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