import incomeIgm from '../../assets/income.svg'
import outcomeIgm from '../../assets/outcome.svg'
import totalIgm from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";


import * as S from './styles'

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
      if (transaction.type === 'deposit'){
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      }else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount;
      }

      return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIgm} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeIgm} alt="Saidas" />
        </header>
        <strong>
          -{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="background-green">
        <header>
          <p>Total</p>
          <img src={totalIgm} alt="TotalSaidas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </S.Container>
  )
}