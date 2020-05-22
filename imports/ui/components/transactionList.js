import React, { useContext } from 'react';
import { TransactionsContext } from  '../contexts/globalState';
import { Transaction } from './transaction';

export const TransactionList = () => {
  const {transactions} = useContext(TransactionsContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        { transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        )) }
      </ul>
    </>
  )
}
