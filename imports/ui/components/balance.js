import React, { useContext } from 'react';
import { TransactionsContext } from  '../contexts/globalState';

export const Balance = () => {
  const {transactions} = useContext(TransactionsContext);

  const totalBalance = transactions
                        .reduce((sum, el) => sum += el.amount, 0)
                        .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totalBalance}</h1>
    </>
  )
}
