import React, { useContext, useState } from 'react';
import { GlobalState } from '../../context/GlobalState';

const AddTransaction = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('0');
  const [hideForm, setHideForm] = useState(false);
  const [moneyType, setMoneyType] = useState(0);
  const [inputError, setInputError] = useState('');
  const { addTransaction } = useContext(GlobalState);
  const onSubmit = e => {
    e.preventDefault();
    if (moneyType === 0 || moneyType === '0') {
      setInputError('please select type of money!');
      return;
    }
    let amt = Math.abs(amount);
    if (moneyType === 1) {
      amt = +amt;
    } else if (moneyType === 2) {
      amt = -amt;
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      amount: +amt
    };
    addTransaction(newTransaction);
    setName('');
    setAmount('');
    setInputError('');
  };

  return (
    <>
      <button
        className='btn hide-btn'
        onClick={() => setHideForm(prevState => !prevState)}
      >
        {hideForm ? 'show' : 'hide'} form
      </button>
      {!hideForm && (
        <>
          <h3>Add new transaction</h3>
          <form onSubmit={onSubmit}>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <input
                required
                type='text'
                value={name}
                placeholder='Enter Name...'
                onChange={({ target: { value } }) => setName(value)}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='amount'>
                Amount <small>(numbers only)</small>
              </label>
              <input
                required
                type='number'
                value={amount}
                placeholder='Enter Amount...'
                onChange={({ target: { value } }) => setAmount(value)}
              />
            </div>
            <div className='form-control'>
              <select
                required
                value={moneyType}
                onChange={({ target: { selectedIndex } }) =>
                  setMoneyType(selectedIndex)
                }
              >
                <option value='0' disabled>
                  Select Type:
                </option>
                <option value='1'>Income</option>
                <option value='2'>Expense</option>
              </select>
            </div>
            <button type='submit' className='btn'>
              add transaction
            </button>
            <small className='error-msg'>{inputError}</small>
          </form>
        </>
      )}
    </>
  );
};

export default AddTransaction;
