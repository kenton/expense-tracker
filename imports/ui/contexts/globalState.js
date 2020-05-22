import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';
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
  const [state, dispatch] = useReducer(AppReducer, []);

    // actions
    function deleteTransaction(transaction) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: transaction
      });
    }

    function addTransaction(transaction) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
      })
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
