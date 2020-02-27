import React, { useContext } from 'react';
import { GlobalState } from '../../context/GlobalState';

const Transaction = ({ transaction: { id, amount, name } }) => {
  const { deleteTransaction } = useContext(GlobalState);
  return (
    <li className={amount < 0 ? 'expense' : 'income'}>
      {name}
      <span>
        {amount < 0 ? '-' : '+'}${Math.abs(amount)}
      </span>
      <button className='delete-btn' onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
