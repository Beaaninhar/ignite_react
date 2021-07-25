import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAd: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAd'>

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => void;
}


export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api('trasactions')
      .then(response => setTransactions(response.data.trasactions))
  }, []);

  function createTransaction(transaction: TransactionInput) {

    api.post('/trasactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction}}> 
      {children}
    </TransactionsContext.Provider>
  );
}