import React, { useContext } from 'react';
import { GlobalState } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/FormatNumbers';

const Transaction = ({ transaction: { id, amount, name } }) => {
  const { deleteTransaction } = useContext(GlobalState);
  return (
    <li className={amount < 0 ? 'expense' : 'income'}>
      {name}
      <span>
        {amount < 0 ? '-' : '+'} ${numberWithCommas(Math.abs(amount))}
      </span>
      <button className='delete-btn' onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
