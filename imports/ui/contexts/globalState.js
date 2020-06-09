import React, { createContext } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Transactions } from '../../api/transactions';

export const TransactionsContext = createContext('transactions');

export const withTransactions = withTracker((props) => {
  const transactions = Transactions.find({}).fetch();

  return { transactions }
});

/**
 * provider component
 * this component is going to wrap our other components, so we're passing in 'children' as a prop
 * here to use within this function.
 *  */
const Provider = (props) => {

    const deleteTransaction = (transaction) => {
      Transactions.remove(transaction._id);
    }

    const addTransaction = (transaction) => {
      Transactions.insert(
        transaction
      );
    }

  return (
    <TransactionsContext.Provider value={
      {
      transactions: props.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {props.children}
    </TransactionsContext.Provider>
  );
};

export const TransactionsProvider = withTransactions(Provider);
