import React, { useContext } from 'react';
import { GlobalState } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/FormatNumbers'

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalState);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className='money-container'>
      <div>
        <h4>Income</h4>
        <p className='money income'>{numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money expense'>{numberWithCommas(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
