import incomeIgm from '../../assets/income.svg'
import outcomeIgm from '../../assets/outcome.svg'
import totalIgm from '../../assets/total.svg'
import { useTransactions } from "../../TransactionsContext";


import * as S from './styles'

export function Summary() {
  const { transactions } = useTransactions();

  console.log(transactions);

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIgm} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeIgm} alt="Saidas" />
        </header>
        <strong>-R$500,00</strong>
      </div>

      <div className="background-green">
        <header>
          <p>Total</p>
          <img src={totalIgm} alt="TotalSaidas" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </S.Container>
  )
}