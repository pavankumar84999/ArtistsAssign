import React, { Component } from 'react';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Transaction Manager</h1>
        <AddTransaction />
        <TransactionsList />
      </div>
    );
  }
}

export default App;
