import React, { useContext } from 'react';
import { TransactionsContext } from  '../contexts/globalState';
import { Transactions } from '../../api/transactions';


export const Transaction = ({transaction}) => {
  const { deleteTransaction } = useContext(TransactionsContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionClass = transaction.amount < 0 ? 'minus' : 'plus';

  const onClick = e => {
    e.preventDefault();
    Transactions.remove(transaction._id);
  }

  return (
    <li className={transactionClass}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={onClick} className="delete-btn">x</button>
    </li>
  )
}
