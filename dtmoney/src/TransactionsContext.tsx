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

interface TransactionProviderProps {
  children: ReactNode;
}


export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api('trasactions')
      .then(response => setTransactions(response.data.trasactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}> 
      {children}
    </TransactionsContext.Provider>
  );
}