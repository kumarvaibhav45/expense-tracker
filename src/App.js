import React from 'react';
import './App.css';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalStateProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
