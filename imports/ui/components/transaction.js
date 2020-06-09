import React, { useContext } from 'react';
import { TransactionsContext } from  '../contexts/globalState';


export const Transaction = ({transaction}) => {
  const { deleteTransaction } = useContext(TransactionsContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionClass = transaction.amount < 0 ? 'minus' : 'plus';

  const onClick = e => {
    e.preventDefault();
    deleteTransaction(transaction);
  }

  return (
    <li className={transactionClass}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={onClick} className="delete-btn">x</button>
    </li>
  )
}
