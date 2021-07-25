import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import closeIgm from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { TransactionsContext } from '../../TransactionsContext';


import * as S from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    
    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');

    onRequestClose();
  }

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
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

      <S.TransactionTypeContainer>
        <S.RadioBox
          type="button"
          onClick={() => setType('deposit')}
          isActive={type === 'deposit'}
          activeColor="green"
        >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </S.RadioBox>

        <S.RadioBox
          type="button"
          onClick={() => setType('withdraw')}
          isActive={type === 'withdraw'}
          activeColor="red"

        >
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </S.RadioBox>
      </S.TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)} 
        />

        <button 
          type="submit"
          onClick={handleCreateNewTransaction}
        >
            Cadastrar
        </button>

        </S.Container>
    </Modal>
  )
}