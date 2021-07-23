import { useEffect } from 'react'
import { api } from '../../services/api'
import * as S from './styles'

export function TransactionsTable() {
  useEffect(() => {
    api('trasactions')
      .then(response => console.log(response.data))
  }, [])
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Denv. de website</td>
            <td className="deposit">R$12.000</td>
            <td>Dev</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$800</td>
            <td>Casa</td>
            <td>07/02/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  )
}