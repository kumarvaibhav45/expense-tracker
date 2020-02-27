import React, { useContext } from 'react';
import Transaction from '../Transaction';
import { GlobalState } from '../../context/GlobalState';

const TransactionList = () => {
  const { transactions } = useContext(GlobalState);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.length < 1 ? (
          <p>No transaction tistory!</p>
        ) : (
          transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        )}
      </ul>
    </>
  );
};

export default TransactionList;
