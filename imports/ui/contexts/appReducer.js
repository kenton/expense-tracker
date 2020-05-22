import { Transactions } from '../../api/transactions';

export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      Transactions.remove({_id: action.payload._id});

    case 'ADD_TRANSACTION':
      newTransactionId = Transactions.insert(
        action.payload
      );

    default:
      return state;
  }
}
