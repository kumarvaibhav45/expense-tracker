import React, { useContext } from 'react';
import { GlobalState } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/FormatNumbers';

const Balance = () => {
  const { transactions } = useContext(GlobalState);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>your balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
