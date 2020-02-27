import React, { useContext, useState } from 'react';
import { GlobalState } from '../../context/GlobalState';

const AddTransaction = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalState);
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      amount: +amount
    };
    addTransaction(newTransaction);
    setName('');
    setAmount('');
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Text</label>
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
            Amount <br />
            <small>(negative - expense, positive + income)</small>
          </label>
          <input
            required
            type='number'
            value={amount}
            placeholder='Enter Amount...'
            onChange={({ target: { value } }) => setAmount(value)}
          />
        </div>
        <button type='submit' className='btn'>
          add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
